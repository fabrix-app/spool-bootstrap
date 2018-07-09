'use strict'
const _ = require('lodash')
const smokesignals = require('smokesignals')

const App = {
  pkg: {
    name: 'bootstrap-spool-test',
    version: '1.0.0'
  },
  api: {},
  config: {
    main: {
      spools: [
        require('../dist').BootstrapSpool // spool-bootstrap
      ]
    },
    bootstrap: (app) => {
      app.bootstrapOk = true
    }
  }
}

_.defaultsDeep(App, smokesignals.FailsafeConfig)
module.exports = App
