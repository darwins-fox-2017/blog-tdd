const chai      = require('chai')
const should    = chai.should()
const chaiHttp  = require('chai-http')

chai.use(chaiHttp);

describe('Posting new article', () => {
      it('should store a new article to the database and return data', (done) => {
            chai.request('http://localhost:3000/users')
            .post('/api/article')
            .send({
                  title: 'Hello World!',
                  content: 'Lorem ipsum dolor sit amet',
                  category: 'Learning'
            })
            .end((err,res) => {
                  res.should.be.json;
                  res.should.have.status(200);
                  res.body.title.should.equal('Hello World!');
                  res.body.content.should.equal('Lorem ipsum dolor sit amet');
                  res.body.category.should.equal('Learning');
                  res.body.slug.should.equal('hello-world');
                  done();
            })
      })
})

describe('Getting list articles', () => {
      it('should show list articles', (done) => {
            chai.request('http://localhost:3000/users')
            .get('/api/article')
            .end((err,res) => {
                  res.should.be.json;
                  res.should.have.status(200);
                  done();
            })
      })
})
