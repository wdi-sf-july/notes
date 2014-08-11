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

  it ("should render user name on page", function(done){
    request(app)
      .get('/friends/1')
      .expect(function(res){
    
        if(res.text === ""){
          throw new Error("NO RESPONSE TEXT")
        }
        if(res.text.indexOf('john') === -1){
          throw new Error("Missing User Name!")
        }
      })
      .end(done)
  })
})
