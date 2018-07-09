console.log('ObserverES6 is up and running ');

// Observer Pattern Using ES6:
/* About
   - Refer to Observer.js
   -How to change the ES5 version into ES6
     -change the main functions to classes
	 -create a constructor in the class

*/


// Steps:

//1) Create constructor function:
class EventObserver {
  constructor () {
	this.observers = [];
  }

  subscribe (fn) {
	this.observers.push(fn);
	console.log(`You are now subscribed to ${fn.name}`);
  }

  unsubscribe (fn) {
	/* Filter out from the list whatever matches the callback function. If
	   If there is no match, the callback gets to stay on the list. The filter
	   returns a new list and reassigns the list of observers
	*/
	this.observers = this.observers.filter((item) => {
	  if (item !== fn) {
		return item;
	  }
	});
	console.log(`You are now unsubscribed from ${fn.name}`);
  }

  fire () {
	this.observers.forEach((item) => {
	  item.call();// <---this call() is native to JS- reminder
	});
  }
}

const click = new EventObserver();

// Event Listeners:


//----------------------------Get Current MilliSeconds----------------------//
document.querySelector('.sub-ms').addEventListener('click', () => {
  click.subscribe(getCurrentMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', () => {
  click.unsubscribe(getCurrentMilliseconds);
});

document.querySelector('.fire').addEventListener('click', () => {
  click.fire();
});


//----------------------------Get Current Seconds----------------------------//
// Event Listeners:
document.querySelector('.sub-s').addEventListener('click', () => {
  click.subscribe(getCurrentSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', () => {
  click.unsubscribe(getCurrentSeconds);
});




// Click Handler
const getCurrentMilliseconds = () => {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

// Click Handler
const getCurrentSeconds = () => {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};





/* we won't need to use the FunctionName.prototype = method to add the methods to the constructor,
   this is done just by adding them to the constructor in the class */
