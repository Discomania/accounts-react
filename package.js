Package.describe({
  name: 'meteoreact:accounts',
  summary: 'Simple and intuative accounts view layer with react',
  version: '1.2.5',
  documentation: 'README.md',
  git: 'https://github.com/royGil/accounts-react'
})

Package.onUse(api => {
  api.versionsFrom('2.9.0')

  api.use([
    'ecmascript',
    'accounts-base',
    'accounts-password',
    'mdg:validated-method',
    'check'
  ], ['client', 'server'])

  api.use('react-meteor-data', 'client')

  api.use('service-configuration', { weak: true })
  api.use('http', 'server')

  api.mainModule('index.js', ['client', 'server'])
})

Package.onTest(api => {
  api.use([
    'ecmascript',
    'accounts-base',
    'accounts-password',
    'meteoreact:accounts',
    'meteoreact:accounts-unstyled',
    'mdg:validated-method',
    'react-meteor-data',
    'cultofcoders:mocha'
  ])

  api.use('http', 'server')

  api.mainModule('__tests__/client.test.js', 'client')
  api.mainModule('__tests__/server.test.js', 'server')
})
