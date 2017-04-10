function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  };
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };
};

var person1 = new Person('Nemi', 'Banigo', 23, 'female', ['literature', 'coding']);
var person2 = new Person('Jane', 'Austin', 100, 'female', ['literature', 'writing', 'running']);

person1['age'];
person1.interests[1];
person1.bio();

person2.interest[2];
person2.bio();
