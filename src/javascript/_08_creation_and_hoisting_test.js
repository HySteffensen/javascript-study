(function () {
    "use strict";

    var assert = require("./assert.js");

    describe("Creation and Hoisting", function () {
        it('is undefined', function() {
          // sets memory but undefined
          var a;
          assert.strictEqual(a, undefined);
        })

        it('is not defined', function() {
          // a not set in memory
          function undefinedValue () {
            try {
              a
            } catch (e) {
              if (e instanceof ReferenceError) {
                return "not defined";
              }
            }
          }
          assert.strictEqual(undefinedValue(), "not defined");
        });

        it("variables and functions defined first", function () {
          var a = "Hello World!";

          function b() {
            return 'Called b!';
          }

          assert.strictEqual(b(), "Called b!");
          assert.strictEqual(a, "Hello World!");
        });

        it("defined last", function () {
          assert.equal(b(), "Called b!");
          // during creation phase, memory allocated
          // for variables and function
          // variables set to 'undefined'
          // functions saved in their entirety

          assert.strictEqual(a, undefined);

          var a = "Hello World!";

          function b() {
            return 'Called b!';
          }
        });
    });

}());
