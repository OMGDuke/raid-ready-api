var expect = require("chai").expect;
var request = require ("request");

describe("Raid Ready API", function() {
  describe("Access BNet Api", function() {

    var url = "http://localhost:3000/bnet?server=Draenor&guild=Over%20Raided";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns JSON", function(done) {
      request(url, function(error, response, body) {
        expect(body.name).to.not.equal("Over Raided");
        done();
      });
    });
  });
});
