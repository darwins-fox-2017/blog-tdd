var chai = require('chai')
var chaiHttp = require('chai-http')

var should = chai.should()

chai.use(chaiHttp)


describe('Server is running test', () => {
    it('Should be return "pong" when try to access /ping', (done) => {
        chai.request('http://localhost:3000').get('/ping').end((err, res) => {
            if (err) {
                console.log(err);
                done()
            } else {
                // res.body.should.be.json;
                res.body.msg.should.equal('pong');
                done()
            }
        });
    })
})

describe('CRUD Post test', () => {
  describe('Read all data', () => {
    it('Should be return array of post when try to access "/api.posts/"', (done) => {
      chai.request('http://localhost:3000').get('/api/posts').end((err, res) => {
        if (err) {
          console.log(err);
          done()
        } else {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          res.body[0].should.have.property('title');
          res.body[0].should.have.property('body');
          res.body[0].should.have.property('slug');
          done()
        }
      });
    })
  })
  describe('Create a post', () => {
    it('Should be return success message when try to create post "/"', (done) => {
      chai.request('http://localhost:3000')
        .post('/api/posts')
        .send({
          title: 'Test from Chai',
          body: 'Ini body test bukan bodyParser',
          published: true
        })
        .end((err, res) => {
          if (err) {
            done()
          } else {
            res.should.have.status(200);
            res.should.be.json;
            res.body.status.should.equal(true)
            done()
          }
      });
    })
  })
})
