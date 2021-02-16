module.exports = {
  testTopics: [{
    topic: 'challenge.notification.create',
    originator: 'autopilot-api',
    timestamp: '2020-05-08T00:00:00.000Z',
    'mime-type': 'application/json',
    payload: {
      id: '43886f12-9d41-44d6-8993-949174f84558'
    }
  },
  {
    topic: 'challenge.notification.update',
    originator: 'autopilot-api',
    timestamp: '2020-05-08T00:00:00.000Z',
    'mime-type': 'application/json',
    payload: {
      id: '43886f12-9d41-44d6-8993-949174f84558'
    }
  }
  ],
  mockChallenge: {
    id: '43886f12-9d41-44d6-8993-949174f84558',
    phases: [{
      duration: 259200,
      scheduledEndDate: '2020-12-12T15:22:24.000Z',
      actualEndDate: '2020-12-12T15:22:24.000Z',
      isOpen: true,
      phaseId: 'a93544bc-c165-4af4-b55e-18f3593b457a',
      name: 'Registration',
      actualStartDate: '2020-12-09T15:22:24.000Z',
      description: 'Registration Phase',
      id: '017319d8-90b8-4b06-917a-02d8d0020476',
      scheduledStartDate: '2020-12-09T15:22:24.000Z'
    },
    {
      duration: 259200,
      scheduledEndDate: '2020-12-15T15:22:24.000Z',
      actualEndDate: '2020-12-15T15:22:24.000Z',
      isOpen: false,
      phaseId: '6950164f-3c5e-4bdc-abc8-22aaf5a1bd49',
      name: 'Submission',
      actualStartDate: '2020-12-12T15:22:24.000Z',
      description: 'Submission Phase',
      id: 'cba3936b-ea18-41f2-bb4a-bfca6d5d7c4b',
      predecessor: '017319d8-90b8-4b06-917a-02d8d0020476',
      scheduledStartDate: '2020-12-12T15:22:24.000Z'
    },
    {
      duration: 172800,
      scheduledEndDate: '2020-12-17T15:22:24.000Z',
      actualEndDate: '2020-12-17T15:22:24.000Z',
      isOpen: false,
      phaseId: 'aa5a3f78-79e0-4bf7-93ff-b11e8f5b398b',
      name: 'Review',
      actualStartDate: '2020-12-15T15:22:24.000Z',
      description: 'Review Phase',
      id: 'c4a5d891-447d-473a-a4b6-2260008b6300',
      predecessor: 'cba3936b-ea18-41f2-bb4a-bfca6d5d7c4b',
      scheduledStartDate: '2020-12-15T15:22:24.000Z'
    },
    {
      duration: 86400,
      scheduledEndDate: '2020-12-18T15:22:24.000Z',
      actualEndDate: '2020-12-18T15:22:24.000Z',
      isOpen: false,
      phaseId: '1c24cfb3-5b0a-4dbd-b6bd-4b0dff5349c6',
      name: 'Appeals',
      actualStartDate: '2020-12-17T15:22:24.000Z',
      description: 'Appeals Phase',
      id: 'f34d326d-7f72-423c-9c8e-3228402b5c40',
      predecessor: 'c4a5d891-447d-473a-a4b6-2260008b6300',
      scheduledStartDate: '2020-12-17T15:22:24.000Z'
    },
    {
      duration: 86400,
      scheduledEndDate: '2020-12-19T15:22:24.000Z',
      actualEndDate: '2020-12-19T15:22:24.000Z',
      isOpen: false,
      phaseId: '797a6af7-cd3f-4436-9fca-9679f773bee9',
      name: 'Appeals Response',
      actualStartDate: '2020-12-18T15:22:24.000Z',
      description: 'Appeals Response Phase',
      id: 'fff08f3c-76d3-423e-85d9-34be2efbbf57',
      predecessor: 'f34d326d-7f72-423c-9c8e-3228402b5c40',
      scheduledStartDate: '2020-12-18T15:22:24.000Z'
    }
    ]
  },
  mockEvents: [{
    'url': 'https://api.topcoder-dev.com/v5/challenges/43886f12-9d41-44d6-8993-949174f84558',
    'challengeID': '43886f12-9d41-44d6-8993-949174f84558',
    'method': 'patch',
    'scheduleTime': '2020-12-17T15:22:24.000Z',
    'headers': {
      'content-type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5VSkZORGd4UlRVME5EWTBOVVkzTlRkR05qTXlRamxETmpOQk5UYzVRVUV3UlRFeU56TTJRUSJ9.eyJpc3MiOiJodHRwczovL3RvcGNvZGVyLWRldi5hdXRoMC5jb20vIiwic3ViIjoiakdJZjJwZDNmNDRCMWpxdk9haTMwQklLVFphbllCZlVAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbTJtLnRvcGNvZGVyLWRldi5jb20vIiwiaWF0IjoxNjEyNTQzMDk0LCJleHAiOjE2MTI2Mjk0OTQsImF6cCI6ImpHSWYycGQzZjQ0QjFqcXZPYWkzMEJJS1RaYW5ZQmZVIiwic2NvcGUiOiJ1cGRhdGU6dXNlcl9wcm9maWxlcyB3cml0ZTp1c2VyX3Byb2ZpbGVzIGNyZWF0ZTpjb25uZWN0X3Byb2plY3QgYWxsOmNoYWxsZW5nZXMgcmVhZDpjaGFsbGVuZ2VzIHdyaXRlOmNoYWxsZW5nZXMgYWxsOmdyb3VwcyB3cml0ZTpncm91cHMgcmVhZDpncm91cHMgdXBkYXRlOnN1Ym1pc3Npb24gcmVhZDpzdWJtaXNzaW9uIGRlbGV0ZTpzdWJtaXNzaW9uIGNyZWF0ZTpzdWJtaXNzaW9uIGFsbDpzdWJtaXNzaW9uIHJlYWQ6cHJvamVjdCBhbGw6Y29ubmVjdF9wcm9qZWN0IHJlYWQ6YnVzX3RvcGljcyB3cml0ZTpidXNfYXBpIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIHJlYWQ6dXNlcl9wcm9maWxlcyByZWFkOnJvbGVzIHJlYWQ6cHJvamVjdC11c2VyIHJlYWQ6cHJvamVjdC1wZXJtaXNzaW9uIHJlYWQ6cmVzb3VyY2VzIHdyaXRlOnJlc291cmNlcyBkZWxldGU6cmVzb3VyY2VzIHVwZGF0ZTpyZXNvdXJjZXMgYWxsOnJlc291cmNlcyByZWFkOnRlcm1zIGFsbDp0ZXJtcyBhbGw6cHJvamVjdHMgcmVhZDpwcm9qZWN0cyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.jyepSgyW8ZHWWIvmIygggZpNRKQ5lZ4xMEtYG87_92II0RckxB3uuT37N_zbD0k42Fp8ftRrR9wEdaASF_6s384JyhAzJa7v0vy4qtbXyVIGwGutSOoZW3n23LDj9FYsudZH0UD8Omzct1d_LvXlGBlMDIYFOcf6hEI9gem_cCLuqSPVUVubwVSmsgpcUfKGa56d6gQSduFtOhqupsxzb4sTt8lqrRPnvh0-bWSVq3E9oSKvzgkuFHsh6WTWpy1EpsuPpWtktmqaLTwq1pTNWvne0av7gtZ7mF4CpK5vI1_GX7ZVBz2Be1CWn-_-AqcP2TGVpVps9V1fOgu8waL-Cg'
    },
    'payload': '{"phases":[{"phaseId":"aa5a3f78-79e0-4bf7-93ff-b11e8f5b398b","isOpen":false}]}',
    'id': 'OpnbCrAehqW54cLCgkUX'
  },
  {
    'url': 'https://api.topcoder-dev.com/v5/challenges/43886f12-9d41-44d6-8993-949174f84558',
    'challengeID': '43886f12-9d41-44d6-8993-949174f84558',
    'method': 'patch',
    'scheduleTime': '2020-12-19T15:22:24.000Z',
    'headers': {
      'content-type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5VSkZORGd4UlRVME5EWTBOVVkzTlRkR05qTXlRamxETmpOQk5UYzVRVUV3UlRFeU56TTJRUSJ9.eyJpc3MiOiJodHRwczovL3RvcGNvZGVyLWRldi5hdXRoMC5jb20vIiwic3ViIjoiakdJZjJwZDNmNDRCMWpxdk9haTMwQklLVFphbllCZlVAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbTJtLnRvcGNvZGVyLWRldi5jb20vIiwiaWF0IjoxNjEyNTQzMDk0LCJleHAiOjE2MTI2Mjk0OTQsImF6cCI6ImpHSWYycGQzZjQ0QjFqcXZPYWkzMEJJS1RaYW5ZQmZVIiwic2NvcGUiOiJ1cGRhdGU6dXNlcl9wcm9maWxlcyB3cml0ZTp1c2VyX3Byb2ZpbGVzIGNyZWF0ZTpjb25uZWN0X3Byb2plY3QgYWxsOmNoYWxsZW5nZXMgcmVhZDpjaGFsbGVuZ2VzIHdyaXRlOmNoYWxsZW5nZXMgYWxsOmdyb3VwcyB3cml0ZTpncm91cHMgcmVhZDpncm91cHMgdXBkYXRlOnN1Ym1pc3Npb24gcmVhZDpzdWJtaXNzaW9uIGRlbGV0ZTpzdWJtaXNzaW9uIGNyZWF0ZTpzdWJtaXNzaW9uIGFsbDpzdWJtaXNzaW9uIHJlYWQ6cHJvamVjdCBhbGw6Y29ubmVjdF9wcm9qZWN0IHJlYWQ6YnVzX3RvcGljcyB3cml0ZTpidXNfYXBpIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIHJlYWQ6dXNlcl9wcm9maWxlcyByZWFkOnJvbGVzIHJlYWQ6cHJvamVjdC11c2VyIHJlYWQ6cHJvamVjdC1wZXJtaXNzaW9uIHJlYWQ6cmVzb3VyY2VzIHdyaXRlOnJlc291cmNlcyBkZWxldGU6cmVzb3VyY2VzIHVwZGF0ZTpyZXNvdXJjZXMgYWxsOnJlc291cmNlcyByZWFkOnRlcm1zIGFsbDp0ZXJtcyBhbGw6cHJvamVjdHMgcmVhZDpwcm9qZWN0cyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.jyepSgyW8ZHWWIvmIygggZpNRKQ5lZ4xMEtYG87_92II0RckxB3uuT37N_zbD0k42Fp8ftRrR9wEdaASF_6s384JyhAzJa7v0vy4qtbXyVIGwGutSOoZW3n23LDj9FYsudZH0UD8Omzct1d_LvXlGBlMDIYFOcf6hEI9gem_cCLuqSPVUVubwVSmsgpcUfKGa56d6gQSduFtOhqupsxzb4sTt8lqrRPnvh0-bWSVq3E9oSKvzgkuFHsh6WTWpy1EpsuPpWtktmqaLTwq1pTNWvne0av7gtZ7mF4CpK5vI1_GX7ZVBz2Be1CWn-_-AqcP2TGVpVps9V1fOgu8waL-Cg'
    },
    'payload': '{"phases":[{"phaseId":"a93544bc-c165-4af4-b55e-18f3593b457a","isOpen":true}]}',
    'id': 'Aw5Zhw5dYy5F6sNF5CE3'
  },
  {
    'url': 'https://api.topcoder-dev.com/v5/challenges/43886f12-9d41-44d6-8993-949174f84558',
    'challengeID': '43886f12-9d41-44d6-8993-949174f84558',
    'method': 'patch',
    'scheduleTime': '2020-12-15T15:22:24.000Z',
    'headers': {
      'content-type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5VSkZORGd4UlRVME5EWTBOVVkzTlRkR05qTXlRamxETmpOQk5UYzVRVUV3UlRFeU56TTJRUSJ9.eyJpc3MiOiJodHRwczovL3RvcGNvZGVyLWRldi5hdXRoMC5jb20vIiwic3ViIjoiakdJZjJwZDNmNDRCMWpxdk9haTMwQklLVFphbllCZlVAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbTJtLnRvcGNvZGVyLWRldi5jb20vIiwiaWF0IjoxNjEyNTQzMDk0LCJleHAiOjE2MTI2Mjk0OTQsImF6cCI6ImpHSWYycGQzZjQ0QjFqcXZPYWkzMEJJS1RaYW5ZQmZVIiwic2NvcGUiOiJ1cGRhdGU6dXNlcl9wcm9maWxlcyB3cml0ZTp1c2VyX3Byb2ZpbGVzIGNyZWF0ZTpjb25uZWN0X3Byb2plY3QgYWxsOmNoYWxsZW5nZXMgcmVhZDpjaGFsbGVuZ2VzIHdyaXRlOmNoYWxsZW5nZXMgYWxsOmdyb3VwcyB3cml0ZTpncm91cHMgcmVhZDpncm91cHMgdXBkYXRlOnN1Ym1pc3Npb24gcmVhZDpzdWJtaXNzaW9uIGRlbGV0ZTpzdWJtaXNzaW9uIGNyZWF0ZTpzdWJtaXNzaW9uIGFsbDpzdWJtaXNzaW9uIHJlYWQ6cHJvamVjdCBhbGw6Y29ubmVjdF9wcm9qZWN0IHJlYWQ6YnVzX3RvcGljcyB3cml0ZTpidXNfYXBpIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIHJlYWQ6dXNlcl9wcm9maWxlcyByZWFkOnJvbGVzIHJlYWQ6cHJvamVjdC11c2VyIHJlYWQ6cHJvamVjdC1wZXJtaXNzaW9uIHJlYWQ6cmVzb3VyY2VzIHdyaXRlOnJlc291cmNlcyBkZWxldGU6cmVzb3VyY2VzIHVwZGF0ZTpyZXNvdXJjZXMgYWxsOnJlc291cmNlcyByZWFkOnRlcm1zIGFsbDp0ZXJtcyBhbGw6cHJvamVjdHMgcmVhZDpwcm9qZWN0cyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.jyepSgyW8ZHWWIvmIygggZpNRKQ5lZ4xMEtYG87_92II0RckxB3uuT37N_zbD0k42Fp8ftRrR9wEdaASF_6s384JyhAzJa7v0vy4qtbXyVIGwGutSOoZW3n23LDj9FYsudZH0UD8Omzct1d_LvXlGBlMDIYFOcf6hEI9gem_cCLuqSPVUVubwVSmsgpcUfKGa56d6gQSduFtOhqupsxzb4sTt8lqrRPnvh0-bWSVq3E9oSKvzgkuFHsh6WTWpy1EpsuPpWtktmqaLTwq1pTNWvne0av7gtZ7mF4CpK5vI1_GX7ZVBz2Be1CWn-_-AqcP2TGVpVps9V1fOgu8waL-Cg'
    },
    'payload': '{"phases":[{"phaseId":"a93544bc-c165-4af4-b55e-18f3593b457a","isOpen":false}]}',
    'id': 'Nf1pzFKX5dnK4i0jT0Dn'
  },
  {
    'url': 'https://api.topcoder-dev.com/v5/challenges/43886f12-9d41-44d6-8993-949174f84558',
    'challengeID': '43886f12-9d41-44d6-8993-949174f84558',
    'method': 'patch',
    'scheduleTime': '2020-12-15T15:22:24.000Z',
    'headers': {
      'content-type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5VSkZORGd4UlRVME5EWTBOVVkzTlRkR05qTXlRamxETmpOQk5UYzVRVUV3UlRFeU56TTJRUSJ9.eyJpc3MiOiJodHRwczovL3RvcGNvZGVyLWRldi5hdXRoMC5jb20vIiwic3ViIjoiakdJZjJwZDNmNDRCMWpxdk9haTMwQklLVFphbllCZlVAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbTJtLnRvcGNvZGVyLWRldi5jb20vIiwiaWF0IjoxNjEyNTQzMDk0LCJleHAiOjE2MTI2Mjk0OTQsImF6cCI6ImpHSWYycGQzZjQ0QjFqcXZPYWkzMEJJS1RaYW5ZQmZVIiwic2NvcGUiOiJ1cGRhdGU6dXNlcl9wcm9maWxlcyB3cml0ZTp1c2VyX3Byb2ZpbGVzIGNyZWF0ZTpjb25uZWN0X3Byb2plY3QgYWxsOmNoYWxsZW5nZXMgcmVhZDpjaGFsbGVuZ2VzIHdyaXRlOmNoYWxsZW5nZXMgYWxsOmdyb3VwcyB3cml0ZTpncm91cHMgcmVhZDpncm91cHMgdXBkYXRlOnN1Ym1pc3Npb24gcmVhZDpzdWJtaXNzaW9uIGRlbGV0ZTpzdWJtaXNzaW9uIGNyZWF0ZTpzdWJtaXNzaW9uIGFsbDpzdWJtaXNzaW9uIHJlYWQ6cHJvamVjdCBhbGw6Y29ubmVjdF9wcm9qZWN0IHJlYWQ6YnVzX3RvcGljcyB3cml0ZTpidXNfYXBpIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIHJlYWQ6dXNlcl9wcm9maWxlcyByZWFkOnJvbGVzIHJlYWQ6cHJvamVjdC11c2VyIHJlYWQ6cHJvamVjdC1wZXJtaXNzaW9uIHJlYWQ6cmVzb3VyY2VzIHdyaXRlOnJlc291cmNlcyBkZWxldGU6cmVzb3VyY2VzIHVwZGF0ZTpyZXNvdXJjZXMgYWxsOnJlc291cmNlcyByZWFkOnRlcm1zIGFsbDp0ZXJtcyBhbGw6cHJvamVjdHMgcmVhZDpwcm9qZWN0cyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.jyepSgyW8ZHWWIvmIygggZpNRKQ5lZ4xMEtYG87_92II0RckxB3uuT37N_zbD0k42Fp8ftRrR9wEdaASF_6s384JyhAzJa7v0vy4qtbXyVIGwGutSOoZW3n23LDj9FYsudZH0UD8Omzct1d_LvXlGBlMDIYFOcf6hEI9gem_cCLuqSPVUVubwVSmsgpcUfKGa56d6gQSduFtOhqupsxzb4sTt8lqrRPnvh0-bWSVq3E9oSKvzgkuFHsh6WTWpy1EpsuPpWtktmqaLTwq1pTNWvne0av7gtZ7mF4CpK5vI1_GX7ZVBz2Be1CWn-_-AqcP2TGVpVps9V1fOgu8waL-Cg'
    },
    'payload': '{"phases":[{"phaseId":"aa5a3f78-79e0-4bf7-93ff-b11e8f5b398b","isOpen":true}]}',
    'id': '1xSJOY3pDQ6K0wSkEcYz'
  },
  {
    'url': 'https://api.topcoder-dev.com/v5/challenges/43886f12-9d41-44d6-8993-949174f84558',
    'challengeID': '43886f12-9d41-44d6-8993-949174f84558',
    'method': 'patch',
    'scheduleTime': '2020-12-18T15:22:24.000Z',
    'headers': {
      'content-type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5VSkZORGd4UlRVME5EWTBOVVkzTlRkR05qTXlRamxETmpOQk5UYzVRVUV3UlRFeU56TTJRUSJ9.eyJpc3MiOiJodHRwczovL3RvcGNvZGVyLWRldi5hdXRoMC5jb20vIiwic3ViIjoiakdJZjJwZDNmNDRCMWpxdk9haTMwQklLVFphbllCZlVAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbTJtLnRvcGNvZGVyLWRldi5jb20vIiwiaWF0IjoxNjEyNTQzMDk0LCJleHAiOjE2MTI2Mjk0OTQsImF6cCI6ImpHSWYycGQzZjQ0QjFqcXZPYWkzMEJJS1RaYW5ZQmZVIiwic2NvcGUiOiJ1cGRhdGU6dXNlcl9wcm9maWxlcyB3cml0ZTp1c2VyX3Byb2ZpbGVzIGNyZWF0ZTpjb25uZWN0X3Byb2plY3QgYWxsOmNoYWxsZW5nZXMgcmVhZDpjaGFsbGVuZ2VzIHdyaXRlOmNoYWxsZW5nZXMgYWxsOmdyb3VwcyB3cml0ZTpncm91cHMgcmVhZDpncm91cHMgdXBkYXRlOnN1Ym1pc3Npb24gcmVhZDpzdWJtaXNzaW9uIGRlbGV0ZTpzdWJtaXNzaW9uIGNyZWF0ZTpzdWJtaXNzaW9uIGFsbDpzdWJtaXNzaW9uIHJlYWQ6cHJvamVjdCBhbGw6Y29ubmVjdF9wcm9qZWN0IHJlYWQ6YnVzX3RvcGljcyB3cml0ZTpidXNfYXBpIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIHJlYWQ6dXNlcl9wcm9maWxlcyByZWFkOnJvbGVzIHJlYWQ6cHJvamVjdC11c2VyIHJlYWQ6cHJvamVjdC1wZXJtaXNzaW9uIHJlYWQ6cmVzb3VyY2VzIHdyaXRlOnJlc291cmNlcyBkZWxldGU6cmVzb3VyY2VzIHVwZGF0ZTpyZXNvdXJjZXMgYWxsOnJlc291cmNlcyByZWFkOnRlcm1zIGFsbDp0ZXJtcyBhbGw6cHJvamVjdHMgcmVhZDpwcm9qZWN0cyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.jyepSgyW8ZHWWIvmIygggZpNRKQ5lZ4xMEtYG87_92II0RckxB3uuT37N_zbD0k42Fp8ftRrR9wEdaASF_6s384JyhAzJa7v0vy4qtbXyVIGwGutSOoZW3n23LDj9FYsudZH0UD8Omzct1d_LvXlGBlMDIYFOcf6hEI9gem_cCLuqSPVUVubwVSmsgpcUfKGa56d6gQSduFtOhqupsxzb4sTt8lqrRPnvh0-bWSVq3E9oSKvzgkuFHsh6WTWpy1EpsuPpWtktmqaLTwq1pTNWvne0av7gtZ7mF4CpK5vI1_GX7ZVBz2Be1CWn-_-AqcP2TGVpVps9V1fOgu8waL-Cg'
    },
    'payload': '{"phases":[{"phaseId":"1c24cfb3-5b0a-4dbd-b6bd-4b0dff5349c6","isOpen":false}]}',
    'id': '8j8k6huP9aHS8TsHInaq'
  },
  {
    'url': 'https://api.topcoder-dev.com/v5/challenges/43886f12-9d41-44d6-8993-949174f84558',
    'challengeID': '43886f12-9d41-44d6-8993-949174f84558',
    'method': 'patch',
    'scheduleTime': '2020-12-12T15:22:24.000Z',
    'headers': {
      'content-type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5VSkZORGd4UlRVME5EWTBOVVkzTlRkR05qTXlRamxETmpOQk5UYzVRVUV3UlRFeU56TTJRUSJ9.eyJpc3MiOiJodHRwczovL3RvcGNvZGVyLWRldi5hdXRoMC5jb20vIiwic3ViIjoiakdJZjJwZDNmNDRCMWpxdk9haTMwQklLVFphbllCZlVAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbTJtLnRvcGNvZGVyLWRldi5jb20vIiwiaWF0IjoxNjEyNTQzMDk0LCJleHAiOjE2MTI2Mjk0OTQsImF6cCI6ImpHSWYycGQzZjQ0QjFqcXZPYWkzMEJJS1RaYW5ZQmZVIiwic2NvcGUiOiJ1cGRhdGU6dXNlcl9wcm9maWxlcyB3cml0ZTp1c2VyX3Byb2ZpbGVzIGNyZWF0ZTpjb25uZWN0X3Byb2plY3QgYWxsOmNoYWxsZW5nZXMgcmVhZDpjaGFsbGVuZ2VzIHdyaXRlOmNoYWxsZW5nZXMgYWxsOmdyb3VwcyB3cml0ZTpncm91cHMgcmVhZDpncm91cHMgdXBkYXRlOnN1Ym1pc3Npb24gcmVhZDpzdWJtaXNzaW9uIGRlbGV0ZTpzdWJtaXNzaW9uIGNyZWF0ZTpzdWJtaXNzaW9uIGFsbDpzdWJtaXNzaW9uIHJlYWQ6cHJvamVjdCBhbGw6Y29ubmVjdF9wcm9qZWN0IHJlYWQ6YnVzX3RvcGljcyB3cml0ZTpidXNfYXBpIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIHJlYWQ6dXNlcl9wcm9maWxlcyByZWFkOnJvbGVzIHJlYWQ6cHJvamVjdC11c2VyIHJlYWQ6cHJvamVjdC1wZXJtaXNzaW9uIHJlYWQ6cmVzb3VyY2VzIHdyaXRlOnJlc291cmNlcyBkZWxldGU6cmVzb3VyY2VzIHVwZGF0ZTpyZXNvdXJjZXMgYWxsOnJlc291cmNlcyByZWFkOnRlcm1zIGFsbDp0ZXJtcyBhbGw6cHJvamVjdHMgcmVhZDpwcm9qZWN0cyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.jyepSgyW8ZHWWIvmIygggZpNRKQ5lZ4xMEtYG87_92II0RckxB3uuT37N_zbD0k42Fp8ftRrR9wEdaASF_6s384JyhAzJa7v0vy4qtbXyVIGwGutSOoZW3n23LDj9FYsudZH0UD8Omzct1d_LvXlGBlMDIYFOcf6hEI9gem_cCLuqSPVUVubwVSmsgpcUfKGa56d6gQSduFtOhqupsxzb4sTt8lqrRPnvh0-bWSVq3E9oSKvzgkuFHsh6WTWpy1EpsuPpWtktmqaLTwq1pTNWvne0av7gtZ7mF4CpK5vI1_GX7ZVBz2Be1CWn-_-AqcP2TGVpVps9V1fOgu8waL-Cg'
    },
    'payload': '{"phases":[{"phaseId":"6950164f-3c5e-4bdc-abc8-22aaf5a1bd49","isOpen":true}]}',
    'id': '9PCsrJGB9O1uPPM861wC'
  },
  {
    'url': 'https://api.topcoder-dev.com/v5/challenges/43886f12-9d41-44d6-8993-949174f84558',
    'challengeID': '43886f12-9d41-44d6-8993-949174f84558',
    'method': 'patch',
    'scheduleTime': '2020-12-17T15:22:24.000Z',
    'headers': {
      'content-type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5VSkZORGd4UlRVME5EWTBOVVkzTlRkR05qTXlRamxETmpOQk5UYzVRVUV3UlRFeU56TTJRUSJ9.eyJpc3MiOiJodHRwczovL3RvcGNvZGVyLWRldi5hdXRoMC5jb20vIiwic3ViIjoiakdJZjJwZDNmNDRCMWpxdk9haTMwQklLVFphbllCZlVAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbTJtLnRvcGNvZGVyLWRldi5jb20vIiwiaWF0IjoxNjEyNTQzMDk0LCJleHAiOjE2MTI2Mjk0OTQsImF6cCI6ImpHSWYycGQzZjQ0QjFqcXZPYWkzMEJJS1RaYW5ZQmZVIiwic2NvcGUiOiJ1cGRhdGU6dXNlcl9wcm9maWxlcyB3cml0ZTp1c2VyX3Byb2ZpbGVzIGNyZWF0ZTpjb25uZWN0X3Byb2plY3QgYWxsOmNoYWxsZW5nZXMgcmVhZDpjaGFsbGVuZ2VzIHdyaXRlOmNoYWxsZW5nZXMgYWxsOmdyb3VwcyB3cml0ZTpncm91cHMgcmVhZDpncm91cHMgdXBkYXRlOnN1Ym1pc3Npb24gcmVhZDpzdWJtaXNzaW9uIGRlbGV0ZTpzdWJtaXNzaW9uIGNyZWF0ZTpzdWJtaXNzaW9uIGFsbDpzdWJtaXNzaW9uIHJlYWQ6cHJvamVjdCBhbGw6Y29ubmVjdF9wcm9qZWN0IHJlYWQ6YnVzX3RvcGljcyB3cml0ZTpidXNfYXBpIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIHJlYWQ6dXNlcl9wcm9maWxlcyByZWFkOnJvbGVzIHJlYWQ6cHJvamVjdC11c2VyIHJlYWQ6cHJvamVjdC1wZXJtaXNzaW9uIHJlYWQ6cmVzb3VyY2VzIHdyaXRlOnJlc291cmNlcyBkZWxldGU6cmVzb3VyY2VzIHVwZGF0ZTpyZXNvdXJjZXMgYWxsOnJlc291cmNlcyByZWFkOnRlcm1zIGFsbDp0ZXJtcyBhbGw6cHJvamVjdHMgcmVhZDpwcm9qZWN0cyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.jyepSgyW8ZHWWIvmIygggZpNRKQ5lZ4xMEtYG87_92II0RckxB3uuT37N_zbD0k42Fp8ftRrR9wEdaASF_6s384JyhAzJa7v0vy4qtbXyVIGwGutSOoZW3n23LDj9FYsudZH0UD8Omzct1d_LvXlGBlMDIYFOcf6hEI9gem_cCLuqSPVUVubwVSmsgpcUfKGa56d6gQSduFtOhqupsxzb4sTt8lqrRPnvh0-bWSVq3E9oSKvzgkuFHsh6WTWpy1EpsuPpWtktmqaLTwq1pTNWvne0av7gtZ7mF4CpK5vI1_GX7ZVBz2Be1CWn-_-AqcP2TGVpVps9V1fOgu8waL-Cg'
    },
    'payload': '{"phases":[{"phaseId":"1c24cfb3-5b0a-4dbd-b6bd-4b0dff5349c6","isOpen":true}]}',
    'id': '9pyANNbUctiQ3UMkqpCr'
  },
  {
    'url': 'https://api.topcoder-dev.com/v5/challenges/43886f12-9d41-44d6-8993-949174f84558',
    'challengeID': '43886f12-9d41-44d6-8993-949174f84558',
    'method': 'patch',
    'scheduleTime': '2020-12-15T15:22:24.000Z',
    'headers': {
      'content-type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5VSkZORGd4UlRVME5EWTBOVVkzTlRkR05qTXlRamxETmpOQk5UYzVRVUV3UlRFeU56TTJRUSJ9.eyJpc3MiOiJodHRwczovL3RvcGNvZGVyLWRldi5hdXRoMC5jb20vIiwic3ViIjoiakdJZjJwZDNmNDRCMWpxdk9haTMwQklLVFphbllCZlVAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbTJtLnRvcGNvZGVyLWRldi5jb20vIiwiaWF0IjoxNjEyNTQzMDk0LCJleHAiOjE2MTI2Mjk0OTQsImF6cCI6ImpHSWYycGQzZjQ0QjFqcXZPYWkzMEJJS1RaYW5ZQmZVIiwic2NvcGUiOiJ1cGRhdGU6dXNlcl9wcm9maWxlcyB3cml0ZTp1c2VyX3Byb2ZpbGVzIGNyZWF0ZTpjb25uZWN0X3Byb2plY3QgYWxsOmNoYWxsZW5nZXMgcmVhZDpjaGFsbGVuZ2VzIHdyaXRlOmNoYWxsZW5nZXMgYWxsOmdyb3VwcyB3cml0ZTpncm91cHMgcmVhZDpncm91cHMgdXBkYXRlOnN1Ym1pc3Npb24gcmVhZDpzdWJtaXNzaW9uIGRlbGV0ZTpzdWJtaXNzaW9uIGNyZWF0ZTpzdWJtaXNzaW9uIGFsbDpzdWJtaXNzaW9uIHJlYWQ6cHJvamVjdCBhbGw6Y29ubmVjdF9wcm9qZWN0IHJlYWQ6YnVzX3RvcGljcyB3cml0ZTpidXNfYXBpIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIHJlYWQ6dXNlcl9wcm9maWxlcyByZWFkOnJvbGVzIHJlYWQ6cHJvamVjdC11c2VyIHJlYWQ6cHJvamVjdC1wZXJtaXNzaW9uIHJlYWQ6cmVzb3VyY2VzIHdyaXRlOnJlc291cmNlcyBkZWxldGU6cmVzb3VyY2VzIHVwZGF0ZTpyZXNvdXJjZXMgYWxsOnJlc291cmNlcyByZWFkOnRlcm1zIGFsbDp0ZXJtcyBhbGw6cHJvamVjdHMgcmVhZDpwcm9qZWN0cyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.jyepSgyW8ZHWWIvmIygggZpNRKQ5lZ4xMEtYG87_92II0RckxB3uuT37N_zbD0k42Fp8ftRrR9wEdaASF_6s384JyhAzJa7v0vy4qtbXyVIGwGutSOoZW3n23LDj9FYsudZH0UD8Omzct1d_LvXlGBlMDIYFOcf6hEI9gem_cCLuqSPVUVubwVSmsgpcUfKGa56d6gQSduFtOhqupsxzb4sTt8lqrRPnvh0-bWSVq3E9oSKvzgkuFHsh6WTWpy1EpsuPpWtktmqaLTwq1pTNWvne0av7gtZ7mF4CpK5vI1_GX7ZVBz2Be1CWn-_-AqcP2TGVpVps9V1fOgu8waL-Cg'
    },
    'payload': '{"phases":[{"phaseId":"6950164f-3c5e-4bdc-abc8-22aaf5a1bd49","isOpen":false}]}',
    'id': 'WHK9cgMtBcjnzjw85M0U'
  },
  {
    'url': 'https://api.topcoder-dev.com/v5/challenges/43886f12-9d41-44d6-8993-949174f84558',
    'challengeID': '43886f12-9d41-44d6-8993-949174f84558',
    'method': 'patch',
    'scheduleTime': '2020-12-15T15:22:24.000Z',
    'headers': {
      'content-type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5VSkZORGd4UlRVME5EWTBOVVkzTlRkR05qTXlRamxETmpOQk5UYzVRVUV3UlRFeU56TTJRUSJ9.eyJpc3MiOiJodHRwczovL3RvcGNvZGVyLWRldi5hdXRoMC5jb20vIiwic3ViIjoiakdJZjJwZDNmNDRCMWpxdk9haTMwQklLVFphbllCZlVAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbTJtLnRvcGNvZGVyLWRldi5jb20vIiwiaWF0IjoxNjEyNTQzMDk0LCJleHAiOjE2MTI2Mjk0OTQsImF6cCI6ImpHSWYycGQzZjQ0QjFqcXZPYWkzMEJJS1RaYW5ZQmZVIiwic2NvcGUiOiJ1cGRhdGU6dXNlcl9wcm9maWxlcyB3cml0ZTp1c2VyX3Byb2ZpbGVzIGNyZWF0ZTpjb25uZWN0X3Byb2plY3QgYWxsOmNoYWxsZW5nZXMgcmVhZDpjaGFsbGVuZ2VzIHdyaXRlOmNoYWxsZW5nZXMgYWxsOmdyb3VwcyB3cml0ZTpncm91cHMgcmVhZDpncm91cHMgdXBkYXRlOnN1Ym1pc3Npb24gcmVhZDpzdWJtaXNzaW9uIGRlbGV0ZTpzdWJtaXNzaW9uIGNyZWF0ZTpzdWJtaXNzaW9uIGFsbDpzdWJtaXNzaW9uIHJlYWQ6cHJvamVjdCBhbGw6Y29ubmVjdF9wcm9qZWN0IHJlYWQ6YnVzX3RvcGljcyB3cml0ZTpidXNfYXBpIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIHJlYWQ6dXNlcl9wcm9maWxlcyByZWFkOnJvbGVzIHJlYWQ6cHJvamVjdC11c2VyIHJlYWQ6cHJvamVjdC1wZXJtaXNzaW9uIHJlYWQ6cmVzb3VyY2VzIHdyaXRlOnJlc291cmNlcyBkZWxldGU6cmVzb3VyY2VzIHVwZGF0ZTpyZXNvdXJjZXMgYWxsOnJlc291cmNlcyByZWFkOnRlcm1zIGFsbDp0ZXJtcyBhbGw6cHJvamVjdHMgcmVhZDpwcm9qZWN0cyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.jyepSgyW8ZHWWIvmIygggZpNRKQ5lZ4xMEtYG87_92II0RckxB3uuT37N_zbD0k42Fp8ftRrR9wEdaASF_6s384JyhAzJa7v0vy4qtbXyVIGwGutSOoZW3n23LDj9FYsudZH0UD8Omzct1d_LvXlGBlMDIYFOcf6hEI9gem_cCLuqSPVUVubwVSmsgpcUfKGa56d6gQSduFtOhqupsxzb4sTt8lqrRPnvh0-bWSVq3E9oSKvzgkuFHsh6WTWpy1EpsuPpWtktmqaLTwq1pTNWvne0av7gtZ7mF4CpK5vI1_GX7ZVBz2Be1CWn-_-AqcP2TGVpVps9V1fOgu8waL-Cg'
    },
    'payload': '{"phases":[{"phaseId":"6950164f-3c7e-4bdc-abc8-22aaf5a1bd49","isOpen":false}]}',
    'id': '5648cgMtBcjnzjw85M0U'
  },
  {
    'url': 'https://api.topcoder-dev.com/v5/challenges/43886f12-9d41-44d6-8993-949174f84558',
    'challengeID': '43886f12-9d41-44d6-8993-949174f84558',
    'method': 'patch',
    'scheduleTime': '2020-12-15T15:22:24.000Z',
    'headers': {
      'content-type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5VSkZORGd4UlRVME5EWTBOVVkzTlRkR05qTXlRamxETmpOQk5UYzVRVUV3UlRFeU56TTJRUSJ9.eyJpc3MiOiJodHRwczovL3RvcGNvZGVyLWRldi5hdXRoMC5jb20vIiwic3ViIjoiakdJZjJwZDNmNDRCMWpxdk9haTMwQklLVFphbllCZlVAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbTJtLnRvcGNvZGVyLWRldi5jb20vIiwiaWF0IjoxNjEyNTQzMDk0LCJleHAiOjE2MTI2Mjk0OTQsImF6cCI6ImpHSWYycGQzZjQ0QjFqcXZPYWkzMEJJS1RaYW5ZQmZVIiwic2NvcGUiOiJ1cGRhdGU6dXNlcl9wcm9maWxlcyB3cml0ZTp1c2VyX3Byb2ZpbGVzIGNyZWF0ZTpjb25uZWN0X3Byb2plY3QgYWxsOmNoYWxsZW5nZXMgcmVhZDpjaGFsbGVuZ2VzIHdyaXRlOmNoYWxsZW5nZXMgYWxsOmdyb3VwcyB3cml0ZTpncm91cHMgcmVhZDpncm91cHMgdXBkYXRlOnN1Ym1pc3Npb24gcmVhZDpzdWJtaXNzaW9uIGRlbGV0ZTpzdWJtaXNzaW9uIGNyZWF0ZTpzdWJtaXNzaW9uIGFsbDpzdWJtaXNzaW9uIHJlYWQ6cHJvamVjdCBhbGw6Y29ubmVjdF9wcm9qZWN0IHJlYWQ6YnVzX3RvcGljcyB3cml0ZTpidXNfYXBpIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIHJlYWQ6dXNlcl9wcm9maWxlcyByZWFkOnJvbGVzIHJlYWQ6cHJvamVjdC11c2VyIHJlYWQ6cHJvamVjdC1wZXJtaXNzaW9uIHJlYWQ6cmVzb3VyY2VzIHdyaXRlOnJlc291cmNlcyBkZWxldGU6cmVzb3VyY2VzIHVwZGF0ZTpyZXNvdXJjZXMgYWxsOnJlc291cmNlcyByZWFkOnRlcm1zIGFsbDp0ZXJtcyBhbGw6cHJvamVjdHMgcmVhZDpwcm9qZWN0cyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.jyepSgyW8ZHWWIvmIygggZpNRKQ5lZ4xMEtYG87_92II0RckxB3uuT37N_zbD0k42Fp8ftRrR9wEdaASF_6s384JyhAzJa7v0vy4qtbXyVIGwGutSOoZW3n23LDj9FYsudZH0UD8Omzct1d_LvXlGBlMDIYFOcf6hEI9gem_cCLuqSPVUVubwVSmsgpcUfKGa56d6gQSduFtOhqupsxzb4sTt8lqrRPnvh0-bWSVq3E9oSKvzgkuFHsh6WTWpy1EpsuPpWtktmqaLTwq1pTNWvne0av7gtZ7mF4CpK5vI1_GX7ZVBz2Be1CWn-_-AqcP2TGVpVps9V1fOgu8waL-Cg'
    },
    'payload': '{"phases":[{"phaseId":"6950164f-3c7e-4bdc-abc8-22aaf5a1bd49","isOpen":false}]}',
    'id': '4685cgMtBcjnzjw85M0U'
  }
  ]

}
