(function() {
  "use strict";

  var assert = require('./assert.js');

  describe("Closures", function(done) {
    it.skip("sets timeout for 3 seconds", function() {
      function sayHiLater() {
        var greeting = 'Hi!';

        setTimeout(done, 3000);
      }

      sayHiLater();
    });

    it("tell me when done", function(done) {
      function tellMeWhenDone(callback) {
        var a = 1000;
        var b = 2000;

        callback();
      }

      tellMeWhenDone(function() {
        done();
      });

      tellMeWhenDone(function() {
        done();
      });


    });
  });
}());
