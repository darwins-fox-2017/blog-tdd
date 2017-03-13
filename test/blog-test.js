var chai = require('chai')
var chaiHttp = require('chai-http')

var should = chai.should()

chai.use(chaiHttp)


describe('Server is running test', () => {
  it('Should be return "pong" when try to access /ping', (done) => {
    chai.request('http://localhost:3000').get('/').end((err, res) => {
      res.should.be.json();
      done()
    });
  })
})
