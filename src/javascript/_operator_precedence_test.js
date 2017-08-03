(function() {
  "use strict";

  var assert = require('./assert.js');

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

  describe("Operator Precedence", function() {
    it("Assignment--same precedence, then associativity", function() {
      //assignment right-to-left
      var a = 2, b = 3, c = 4;
      a = b = c;
      assert.equal(a, 4);
    });

    it("Comparison Operators", function() {
      assert.equal((3 < 2), false);
      assert.equal((3 < 2), 0);
      assert.equal((0 < 2), true);
      assert.equal((3 < 2 < 1), true);
    });

    describe("Coercion", function() {
      it("coerces types", function() {
        assert.equal("3", 3);
        assert.equal(false, 0);
      });

      it("false equals 0 when coerced", function() {
        var a = false;
        assert.equal(a, 0);
        assert.equal(false, 0);
        assert.notEqual(null, 0);
        assert.equal(null < 1, true);
      });

      it("deep equal false when coerced", function() {
        assert.notDeepEqual("3", 3);
        assert.equal(0, false);
        assert.notDeepEqual(0, false);
      });
    });

    describe("Boolean", function() {
      it("coerces boolean", function() {
        assert.equal(Boolean(undefined), false);
        assert.equal(Boolean(null), false);
        assert.equal(Boolean(""), false);
      });

      it("if statement coerces to boolean", function() {
        var a;
        assert.equal(boolCheck(a), false);
        var b = null;
        assert.equal(boolCheck(b), false);
        var c = "";
        assert.equal(boolCheck(c), false);

        function boolCheck(variable) {
          if (!variable) return false;
        }
      });

      it("if statement coercion OR", function() {
        var a = 0;

        assert.equal(a || a === 0, true);
        // '===' has a higher precedence than '||'
        assert.equal(a === 0, true);
        // a coerced to 0 is false, false || true equals true
        assert.equal(a || true, true);

        /* jshint ignore: start */
        assert.equal(a == false, true);
        /* jshint ignore: end */
      });

    });
  });
}());