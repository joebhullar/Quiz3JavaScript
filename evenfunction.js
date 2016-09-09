var isEven = function (x) { return x % 2 == 0; }; filter([1, 2, 3, 4], isEven); 
 alert ("isEven(1)" + isEven(1));

var result = [1, 2, 3, 4].filter(isEven);
// => [2, 4]

console.log(result);
