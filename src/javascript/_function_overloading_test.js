(function() {
  "use strict";

  var assert = require('./assert.js');

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
}());