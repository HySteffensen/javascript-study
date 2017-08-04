/* jshint ignore:start */

(function() {
  "use strict";

  var assert = require('./assert.js');

  describe("Closure", function() {
    it("demonstrates a closure", function() {

      function greet(whattosay) {
        return function(name) {
          return whattosay + ' ' + name;
        };
      }

      assert.equal(greet('Hi')('John'), 'Hi John');

      var sayHi = greet('Hi');
      // function pops off the stack but leaves value
      assert.equal(sayHi('John'), 'Hi John');

    });

    it("execution context gets popped off and value of 'i' remains", function() {
      function buildFunctions() {
        var arr = [];

        for (var i = 0; i < 3; i++) {
          arr. push(function() {
            return i;
          });
        }
        return arr;
      }
      var fs = buildFunctions();

      assert.equal(fs[0](), 3);
      assert.equal(fs[1](), 3);
      assert.equal(fs[2](), 3);
    });

    it("ES 6 provides 'let' that resets value", function() {
      function buildFunctions() {
        var arr = [];

        for (var i = 0; i < 3; i++) {
          let j = i;
          arr.push(
            function() {
              return j;
            }
          );
        }
        return arr;
      }
      var fs = buildFunctions();

      assert.equal(fs[0](), 0);
      assert.equal(fs[1](), 1);
      assert.equal(fs[2](), 2);
    });

    it("IIFE solves problem without 'let' ", function() {
      function buildFunctions() {
        var arr = [];

        for (var i = 0; i < 3; i++) {
          arr. push(
            (function(j) {
              return function() {
                return j;
              }
            }(i))
          );
        }
        return arr;
      }
      var fs = buildFunctions();

      assert.equal(fs[0](), 0);
      assert.equal(fs[1](), 1);
      assert.equal(fs[2](), 2);
    });
  });

}());