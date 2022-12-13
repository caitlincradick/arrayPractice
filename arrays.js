// var pets = ["cat", "snake", "tarantula", "bearded dragon"];
// var cardNumbers = [23,42,7,99];
// var paidTicket = [true, false, true, false];

// pets.pop();
// console.log(pets);
// //expected output: Array ["cat", "snake", "tarantula"]; this is the expected output because when I declare the pop method it removes the last element from the array and returns that element, which changes the length of the array as well.
// cardNumbers.shift();
// console.log(cardNumbers);
// //expected output: Array [42,7,99]; this is the expected output because the shift method removes the first element from an array and returns that removed element. This will also change the lenght of the array. 
// console.log(paidTicket.slice(1));
// //expected output: Array [false, true, false];this is the expected output because the slice method returns copy of a portion of an array. I decided to slice(1) so it removed one object/element.

// Index positions are the number(s) associated wiht elements from an array, bracket notoation and a number. It corresponds with that element that should be used. The counting starts with '0' because it takes 0 counts to get to the first element. i.e [87,9,76,4], 87 would be considered 0.
var pets = ["cat", "snake", "tarantula", "bearded dragon"];
// There are 4 elements in this Array
// The index position of "cat" is 0
// The value of the element in index position 2 is "tarantula"
//The index position of the first element in this array is 0 and the position of the last element is 3
console.log(pets[0]);
//expected output: element ["cat"]; this is the output I expect because cat is the first element in this array. The arrays start at 0, so if I put '0' I know it will print the first item in the array. 
console.log(pets[3]);
//expected output: element ["bearded dragon"]; I expect this output because I am asking it to print the the third element listed (numerically #4 because the index starts with 0). 
