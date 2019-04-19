# Lesson_12_ES6 - 17April2019 
			

# Template Literal
			

```JavaScript
console.log(`Hello! I'm a string continues on to next line when we press ENTER`);

console.log('string text 1\n' + 'string text 2');

	const name = 'Jimmy';
	const day = 'Wednesday';
	const instructor = {
		name: 'Chris',
		lesson: 'ES6',

greet: function () {
	return `Today ${instructor.name} is teaching $
	{instructor.lesson}.`;
	}
}

console.log('Hello ' + name + ', I hope you have a great day on ' + day); // ES5

console.log(`Hello ${name}, I hope ${day} goes well.`); //ES6

console.log(`Today ${instructor.name} is teaching ${instructor.lesson}.`);

console.log(instructor.greet());
```
			

# Scope
			

```Javascript
function foo() {
	let x = true;
	if(x) {
	let usingLet = "I'm using let";
	}
		console.log(usingVar); // Will return undefined because you're using Let and it is not in this scope.
	}

foo();
```
			

# Default Arguments
			

You could use [ and && ] [ or || ] to check if a parameter actually has a value and provide a default: 
```JavaScript
function hello(name) {
	name = name || 'Mystery Person';
	console.log('Hello ' + name + '!');
	}

hello('Bobby'); // Hello Bobby!
hello(); // Hello Mystery Person!
```
			

JavaScript lets you provide a default value for parameters right in the function definition. 
```JavaScript
function hello(day, name = 'Mystery Person') {
	console.log(`Hello ${name} is it me you're looking for?`);
	}

hello('Bobby'); // Hello Bobby is it me you're looking for?
hello(); // Hello Mystery Person is it me you're looking for?
```
			

# Arrow Functions
			

```JavaScript
const teacher = {
name: 'Jimmy',
speak: function() {
function boundFunction() {
	console.log('later my name is ' + this.name); // undefined because setTimeout() interferes with this
		}
setTimeout(boundFunction, 1000);
	} 
};

teacher.speak(); // undefined


One way to solve this is by binding the function with Function.prototype.bind. 

const teacher = {
name: 'Jimmy',
speak: function() {
let boundFunction = function() {
	console.log('later my name is '+ this.name); 
	}.bind(this); // .bind() makes the function use whatever you pass to it as this, regardless of setTimeout's effect.
setTimeout(boundFunction, 1000);
	} 
};

teacher.speak(); //Later my name is Jimmy
```
			

But the easier way is to use arrow functions which have lexical binding. 
That means this will be whatever this was at the time the arrow function was created. 

```JavaScript
const teacher = {
name: 'Jimmy',
speak: function() {
let boundFunction = () => console.log('later my name is '+ this.name);
setTimeout(boundFunction, 1000); 
}
};

teacher.speak(); // later my name is Jimmy


```
# Map Function
			
Takes an array and returns another array where every item in the original array has been run through the function you give it. 
```JavaScript
let students = [
	{name: 'Hugo'},
	{name: 'Candace'},
	{name: 'Taylor'}
	];

let names = students.map((student) => student.name);
	console.log(names); // ['Hugo', 'Candace', 'Taylor']

let names = students.map((pizza) => pizza.name}); // The parameter name can of a function can be anything.
	console.log(names);

```
# Arguments Object
			

Whether or not a function defines parameters, all arguments passed are available through an Array-like object called `arguments`. 
But since it's not actually and Array, you have to convert it to one to be able to use functions like `forEach` or `map` on it. 
```JavaScript
function add(){
	console.log('arguments object:', arguments);

var numbers = Array.prototype.slice.call(arguments);
// Better, added in ES6:

var numbers = Array.from(arguments);
// Shorter but less self-explanatory, also ES6:
var numbers = [...arguments];

var sum = 0;

numbers.forEach(number => sum += number);
	return sum;
}
	console.log(add(1,2,3,4,5,6,7,8)); // 36
```
			

# Rest operator
			

If you want to get an indefinite number of arguments as a single array, you can use the rest operator (`...`). 
```JavaScript
let add = (...numbers) => {
	console.log('rest parameters', numbers);

let sum = 0;

numbers.forEach(number => sum += number);
	return sum;
}

console.log(add(1,2,3,4,5,6,7,8)); // 36
```
			

A nice one-line way to use the rest operator and an arrow function to do the same as above: 
```JavaScript
let add = (...numbers) => numbers.reduce((sum, number) => sum + number, 0);
```
			

# Spread operator
			

Uses the same syntax (`...`) as rest, but in a different context. 
Spreads an Array (including a String, which is like an Array of characters) into the values that it's made of. 
Can be remade into an Array by surrounding it with brackets. 
```JavaScript
let spreadEx = (item) => {
let spreadArray = [...item];
	console.log(spreadArray);
	return spreadArray;
}

spreadEx('Aesthetic'); // ['A', 'e', 's', 't', 'h', 'e', 't', 'i', 'c']
```
			

# Array destructuring
			

To split an Array into multiple variables, you could do something like this. 
```JavaScript
var students = ['Julian', 'AJ', 'Matt'];
var x = students[0];
var y = students[1];
var z = students[2];

console.log(x, y, z); // Julian AJ Matt
```
			

But this way is much easier. 
```JavaScript
let students = ['Julian', 'AJ', 'Matt'];
let [x, y, z] = students; // x = 'Julian', y = 'AJ', z = 'Matt'
let [,y, z] = students; // Ignores the first item in the array, and just assigns y and z to 'AJ' and 'Matt'
let [x,,z] = students; // Similar, but this one ignores the second item, leaving just 'Julian' and 'Matt'
```
			

You can also use the rest operator to dump the remaining items into a new Array. 
```JavaScript
let [x, ...y] = students; // x = 'Julian', y = ['AJ', 'Matt']
	console.log(x, y); // Julian ['AJ','Matt']
```
			

# Object destructuring
			

In much the same way that arrays can be destructured, so can objects. 
```JavaScript
let car = {
	make: 'Honda',
	year: 2005
}

let {make: x, year: y} = car; // x = 'Honda', y = 2005
```
			

You can also make a function destructure an object that it's given by adding braces around the parameters. 
```JavaScript
function something({make, year=2001}) {
	console.log(make, year); // Honda 2005
}
something(car);
```
			

			

# OOP
			

Seemingly this mess is what happens when you try to add OOP to a functional programming language. 
```JavaScript
function Person(name, job) { // A class being a function makes perfect sense, definitely nothing wrong with this.
this.name = name;
this.job = job;
}
```
			

Since functions aren't actually classes, we have to put the properties available to every instance somewhere else. 
So we make a prototype object. 
```JavaScript
Person.prototype.getName = function() {
	return this.name;
}

var goodGuy = new Person('Aang', 'Avatar');
// Needs the new operator so the function doesn't just run normally.
console.log(goodGuy.getName());
```
			

Proper class declarations. 

```JavaScript
class Person {
constructor(name, job) {
this.name = name;
this.job = job;
}

getName() {
	return this.name;
}

getJob() {
	return this.job;
	}
}
```			
Classes can extend other classes to inherit their properties as well as add new ones. 
```JavaScript
class SuperHero extends Person {
constructor(name, heroName, superPower) {
super(name, heroName); // Calls the parent class's constructor function.
this.superPower = superPower;
}

secretIdentity() {
return `${this.job} is really ${this.name}!`;
}
}

let batman = new SuperHero('Bruce Wayne', 'Batman', 'money');
	console.log(batman.secretIdentity()); // Batman is really Bruce Wayne!
```
			

# Getters and Setters
			

			 
```JavaScript
class Person {
constructor(name) {
this.name = name;
}

set job(job) {
if(job == 'Transportation') {
this.job = 'Soon to be automated away.';
} else {
this.job = job;
}
}

get job() {
if(this.job != 'Soon to be automated away.') {
return `${this.job}: safe for the forseeable future.`;
} else {
return this.job;
}
}
}

let trucker = new Person('Jim Gordon');
trucker.job = 'Transportation'; // Set turns this from a normal variable declaration into a function call of the "set job" function above.
	console.log(trucker.job); // Soon to be automated away.

let programmer = new Person('Steve Wozniak');
programmer.job = 'Programmer';
	console.log(programmer.name); // Same for get, this calls the "get job" function above.
// So it prints: Programmer: safe for the forseeable future.
```
			
