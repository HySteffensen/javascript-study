(function() {
  "use strict";

  var assert = require("./assert");

  describe("Default Values", function() {
    function greet(name) {
      name = name || '<Your name here>';
      return 'Hello ' + name;
    }

    it("passes variable", function() {
      assert.equal(greet('Hyrum'), 'Hello Hyrum');
    });

    it("passes no variable and returns default value", function() {
      assert.equal(greet(), 'Hello <Your name here>');
    });
    describe("framework example", function() {
      it("overwrites 'libraryName", function() {
        var libraryName = "Lib 1";
        var libraryName = "Lib 2";
        assert.equal(libraryName, "Lib 2");
      });
      it("keeps original value, if it exists", function() {
        var libraryName = "Lib 1";
        var libraryName = libraryName || "Lib 2";
        assert.equal(libraryName, "Lib 1");
      });


    });
  });

}());