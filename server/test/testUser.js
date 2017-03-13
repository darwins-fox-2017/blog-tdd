var chai = require('chai')
var should = chai.should()
var chaiHttp = require('chai-http')
chai.use(chaiHttp)

describe('Testing user route', function () {
  it('testing create new user', function (done) {
    chai.request('http://localhost:3000')
      .post('/login')
      .send({
        username: 'didietsuryadi',
        password: 'diditsuryadi'
      })
      .end(function (err,res) {
        res.should.be.json;
        res.should.have.status(200);
        res.body.username.should.equal('diditsuryadi');
        done()
      })
  })

})
