var fibonacci = [];
function fibonacciArray(number) {
  var number = 0;
  for (var x = 0; x < 20; x++) {
    fibonacci[x] = number;
    number = number + 1;
  }
  return fibonacci;
}

function fibonacciSequence() {
  for (let i = 0; i < 20; i++) {
    if (fibonacci[i] == 0 || fibonacci[i] == 1) {
      fibonacci[i] == i;
    } else {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
  }
  }
}

var array = fibonacciArray(0);
console.log(fibonacci);
fibonacciSequence();
console.log(fibonacci);
