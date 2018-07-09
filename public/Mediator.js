console.log('Mediator is up and running ');

// Note, this can be implemented with socket.io or something

// Mediator:
/* About
   -Like the Observer Pattern
   -the idea is to have a mediator which is basically an interface for communicating for what are called colleages
   - an example of this in use would be a chat room
     -Steps:
	   -Start with 2 constructor functions, one for the user and one for the chat room
	   - the chatroom will be the mediator and the User will be the colleage of the chatroom
*/

const User = function (name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function (message, to) {
	// console.log('this: ', this); <---notice the this, we can't use arrow functions here, check link: https://stackoverflow.com/questions/34361379/arrow-function-vs-function-declaration-expressions-are-they-equivalent-exch
	this.chatroom.send(message, this, to);
  },

  recieve: function (message, from) {
	console.log(`${from.name} to ${this.name}: ${message}`);
  }
};


const Chatroom = function () {
  let users = {}; //list of users

  return {
	register: function(user) {
	  users[user.name] = user;
	  user.chatroom = this;
	},
	send: function(message, from, to) {
	  if (to) {
		// Single user message
		to.recieve(message, from);
	  } else {
		// Mass message
		for (let key in users) {
		  if (users[key] !== from) {
			users[key].recieve(message, from);
		  }
		};
	  }
	}
  };
};


const joey = new User('Joey');
const Jen = new User('Jen');
const Sara = new User('Sara');
const Jeff = new User('Jeff');

const chatroom = new Chatroom();

chatroom.register(joey);
chatroom.register(Jen);
chatroom.register(Sara);
chatroom.register(Jeff);
joey.send('Hello', Sara);
Sara.send('Hey bird, hows that thing?');
