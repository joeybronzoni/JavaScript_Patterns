console.log('Singleton is Running ');

// Singleton
/*
 -is a manafestation of the MODULE/REVEALING PATTERN
 -its an IIFE() and can only return 1 instance as a time
   - so repeated calls to the constructor will only return the same instance
 -like the MODULE PATTERN it maintains a private reference which nothing from the outside can reference
 -Why would you use this:
   - if you only want 1 user object created at a time like a login user and this would prevent you form creating
   2 users at once
 -This PATTERN is frowned upon because it gives you a global point of access rather than embracing capsulation
   - they can be hard to debug but they do have their place and don't just relate to JavaScript

*/


const Singleton = (() => {
  let instance;

  function createInstance() {
	const object = new Object({name : 'joey'});
	return object;
  }

  return {
	getInstance: function() {
	  if (!instance) {
		instance = createInstance();
	  }

	  return instance;
	}
  };

})();

const instanceA = Singleton.getInstance();
// this will return a primitive String
console.log(instanceA);

// What happens if I try to instanctiate another object
const instanceB = Singleton.getInstance();
// its true telling us we can never have more than one instance
console.log(instanceA === instanceB);
