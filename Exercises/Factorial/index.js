function factorial(x) {
  if (x == 0) {
    return "I can't factorial the value requested.";
  } else if (x == 1) {
    return "The value you've requested to factorial is '1', it would be pointless to do that."
  } else {
    var result = 1;
    for (let i = x-1; i > 0; i--) {
      result = result * x;
      console.log(`${result}`);
      x--;
    }
  }
  return result;
}

var value = prompt("Insert the value you would like to factorial:");
factorial(value);
