var request = require('supertest');
var app = require('../app.js');
describe('GET /', function() {
 it('respond with hello world', function(done) {
  //navigate to root and check the response is "hello world"
  request(app).get('/').expect('hello world', done);
 });
});


describe('GET /hitung/', function() {
    it('respond with why', function(done) {
     request(app).get('/hitung/').expect('why', done);
    });
});