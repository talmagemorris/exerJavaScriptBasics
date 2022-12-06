alert('Hello World'); 
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

let age = 30;

age = 31;

const name = 'Brad';
const age = 37;
const rating = 3.5;
const isCool = true;
const x = null;
const y = undefined;
let z; 

console.log(typeof z);

console.log('My name is ' + name + ' and I am ' + age);

console.log(`My name is ${name} and I am ${age}`);

const s = 'Hello World';
let val;

val = s.length;

val = s.toUpperCase();
val = s.toLowerCase();

val = s.substring(0, 5);

val = s.split('');

const numbers = [1,2,3,4,5];
const fruits = ['apples', 'pears', 'oranges', 'grapes'];
console.log(numbers, fruit);

console.log(fruits[1]);

fruits[4] = 'blueberries';

fruits.push('strawberries');

fruits.unshift('mangos');

fruits.pop();

console.log(Array.isArray(fruits));

console.log(fruits.indexOf('oranges'));

const person = {
  firstName: 'John',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA'
  }
}

console.log(person.name)

console.log(person.hobbies[1]);

console.log(person.address.city);

person.email = 'jdoe@gmail.com';

const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isComplete: false
  },
  {
    id: 2,
    text: 'Dinner with wife',
    isComplete: false
  },
  {
    id: 3,
    text: 'Meeting with boss',
    isComplete: true
  }
];

console.log(todos[1].text);

console.log(JSON.stringify(todos));

for(let i = 0; i <= 10; i++){
  console.log(`For Loop Number: ${i}`);
}

let i = 0
while(i <= 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

for(let i = 0; i < todos.length; i++){
  console.log(` Todo ${i + 1}: ${todos[i].text}`);
}

for(let todo of todos) {
  console.log(todo.text);
}

todos.forEach(function(todo, i, myTodos) {
  console.log(`${i + 1}: ${todo.text}`);
  console.log(myTodos);
});

const todoTextArray = todos.map(function(todo) {
  return todo.text;
});

console.log(todoTextArray);

const todo1 = todos.filter(function(todo) {

  return todo.id === 1; 
});

const x = 30;

if(x === 10) {
  console.log('x is 10');
} else if(x > 10) {
  console.log('x is greater than 10');
} else {
  console.log('x is less than 10')
}
color = 'blue';

switch(color) {
  case 'red':
    console.log('color is red');
  case 'blue':
    console.log('color is blue');
  default:  
    console.log('color is not red or blue')
}

const z = color === 'red' ? 10 : 20;

function greet(greeting = 'Hello', name) {
  if(!name) {
    
    return greeting;
  } else {
  
    return `${greeting} ${name}`;
  }
}

const greet = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`;
console.log(greet('Hi'));


function Person(firstName, lastName, dob) {

  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); 
}

Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}

const person1 = new Person('John', 'Doe', '7-8-80');
const person2 = new Person('Steve', 'Smith', '8-2-90');

console.log(person2);

const name = new String('Kevin');
console.log(typeof name); 
const num = new Number(5);
console.log(typeof num); 

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const person1 = new Person('John', 'Doe', '7-8-80');
console.log(person1.getBirthYear());

console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));

console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');

btn.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
});

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    setTimeout(() => msg.remove(), 3000);
  } else {

    const li = document.createElement('li');

    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    userList.appendChild(li);


    nameInput.value = '';
    emailInput.value = '';
  }
}