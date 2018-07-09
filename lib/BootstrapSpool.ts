import { Spool } from '@fabrix/fabrix/dist/common'
import { isFunction } from 'lodash'
import * as config from './config/index'
import * as pkg from '../package.json'

export class BootstrapSpool extends Spool {
  constructor(app) {
    super(app, {
      config: config,
      pkg: pkg,
      api: {}
    })
  }
  /**
   * Check there a config.bootstrap file that export a function
   */
  async validate () {
    if (!this.app.config.get('bootstrap')) {
      return Promise.reject(new Error('There is not config.bootstrap!'))
    }

    if (!isFunction(this.app.config.get('bootstrap'))) {
      return Promise.reject(new Error('config.bootstrap is not a function!'))
    }

    return Promise.resolve()
  }

  /**
   * Listen fabrix:ready event and call bootstrap function
   */
  async initialize () {
    this.app.on('fabrix:ready', () => {
      this.app.config.get('bootstrap')(this.app)
    })
    return Promise.resolve()
  }
}

