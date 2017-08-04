(function() {
  "use strict";

  var assert = require('./assert.js');

  describe("Function Factories", function() {
    it("factory creates and returns greeting", function() {
      function makeGreeting(language) {
        return function(firstname, lastname) {
          if (language === 'en') {
            return 'Hello ' + firstname + ' ' + lastname;
          }

          if (language === 'es') {
            return 'Hola ' + firstname + ' ' + lastname;
          }
        };
      }

      var greetEnglish = makeGreeting('en');
      var greetSpanish = makeGreeting('es');

      assert.equal(greetEnglish('John', 'Doe'), "Hello John Doe");
      assert.equal(greetSpanish('John', 'Doe'), "Hola John Doe");
    });
  });

}());