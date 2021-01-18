const chai = require('chai')
const request = require('supertest')
const app = require('../app')

chai.should()

const url = '/iecho'

describe('GET /iecho', function () {
  it('responds with json {text:tset}', function (done) {
    request(app)
      .get(url + '?text=test')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, response) => {
        if (err) return done(err)
        response.body.should.have.property('text').eq('tset')
        return done()
      })
  })
})

describe('GET /iecho palindrome', function () {
  it('responds with palindrome:true', function (done) {
    request(app)
      .get(url + '?text=ama')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        const palindrome = res.body.palindrome
        if (!palindrome) return done('expects palindrome to be true')
        return done()
      })
  })
})

describe('GET /iecho no text', function () {
  it('responds with 400', function (done) {
    request(app).get(url).expect(400, done)
  })
})
