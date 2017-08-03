(function() {
  "use strict";

  var assert = require('./assert.js');

  describe("IIFE", function() {
    it("primitive with immediately invoked function", function() {

      var greeting = function(name) {
        return 'Hello ' + name;
      }('John');

      assert.equal(greeting, 'Hello John');
    });

    it("immediately invoked function expression", function() {
      var firstname = 'John';

      (function(name) {
        var greeting = 'Inside IIFE: Hello';
        assert.equal(greeting + " " + name, 'Inside IIFE: Hello John');
      }(firstname));
    });
  });

}());