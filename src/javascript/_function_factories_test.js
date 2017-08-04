(function() {
  "use strict";

  var assert = require('./assert.js');

  describe("Function Factories", function() {
    it("", function() {
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

      greetEnglish('John', 'Doe');
      greetSpanish('John', 'Doe');
    });
  });

}());