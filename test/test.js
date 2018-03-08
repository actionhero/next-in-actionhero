'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const cheerio = require('cheerio')
const request = require('request-promise-native')
const expect = chai.expect
chai.use(dirtyChai)

const ActionHero = require('actionhero')
const actionhero = new ActionHero.Process()
let api

describe('ActionHero + Next Tests', () => {
  before(async function () {
    this.timeout(10 * 1000) // booting the server with next is slow
    api = await actionhero.start()
  })

  after(async () => { await actionhero.stop() })

  it('should have booted into the test env', () => {
    expect(process.env.NODE_ENV).to.equal('test')
    expect(api.env).to.equal('test')
    expect(api.id).to.be.ok()
  })

  it('can retrieve server uptime via the status action', async () => {
    let {uptime} = await api.specHelper.runAction('status')
    expect(uptime).to.be.above(0)
  })

  it('can retrieve servers time from the time action', async () => {
    let {time} = await api.specHelper.runAction('time')
    expect(time).to.be.above(0)
  })

  describe('html rendering', () => {
    let url = ''
    before(() => { url = `http://localhost:${api.config.servers.web.port}` })

    it('can render a react page', async () => {
      const page = await request.get(url)
      const $ = cheerio.load(page)
      expect($('h1').text()).to.equal('ActionHero')
    })
  })
})
