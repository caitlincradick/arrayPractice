var pets = ["cat", "snake", "tarantula", "bearded dragon"];
var cardNumber = [23,42,7,99];
var paidTicket = [true, false, true, false];

pets.pop ();
console.log(pets);
//expected output: Array ["cat", "snake", "tarantula"]
cardNumber.shift();
console.log (cardNumber);
//expected output: Array [42,7,99]
console.log(paidTicket.slice(1));
//expected output: Array [false, true, false]