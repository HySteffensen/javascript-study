(function() {
  "use strict";

  var assert = require('./assert.js');

  describe("Arguments", function() {
    it("returns message if arguments are missing", function() {
      function greet(firstname, lastname, language) {
        if (arguments. length === 0) {
          return "Missing parameters!";
        }
      }
      assert.equal(greet(), "Missing parameters!");
    });
  });


}());