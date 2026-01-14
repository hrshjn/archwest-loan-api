import https from 'https';

const token = `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjFPM09yVHNWaTU4TXRQaHpYTVJiNCJ9.eyJodHRwczovL2Rldi5zeWJpbGwuYWkvY2xhaW1zL2lzT21uaXNjaWVudCI6ZmFsc2UsImh0dHBzOi8vZGV2LnN5YmlsbC5haS9jbGFpbXMvaGFzQ1NBY2Nlc3MiOmZhbHNlLCJodHRwczovL2Rldi5zeWJpbGwuYWkvY2xhaW1zL2ZpcnN0VGltZUxvZ2luIjpmYWxzZSwiaHR0cHM6Ly9kZXYuc3liaWxsLmFpL2NsYWltcy9zYWxlc0NvbmZBZG1pbiI6ZmFsc2UsImh0dHBzOi8vZGV2LnN5YmlsbC5haS9jbGFpbXMvY29ob3J0QSI6ZmFsc2UsImh0dHBzOi8vZGV2LnN5YmlsbC5haS9jbGFpbXMvaW50ZXJjb21Vc2VySGFzaCI6IjdjZWJjYjYwMWZjNGVjOTdhOTk1YmY2MmVkYTkwNDUwYjU1YTRiNmM2MTQzODZjMGFiMTE4NTM1ODZjYmUyOGUiLCJodHRwczovL2Rldi5zeWJpbGwuYWkvY2xhaW1zL2VmZmVjdGl2ZVVzZXJJZCI6ImIxYTBlYjg1LTQ3MGMtNDA4OS1iN2I2LWFmMTk2NDdiYjQ0ZCIsImh0dHBzOi8vZGV2LnN5YmlsbC5haS9jbGFpbXMvc3ljVXNlcklkIjoiYjFhMGViODUtNDcwYy00MDg5LWI3YjYtYWYxOTY0N2JiNDRkIiwiaHR0cHM6Ly9kZXYuc3liaWxsLmFpL2NsYWltcy9tb25nb1VzZXJJZCI6ImIxYTBlYjg1LTQ3MGMtNDA4OS1iN2I2LWFmMTk2NDdiYjQ0ZCIsImh0dHBzOi8vZGV2LnN5YmlsbC5haS9jbGFpbXMvb3JnRG9tYWluIjoic21hbGxlc3QuYWkiLCJodHRwczovL2Rldi5zeWJpbGwuYWkvY2xhaW1zL3N5c3RlbUlkZW50aXRpZXMiOlt7InByaW5jaXBhbCI6IlNZQklMTC1iMWEwZWI4NS00NzBjLTQwODktYjdiNi1hZjE5NjQ3YmI0NGQiLCJyZXZva2VkIjpmYWxzZSwidGVhbSI6ZmFsc2V9XSwiaHR0cHM6Ly9kZXYuc3liaWxsLmFpL2NsYWltcy9vbmJvYXJkaW5nUmVxdWlyZWQiOmZhbHNlLCJnaXZlbl9uYW1lIjoiSGFyc2giLCJmYW1pbHlfbmFtZSI6IkphaW4iLCJuaWNrbmFtZSI6ImhhcnNoIiwibmFtZSI6IkhhcnNoIEphaW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSXFyU2tKQlFUU3hMc0FiMEdfUzJYV2JPSE83bXhYNWFWeUpjVGRKMXFDQzBiRlM0bz1zOTYtYyIsInVwZGF0ZWRfYXQiOiIyMDI2LTAxLTExVDA4OjM5OjQxLjU2M1oiLCJlbWFpbCI6ImhhcnNoQHNtYWxsZXN0LmFpIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vYXV0aC5zeWJpbGwuYWkvIiwiYXVkIjoiY2hqSGFzYlFoV0ltb3NvUlRmazhVT0Z5WG5mY1Q0TVMiLCJzdWIiOiJvYXV0aDJ8Z29vZ2xlLW9hdXRoMi1jdXN0b218MTEyMzI4NzgxOTAzMjQwMzk5OTgyIiwiaWF0IjoxNzY4NDE1NTY3LCJleHAiOjE3Njg1MDE5NjcsInNpZCI6InVBZmlFcHpXdG1iWXh4OWdlS3JkM0F1ci1aZFVuODZ1Iiwibm9uY2UiOiJNRk4wVTJ0VU9URnJVekp4UTBRMVJDNWxWM293VldnelpVRkVORWR0TkVveWRsY3dUWGRqUlRSdWVBPT0ifQ.j1ICa6JyjoffOeSUXIsiLuJwQrCtjYQOlPZjgtZi7Q86ibUblVuH2eI6B3Vseg9Hm-mimf-W1LIt7YYdVfdj4Lj2zMoej_WVqfTXya7mXltyWMNcwJ0jj_Kn5fGD2uriKW-H4g59vFi4yQ6mU342eemf8vqUjoc2lLWaBSZdr5GVo_okzNYvR8dIjgVDRnAHT8r4HO041Lj1A4aHdOE2iXch17B63d6hvo16zg85VdceqKICHgv9LD4fAKouIL06tP3tfcOcWNq9AMdAiQJ5jbn5Wx3KuHMbX2hwDBqxbvS9949yLxNaXHcVd2A5ZkQunDdWaxfrcJvIGclfIWTLvA`;

// Test 1: Get single call extended
const options = {
  hostname: 'api-cf.dev.sybill.ai',
  port: 443,
  path: '/calls/62282192-60a5-4b9e-b0e5-f1a2f7cef69b/extended',
  method: 'GET',
  headers: {
    'accept': '*/*',
    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
    'authorization': token,
    'baggage': 'sentry-environment=production,sentry-release=3a2fba4a415249b4f9dceb43bf41384eef953095,sentry-public_key=5d780a7a4626585ad8b23f2727e034c8,sentry-trace_id=66b0f7c659354c6fabf1de9857fd523b,sentry-org_id=4508843023925249,sentry-sampled=false,sentry-sample_rand=0.449124689277727,sentry-sample_rate=0.3',
    'origin': 'https://app.sybill.ai',
    'priority': 'u=1, i',
    'referer': 'https://app.sybill.ai/',
    'sec-ch-ua': '"Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'sentry-trace': '66b0f7c659354c6fabf1de9857fd523b-b15e2398efc281a7-0',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36',
    'x-fs-session-id': 'e03d5177-f0b0-4961-960a-f48dd493e550:bc22b217-72d5-485c-946e-2f59a540e94c',
  }
};

console.log('Testing Sybill API...\n');
console.log('Token length:', token.length);
console.log('Calling:', options.path);

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('\nStatus:', res.statusCode);
    try {
      const json = JSON.parse(data);
      console.log('Response keys:', Object.keys(json));
      if (json.detail) {
        console.log('Error:', json.detail);
      } else if (json.title || json._id) {
        console.log('✓ Call found:', json.title || json.meeting_title);
        console.log('Call ID:', json._id);
      }
    } catch (e) {
      console.log('Raw response:', data.substring(0, 500));
    }
  });
});

req.on('error', e => console.error('Request error:', e.message));
req.end();
