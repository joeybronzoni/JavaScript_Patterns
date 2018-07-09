console.log('Module&RevealingModule is running ');


// Basic structure

// (() => {
//   //Declare private(not available outside the module) vars and functions

//   return {
// 	// Declare public variables and functions
//   };
// })();

// STANDARD MODULE PATTERN
const UICtrl =  (() => {
  // Private
  let text = 'Hello World';

  const changeText = () => {
	const element = document.querySelector('h1');
	element.textContent = text;
  };

  return {
	callChangeText: function() {
	  changeText();
	  console.log(text);
	}
  };
})();

UICtrl.callChangeText();

// Note that we can't access the private vars and functions from outside the UICtrl
// UICtrl.changeText();
// console.log(UICtrl.text);

// REVEALING MODULE PATTERN
// the diff is the way we return our public functions
  const ItemCtrl = (() => {
	// this is our state
	let _data = []; //<---the underscore represents a private item

	function add(item) {
	  _data.push(item);
	  console.log('Item Added....');
	}

	function get(id) {
	  return _data.find((item) => {
		return item.id === id;
	  });
	}

	// return an object literal revealing the private methods
	return {
	  add: add,
	  get: get
	};
  })();

ItemCtrl.add({ id: 1, name: 'Jon'});
// Note that we can access the private vars because of our return, if we comment out get or add then they become private again
console.log(ItemCtrl.get(1));


// NOTE ON DIFF BETWEEN BASIC MODULE AND REVEALING PATTERNS:
/*
REVEALING is cleaner but the but the Basic Pattern allows you to do more
*/
