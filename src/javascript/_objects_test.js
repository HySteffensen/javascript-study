(function() {
  "use strict";

  var assert = require('./assert.js');

  describe("Object Creation", function() {
    it("creates an object using Object()", function() {
      var person = new Object;

      person["firstname"] = "Hyrum";
      person["lastname"] = "Steffensen";

      var firstNameProperty = "firstname";

      person.address = new Object();
      person.address.street = "111 Main St.";
      person.address.city = "New York";
      person.address.state = "NY";

      assert.deepEqual(person, {firstname: 'Hyrum', lastname: 'Steffensen', address: {street: '111 Main St.', city: 'New York', state: 'NY'}});
      assert.equal(person.firstname, "Hyrum");
      assert.equal(person[firstNameProperty], "Hyrum");
      // dot operator preferred unless dynamic string needed
      assert.equal(person.address.street, "111 Main St.");
      assert.equal(person["address"]["state"], "NY");

    });

    it("creates object using an object literal", function() {
      var person = {
        firstname: "Hyrum",
        lastname: "Steffensen",
        address: {
          street: "111 Main St.",
          state: "NY"
        }
      };
      assert.deepEqual(
        person,
        {
          firstname: "Hyrum",
          lastname: "Steffensen",
          address: {
          street: "111 Main St.",
          state: "NY"
        }});

      function greet(person) {
        return "Hi " + person.firstname;
      }

      assert.equal(greet(person), "Hi Hyrum");
      assert.equal(greet({ firstname: 'James', lastname: 'Smith' }), "Hi James");
    });
  });

}());