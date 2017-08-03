/* jshint ignore:start */

(function() {

  var assert = require('./assert.js');

  describe("this keyword", function() {
    it("this is global in scope", function() {

      function a() {
        this.newVariable = "hello";
      }

      a();
      assert.equal(window.newVariable, "hello");
    });

    it("this is relative in scope to the method", function() {
      var c = {
        name: 'The c object',
        log: function() {
          this.name = 'Updated c object';

           var setname = function(newname) {
            this.name = newname;
           };
           setname('Updated again! The c object');
        }
      };
      c.log();
      assert.equal(c.name, 'Updated c object');
      // This is considered by some a bug in JavaScript. 'name'
      // doesn't have an execution context, so it attaches the
      // value to the global object
      assert.equal(window.name, 'Updated again! The c object');
    });

    it("uses 'self' to maintain proper context", function() {
      var c = {
        name: 'The c object',
        log: function() {
          var self = this;

          self.name = 'Updated c object';

           var setname = function(newname) {
            self.name = newname;
           };
           setname('Updated again! The c object');
        }
      };
      c.log();
      assert.equal(c.name, 'Updated again! The c object');
    });

  });
}());
