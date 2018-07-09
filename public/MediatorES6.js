console.log('MediatorES6 is up and running ');

// Note, this can be implemented with socket.io or something

// MediatorES6 -v:
/* About
   -Like the Observer Pattern
   -the idea is to have a mediator which is basically an interface for communicating for what are called colleages
   - an example of this in use would be a chat room
     -Steps:
	   -Start with 2 constructor functions, one for the user and one for the chat room
	   - the chatroom will be the mediator and the User will be the colleage of the chatroom
*/

class User {
  constructor (name) {
    this.name = name;
    this.chatroom = null;
  }

  send (message,to) {
    this.chatroom.send(message,this,to);
  }

  receive (message,from) {
    console.log(`${from.name} to ${this.name}:${message}`);
  }

}

class Chatroom {
  constructor () {
	let users ={};// list of users

	return {
	  register (user) {
		users[user.name]=user;
		user.chatroom = this;
	  },
	  send (message, from, to) {
		if(to) {
		  // Single user message
		  to.receive(message, from);
		} else {
		  // Mass message
		  for(let key in users) {
			if(users[key] !== from) {
			  users[key].receive(message,from);
			}
		  }
		}
	  }
	};

  }
}

const joey = new User('Joey');
const Jen = new User('Jen');
const Sara = new User('Sara');
const Jeff = new User('Jeff');

const chatroom = new Chatroom();

chatroom.register(joey);
chatroom.register(Jen);
chatroom.register(Sara);
chatroom.register(Jeff);

joey.send('Hello', Sara); //<---personal messages
Sara.send('Hey bird, hows that thing?'); //<---chatroom message








//--------------------------------------------
