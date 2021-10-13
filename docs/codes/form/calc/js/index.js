const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const sumBtn = document.querySelector('#sum');
const result = document.querySelector('#result');

function calc(number1, number2, operator) {
  return eval(`${number1} ${operator} ${number2}`);
}

function load() {
  sumBtn.addEventListener('click', () => {
    result.value = calc(number1.value, number2.value, sumBtn.value);
  });
}

load();
