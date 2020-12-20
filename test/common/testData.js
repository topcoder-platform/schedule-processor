module.exports = {
  testTopics: [
    {
      topic: 'challenge.notification.create',
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
    phases: [
      {
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
  }
}
