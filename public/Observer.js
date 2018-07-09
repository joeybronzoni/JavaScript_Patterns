console.log('Observer Running ');

// Observer Pattern:
/* About
   -Allows us to subscribe or unsubscribe to certain events or certain functionality
   -can be used to notify the DOM of certain elements to be updated
   -AngularJS heavily relies on this Pattern through Event management within the scope
   -First Example with prototypes and the second with ES6 classes
   -
*/


// Steps:

//1) Create constructor function:
function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function (fn) { //<----We can't use arrow functions here, check link: https://stackoverflow.com/questions/34361379/arrow-function-vs-function-declaration-expressions-are-they-equivalent-exch
	this.observers.push(fn);
	console.log(`You are now subscribed to ${fn.name}`);
  },

  unsubscribe: function (fn) {
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
  },

  fire: function () {
	this.observers.forEach((item) => {
	  item.call();// <---this call() is native to JS- reminder
	});
  }
};


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
