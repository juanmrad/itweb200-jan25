console.log("Hello World")

const resultDisplay = document.getElementById('result');

const form = document.getElementById('calculator');

form.addEventListener('submit', function (event) {
  console.log(event);
  event.preventDefault();
  console.log(event.target);
  console.log(event.target.num1);
  console.log(event.target.num1.value);
  console.log('form submitted');
  calculate(event.target.num1, event.target.num2, event.target.operation)
})

function addition(a, b) {
  return a + b;
}

function calculate(num1, num2, operation) {

  if (num1.value == '' || num2.value == '') {
    alert('Please add numbers');
    return;
  }

  let result;
  if (operation.value == 'addition') {
    result = addition(Number(num1.value), Number(num2.value));
  } else if (operation.value == 'substraction') {
    result = Number(num1.value) - Number(num2.value);
  } else if (operation.value == 'multiplication') {
    result = Number(num1.value) * Number(num2.value);
  } else if (operation.value == 'division') {
    result = Number(num1.value) / Number(num2.value);
  } else {
    result = 'Not available'
  }
  resultDisplay.innerText = result;
}
