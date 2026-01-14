#!/usr/bin/env python3
"""
Simple script to update AWS Client Context Knowledge Base from disposition data.

Usage:
    python update_client_context.py                    # Interactive mode
    python update_client_context.py --client "Bank Bazaar" --field status --value "Commercial discussion"
    python update_client_context.py --from-json dispositions.json
"""

import json
import re
import sys
from datetime import datetime
from pathlib import Path

# Default paths - update these to match your setup
KNOWLEDGE_BASE_PATH = Path.home() / "Downloads" / "AWS_Client_Context_Knowledge_Base.md"
DISPOSITIONS_LOG = Path.home() / "Downloads" / "dispositions_log.json"


def load_knowledge_base(path: Path) -> str:
    """Load the knowledge base markdown file."""
    if not path.exists():
        print(f"❌ Knowledge base not found at: {path}")
        sys.exit(1)
    return path.read_text()


def save_knowledge_base(path: Path, content: str):
    """Save the updated knowledge base."""
    # Backup first
    backup_path = path.with_suffix(".md.backup")
    if path.exists():
        backup_path.write_text(path.read_text())
        print(f"📦 Backup saved to: {backup_path}")
    
    path.write_text(content)
    print(f"✅ Knowledge base updated: {path}")


def log_disposition(client: str, field: str, old_value: str, new_value: str, reported_by: str = "Unknown"):
    """Log the disposition for tracking."""
    log_entry = {
        "timestamp": datetime.now().isoformat(),
        "client": client,
        "field": field,
        "old_value": old_value,
        "new_value": new_value,
        "reported_by": reported_by
    }
    
    # Load existing log or create new
    if DISPOSITIONS_LOG.exists():
        log_data = json.loads(DISPOSITIONS_LOG.read_text())
    else:
        log_data = {"dispositions": []}
    
    log_data["dispositions"].append(log_entry)
    DISPOSITIONS_LOG.write_text(json.dumps(log_data, indent=2))
    print(f"📝 Disposition logged to: {DISPOSITIONS_LOG}")


def update_client_field(content: str, client: str, field: str, new_value: str) -> tuple[str, str]:
    """
    Update a specific field for a client in the knowledge base.
    Returns (updated_content, old_value).
    """
    # Find the client section
    client_pattern = rf"(### {re.escape(client)}.*?)(?=\n### |\n---|\Z)"
    match = re.search(client_pattern, content, re.DOTALL | re.IGNORECASE)
    
    if not match:
        print(f"⚠️  Client '{client}' not found in knowledge base")
        return content, ""
    
    client_section = match.group(1)
    old_value = ""
    
    # Common field patterns
    field_patterns = {
        "status": r"(\*\*Status:\*\* )([^\n]+)",
        "priority": r"(\*\*Priority:\*\* )([^\n]+)",
        "owner": r"(\*\*Owner:\*\* )([^\n]+)",
        "vpc_deployment": r"(\*\*VPC Deployment:\*\* )([^\n]+)",
        "marketplace": r"(\*\*Marketplace:\*\* )([^\n]+)",
        "partner_involved": r"(\*\*Partner Involved:\*\* )([^\n]+)",
        "next_steps": r"(\*\*Next Steps:\*\*\n)((?:[\d]+\. [^\n]+\n?)+)",
        "summary": r"(\*\*Summary:\*\*\n)([^\n]+)",
        "aws_contact": r"(\*\*AWS Contact:\*\* )([^\n]+)",
        "aws_am": r"(\*\*AWS Account Manager:\*\* )([^\n]+)",
    }
    
    field_key = field.lower().replace(" ", "_")
    
    if field_key in field_patterns:
        pattern = field_patterns[field_key]
        field_match = re.search(pattern, client_section)
        
        if field_match:
            old_value = field_match.group(2).strip()
            new_section = re.sub(pattern, rf"\g<1>{new_value}", client_section)
            content = content.replace(client_section, new_section)
            print(f"✏️  Updated {field} for {client}: '{old_value}' → '{new_value}'")
        else:
            print(f"⚠️  Field '{field}' not found for client '{client}'")
    else:
        print(f"⚠️  Unknown field: '{field}'")
        print(f"   Available fields: {', '.join(field_patterns.keys())}")
    
    return content, old_value


def update_overview_table(content: str, client: str, field: str, new_value: str) -> str:
    """Update the overview table at the top of the document."""
    # Map fields to table columns
    table_columns = {
        "status": 1,
        "vpc_deployment": 2,
        "marketplace": 3,
        "priority": 4
    }
    
    field_key = field.lower().replace(" ", "_")
    if field_key not in table_columns:
        return content
    
    # Find and update the table row
    table_pattern = rf"(\| {re.escape(client)} \|)([^|]+\|)([^|]+\|)([^|]+\|)([^|]+\|)"
    
    def replace_column(match):
        parts = list(match.groups())
        col_idx = table_columns[field_key]
        parts[col_idx] = f" {new_value} |"
        return "".join(parts)
    
    content = re.sub(table_pattern, replace_column, content, flags=re.IGNORECASE)
    return content


def interactive_mode():
    """Run in interactive mode for easy updates."""
    print("\n" + "="*50)
    print("🎯 AWS Client Context Updater")
    print("="*50 + "\n")
    
    content = load_knowledge_base(KNOWLEDGE_BASE_PATH)
    
    # List available clients
    clients = re.findall(r"### ([^\n]+)", content)
    clients = [c for c in clients if c not in ["Current Outbound Operations & Challenges", "POC Requirements & Objectives", "Next Steps"]]
    
    print("Available clients:")
    for i, client in enumerate(clients, 1):
        print(f"  {i}. {client}")
    
    print("\nEnter client number or name (or 'q' to quit):")
    client_input = input("> ").strip()
    
    if client_input.lower() == 'q':
        print("👋 Goodbye!")
        return
    
    # Handle number input
    if client_input.isdigit():
        idx = int(client_input) - 1
        if 0 <= idx < len(clients):
            client = clients[idx]
        else:
            print("❌ Invalid number")
            return
    else:
        client = client_input
    
    print(f"\nUpdating: {client}")
    print("\nAvailable fields:")
    print("  1. status")
    print("  2. priority")
    print("  3. owner")
    print("  4. vpc_deployment")
    print("  5. marketplace")
    print("  6. partner_involved")
    print("  7. next_steps")
    print("  8. summary")
    
    print("\nEnter field number or name:")
    field_input = input("> ").strip()
    
    field_map = {
        "1": "status", "2": "priority", "3": "owner",
        "4": "vpc_deployment", "5": "marketplace", 
        "6": "partner_involved", "7": "next_steps", "8": "summary"
    }
    field = field_map.get(field_input, field_input)
    
    print(f"\nEnter new value for '{field}':")
    new_value = input("> ").strip()
    
    print("\nWho reported this update? (Raman/Vijay/Other):")
    reported_by = input("> ").strip() or "Unknown"
    
    # Update the content
    content, old_value = update_client_field(content, client, field, new_value)
    content = update_overview_table(content, client, field, new_value)
    
    # Update the "Last Updated" date
    content = re.sub(
        r"Last Updated: [^\n]+",
        f"Last Updated: {datetime.now().strftime('%B %Y')}",
        content
    )
    
    # Save and log
    save_knowledge_base(KNOWLEDGE_BASE_PATH, content)
    log_disposition(client, field, old_value, new_value, reported_by)
    
    print("\n✅ Update complete!")
    print("\nUpdate another? (y/n):")
    if input("> ").strip().lower() == 'y':
        interactive_mode()


def update_from_json(json_path: str):
    """Batch update from a JSON file of dispositions."""
    json_file = Path(json_path)
    if not json_file.exists():
        print(f"❌ JSON file not found: {json_path}")
        sys.exit(1)
    
    data = json.loads(json_file.read_text())
    dispositions = data.get("dispositions", data if isinstance(data, list) else [data])
    
    content = load_knowledge_base(KNOWLEDGE_BASE_PATH)
    
    for disp in dispositions:
        client = disp.get("client")
        field = disp.get("field")
        new_value = disp.get("new_value") or disp.get("updated_value")
        reported_by = disp.get("reported_by", "Unknown")
        
        if client and field and new_value:
            content, old_value = update_client_field(content, client, field, new_value)
            content = update_overview_table(content, client, field, new_value)
            log_disposition(client, field, old_value, new_value, reported_by)
    
    # Update timestamp
    content = re.sub(
        r"Last Updated: [^\n]+",
        f"Last Updated: {datetime.now().strftime('%B %Y')}",
        content
    )
    
    save_knowledge_base(KNOWLEDGE_BASE_PATH, content)
    print(f"\n✅ Processed {len(dispositions)} updates!")


def main():
    import argparse
    
    parser = argparse.ArgumentParser(description="Update AWS Client Context Knowledge Base")
    parser.add_argument("--client", help="Client name to update")
    parser.add_argument("--field", help="Field to update (status, priority, owner, vpc_deployment, marketplace, partner_involved, next_steps, summary)")
    parser.add_argument("--value", help="New value for the field")
    parser.add_argument("--reported-by", default="Unknown", help="Who reported this update")
    parser.add_argument("--from-json", help="Path to JSON file with disposition data")
    parser.add_argument("--kb-path", help="Path to knowledge base file (overrides default)")
    
    args = parser.parse_args()
    
    # Override default path if specified
    global KNOWLEDGE_BASE_PATH
    if args.kb_path:
        KNOWLEDGE_BASE_PATH = Path(args.kb_path)
    
    if args.from_json:
        update_from_json(args.from_json)
    elif args.client and args.field and args.value:
        content = load_knowledge_base(KNOWLEDGE_BASE_PATH)
        content, old_value = update_client_field(content, args.client, args.field, args.value)
        content = update_overview_table(content, args.client, args.field, args.value)
        content = re.sub(
            r"Last Updated: [^\n]+",
            f"Last Updated: {datetime.now().strftime('%B %Y')}",
            content
        )
        save_knowledge_base(KNOWLEDGE_BASE_PATH, content)
        log_disposition(args.client, args.field, old_value, args.value, args.reported_by)
    else:
        interactive_mode()


if __name__ == "__main__":
    main()
