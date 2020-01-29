const app = require('../app')
const supertest = require('supertest')
const request = supertest(app)

it('Test Get method endpoint', async (done) => {
  const response = await request.get('/')

  expect(response.status).toBe(200)
  expect(response.body.res).toBe('Hello World :V!')
  done()
})
