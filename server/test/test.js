var chai = require('chai');
var should = chai.should();
var Nightmare = require('nightmare');

describe('Add new post', function () {
    it('should show title = testing nightmare', function (done) {
        var nightmare = Nightmare({
            show: true
        });
        this.timeout(900000);
        nightmare
            .goto('http://127.0.0.1:8080/index.html')
            .wait(1000)
            .click('#add')
            .type('#title', 'testing nightmare')
            .type('#artikel', 'kucing disuruh beli sabun')
            .click('#save')
            .wait(1000)
            .evaluate(function () {
                return document.querySelector('.testing-nightmare .isiTitle')
                    .innerHTML
            })
            .end()
            .then(function (result) {
                result.should.be.equal(' testing nightmare ')
                done()
            })
            .catch(function (error) {
                console.error('Search failed:', error);
            });
    });
});


describe('Update post', function () {
    it('should update post with title = testing nightmare', function (done) {
        var nightmare = Nightmare({
            show: true
        });
        this.timeout(900000);
        nightmare
            .goto('http://127.0.0.1:8080/index.html')
            .wait(1000)
            .click('#update-testing-nightmare')
            .type('#title', 'testing nightmare')
            .type('#artikel', 'kucing disuruh beli sabun di planet namec dengan mengendarai roket antariksa buatan ZEON corporation')
            .click('#update')
            .wait(1000)
            .evaluate(function () {
                return document.querySelector('.testing-nightmare .isiArtikel')
                    .innerHTML
            })
            .end()
            .then(function (result) {
                result.should.be.equal(' kucing disuruh beli sabun di planet namec dengan mengendarai roket antariksa buatan ZEON corporation ')
                done()
            })
            .catch(function (error) {
                console.error('Search failed:', error);
            });
    });
});

describe('Delete one post', function () {
    it('should delete post with title = testing nightmare', function (done) {
        var nightmare = Nightmare({
            show: true
        });
        this.timeout(900000);
        nightmare
            .goto('http://127.0.0.1:8080/index.html')
            .wait(1000)
            .click('#delete-testing-nightmare')
            .wait(1000)
            .evaluate(function () {
                return document.querySelector('.testing-nightmare')
                    .innerHTML
            })
            .end()
            .then(function (result) {
                // result.should.not.equal(' testing nightmare ')
                done()
            })
            .catch(function (error) {
                console.error('Search failed:', error);
            });
    });
});
