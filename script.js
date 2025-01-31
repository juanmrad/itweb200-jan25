console.log("Hello There");
let example = "Juan"

function greetPerson() {
  let personName = document.getElementById('greetName').value;
  document.getElementById('greetMessage').innerText = 'Welcome, ' + personName;
}

function addTodo() {
  let todoValue = document.getElementById('newTodo').value;
  let newTodoItem = document.createElement('li');
  newTodoItem.innerText = todoValue;

  document.getElementById('todo-list').appendChild(newTodoItem);
}

function myFunc() {
  console.log("Hello World!");
  console.log("Hello World again!");
  alert('Hello There');
}

function greet(name) {
  console.log("Hello " + name + ", How are you?");
}

function count(number) {
  console.log(number)
  let counter = document.getElementById('count');
  counter.innerText = Number(counter.innerText) + number
}

console.log("Hi");

