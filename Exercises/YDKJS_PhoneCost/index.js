// Costo totale telefoni comprati
// acquisto telefoni fino a quando il conto in banca lo permette
// acquisto accessori fino a quando il conto in banca lo permette
//
// aggiunta tasse e print dell'acquisto totale16:12 08/07/2017, formattato toFixed(2)
// check della spesa ivata con il conto in banca
"use strict"
const TAX_RATE = 0.22;
var bankAccount = prompt("What's the balance of your bank account?");
const SPENDING_THRESHOLD = prompt("What's the amount of money you would like to spend at maximum?");
var phoneCost = [99.99 , 199.99, 299.99, 17.99];
const accessoryCost = 9.99;

function roundingDecimal(digit, decimals) {
  var roundedValue = digit.toFixed(1);
  return roundedValue;
}

function calculatePhoneCost() {
    var totalPhoneCost = 0;
    for (var i=0; phoneCost[i] < bankAccount; i++) {
      phoneCost[i] = phoneCost[i] + (phoneCost[i] * TAX_RATE);
      totalPhoneCost = totalPhoneCost + phoneCost[i];
      if (phoneCost[i] > SPENDING_THRESHOLD || totalPhoneCost > SPENDING_THRESHOLD) {
        console.log("You can't buy this because the Threshold you've setted is too low!");
        break;
      } else {
        bankAccount = bankAccount - phoneCost[i];
        var fixedBankAccount = bankAccount.toFixed(2);
        var taxLessPhoneCost = phoneCost[i] / (TAX_RATE + 1);
        var taxAmount = phoneCost[i] * TAX_RATE;
        var fixedTaxLessPhoneCost = taxLessPhoneCost.toFixed(2);
        var fixedTaxAmount = taxAmount.toFixed(2);
        var fixedPhoneCost = phoneCost[i].toFixed(2);
        console.log(`This phone costed you ${fixedPhoneCost} € (Cost:${fixedTaxLessPhoneCost} €, Taxes: ${fixedTaxAmount} €) and your current balance is: ${fixedBankAccount} €`);
      }
    }
    var y=0;
    while (bankAccount > (accessoryCost + (accessoryCost * TAX_RATE))) {
          bankAccount = bankAccount - (accessoryCost + (accessoryCost * TAX_RATE));
          y++;
    }
    console.log(`Your current balance is of: ${fixedBankAccount} € and you have bought ${i} Phones and ${y} accessories`);
    return totalPhoneCost;

}

var totalCost = calculatePhoneCost();
var fixedTotalCost = totalCost.toFixed(2);
console.log(`You've spent ${fixedTotalCost} € in Phones`);
