console.log('Factory up and running ');

// Factory Pattern also called Factory Method:
/* About

   -its a way of creating an interface for creating objects but we can let subclasses
   define which classes to instanctiate

   -Factory Pattern/Methods are used for apps to manage and maintain collections that are
   different or have different 'types' but at the same time have the same properties & methods

   - This Member Factory will take a member types and create a new object based on that type
   -
   -
*/


function MemberFactory() {
  this.createMember = function(name, type) {
	let number;

	if (type === 'simple') {
	  member = new SimpleMembership(name);
	} else if (type === 'standard') {
	  member = new StandardMembership(name);
	} else if (type === 'super') {
	  member = new SuperMembership(name);
	}

	member.type = type;

	member.define = function() {
	  console.log(`${this.name} (${this.type}): ${this.cost}`);

	};
	  return member;
  };
}


const SimpleMembership = function(name) {
  this.name = name;
  this.cost = '$5';
};


const StandardMembership = function(name) {
  this.name = name;
  this.cost = '$15';
};


const SuperMembership = function(name) {
  this.name = name;
  this.cost = '$25';
};


const members = [];
const factory = new MemberFactory;

members.push(factory.createMember('joey', 'super'));
members.push(factory.createMember('Janice', 'simple'));
members.push(factory.createMember('jon', 'super'));
members.push(factory.createMember('Kelly', 'standard'));
members.push(factory.createMember('jolene', 'standard'));
members.push(factory.createMember('Ron', 'simple'));

console.log(members);
console.log('');
console.log('-----------forEach() members---------------');

members.forEach((member) => {
  member.define();
});
