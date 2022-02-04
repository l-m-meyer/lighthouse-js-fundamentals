// function prints Hello, <name> to the console
const sayHelloToConsole = function (name) {
  console.log('Hello,', name);
}

sayHelloToConsole('John');

// function returns Hello, <name>
const returnSayHello = function (name) {
  return 'Hello, ' + name;
}

const greeting = returnSayHello('John');
console.log(greeting);