(function() {
  "use strict";

  var assert = require('./assert.js');

  describe("Overloading", function() {
    it("an example of 'overloading' in JavaScript", function() {
      function greet(firstname, lastname, language) {
        language = language || 'en';

        if (language === 'en') {
          return 'Hello ' + firstname + ' ' + lastname;
        }

        if (language === 'es') {
          return 'Hola ' + firstname + ' ' + lastname;
        }
      }

      function greetEnglish(firstname, lastname) {
        return greet(firstname, lastname, 'en');
      }

      function greetSpanish(firstname, lastname) {
        return greet(firstname, lastname, 'es');
      }
      
      assert.equal(greetEnglish('John', 'Doe'), "Hello John Doe");
      assert.equal(greetSpanish('John', 'Doe'), "Hola John Doe");
    });
  });


}());