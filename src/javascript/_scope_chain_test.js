(function() {
  "use strict"

  var assert = require('./assert.js');

  describe("Variable Environment and Scope Chain", function() {
    it("each variable is defined within its own execution context", function() {
      function b() {
        var myVar;
        assert.equal(myVar, undefined);
      }

      function a() {
        var myVar = 2;
        b();
        assert.equal(myVar, 2);
      }

      var myVar = 1;
      a();
      assert.equal(myVar, 1);
    });

    it("function b() has a global lexical context", function() {
      function b() {
        assert.equal(myVar, 1);
      }

      function a() {
        var myVar = 2;
        b();
      }

      var myVar = 1;
      a();
    });

     it("function b() has a lexical context/environment within a()", function() {

          function a() {
            function b() {
              assert.equal(myVar, 2);
            }

            var myVar = 2;
            b();
          }

          var myVar = 1;
          a();
        });

  });
}());
