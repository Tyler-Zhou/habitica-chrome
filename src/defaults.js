var defaultOptions = {
      uid:'',
      watchedUrl: '',
      sendInterval: '5',
      activatorName: 'alwayon',
      siteWatcherIsActive: 'true',
      viceDomains: 'reddit.com\n9gag.com\nfacebook.com',
      goodDomains: 'lifehacker.com\ncodeacadamy.com\nkhanacadamy.org',
      days: {
          'Monday': { 
              active: true,
              start: [8,0], end: [16,30]
            },
          'Tuesday': { 
              active: true,
              start: [8,0], end: [16,30]
            },
          'Wednesday': { 
              active: true,
              start: [8,0], end: [16,30]
            },
          'Thursday': { 
              active: true,
              start: [8,0], end: [16,30]
            },
          'Friday': { 
              active: true,
              start: [8,0], end: [16,30]
            },
          'Saturday': { 
              active: false,
              start: [8,0], end: [16,30]
            },
          'Sunday': { 
              active: false,
              start: [8,0], end: [16,30]
            }
        }
    };