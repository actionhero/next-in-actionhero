'use strict'
const { Action } = require('actionhero')

module.exports = class Time extends Action {
  constructor () {
    super()
    this.name = 'time'
    this.description = 'I return the time from the server'
  }

  async run ({ response }) {
    response.time = (new Date()).getTime()
  }
}
