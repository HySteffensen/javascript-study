/* jshint ignore:start */

(function() {
  "use strict";

  var assert = require('./assert.js');

  describe("Automatic Semicolon Insertion", function() {
    it("automatically inserts semicolon in an undesired way", function() {
      function getPerson() {
        return
        {
          firstname: 'Hyrum'
        }
      }
      assert.equal(getPerson(), undefined);
    });
    it("including a semicolon saves the day!", function() {
      function getPerson() {
        return {
          firstname: 'Hyrum'
        };
      }
      assert.equal(getPerson().firstname, 'Hyrum');
    });
  });

}());