console.log(varVar); 
// console.log(letVar); 
// console.log(constVar); 

var varVar = "var";
let letVar = "let";
const constVar = "const";

console.log(varVar, letVar, constVar);

if (true) {
  var varScope = "Function-scoped";
  let letScope = "Block-scoped";
  const constScope = "Block-scoped and constant";
}
console.log(varScoped); 
// console.log(letScoped);  
// console.log(constScoped);

var n = 42;
let letStr = "Hello";
const bool = true;

n = 100; 
letStr = "World"; 
// bool = false;

console.log(varNum, letStr, bool);