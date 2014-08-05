var app = require('../../app.js')
var request = require('supertest');


describe("Creating friends", function(){

  it ("should redirect after post", function(done){
    request(app)
      .post('/friends')
      .send({friend: {name: "john"}})
      .expect(302)
      .end(done)
  })
})
