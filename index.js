// var fn;
//
// function foo() {
// 	let a = 2;
//
// 	function baz() {
// 		console.log( a );
// 	}
//
//   fn = baz; // assign `baz` to global variable
// }
//
// function bar() {
// 	fn(); // look ma, I saw closure!
// }
//
// foo();
//
// bar(); // 2

var number = prompt('Type a single digit number (0 - 9)');

function checkNumbers() {
    let paramCheck = 0;
    do {
          if (number == paramCheck) {
            console.log("The number you've selected is " + paramCheck + "!");
            return number;
          } else {
            paramCheck = paramCheck + 1;
          }
       } while (paramCheck < 10);
       if (paramCheck => 10) {
         console.log("The number you've typed is equal or higher than 10!");
       }
}

checkNumbers(number);
