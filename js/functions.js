// Declaration of function (Function Hoisting)
sayHi();
// Yes, functions can be called before declared.This is because JavaScript does their holy, that is, throws the functions to the top of the code.
function sayHi() {
  console.log('Oie');
};

// First-Class Objects (First Class Objects)
// Expression function
const IAmAData = function() {
  console.log('Sou um dado.');
};

IAmAData();

// Function as a parameter
function performsFunction(functionParam) {
  console.log('Vou executar sua função abaixo:');
  functionParam();
};

performsFunction(IAmAData);

// Arrow function
const arrowFunction = () => {
  console.log('Sou uma arrow function.')
}

arrowFunction();

// Within an object
const obj = {
  toSpeak() {
    console.log('Estou falando...');
  },
};

obj.toSpeak();