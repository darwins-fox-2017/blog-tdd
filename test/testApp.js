const chai = require('../server/node_modules/chai');
const chaiHttp = require('../server/node_modules/chai-http');
const should = chai.should()
const Article = require('../server/models/article');

chai.use(chaiHttp)

describe('post new article', function () {
  it('should save article when calling http://localhost300/api/articles with POST method',function (done) {
    chai.request('http://localhost:3000/api')
    .post('/articles')
    .send({
      title : 'Hello World!',
      content : 'Hello world! Lorem Ipsum Dolor Sit Amet',
      catagory : 'education',
      slug : 'hello-world'
    })
    .end(function (err,res) {
      res.should.have.status(200)
      res.should.be.a('object');
      res.body.msg.should.equal('successfully added');
      res.body.data.title.should.equal('Hello World!')
      res.body.data.content.should.equal('Hello world! Lorem Ipsum Dolor Sit Amet');
      res.body.data.catagory.should.equal('education')
      res.body.data.slug.should.equal('hello-world')
      done()
    })
  })
})

describe('get all articles',function () {
  it('should get all articles when calling http://localhost300/api/articles with GET method', function (done) {
    chai.request('http://localhost:3000/api')
    .get('/articles')
    .end(function (err,res) {
      res.should.have.status(200);
      res.should.be.json;
      done()
    })
  })
})


describe('get one article by slug',function () {
  it('should get an article with slug hello-world when calling http://localhost300/api/articles/hello-world with GET method', function (done) {
    chai.request('http://localhost:3000/api')
    .get('/articles/hello-world')
    .end(function (err,res) {
      res.should.have.status(200);
      res.should.be.json;
      done()
    })
  })
})

describe('update article', function () {
  it('should update data and send msg if succeed', function (done) {
    chai.request('http://localhost:3000/api')
    .put('/articles/hello-world')
    .end(function (err,res) {
      res.should.have.status(200);
      res.body.msg.should.equal('data has been successfully updated')
      done()
    })
  })
})


describe('delete an article by slug', function () {
  it('should delete an article based on a slug word when calling http://localhost300/api/articles/:slug with DELETE method', function (done) {
    chai.request('http://localhost:3000/api')
    .delete('/articles/hello-world')
    .end(function (err,res) {
      res.should.have.status(200);
      res.body.msg.should.equal('data has been successfully removed from database')
      done()
    })
  })
})
