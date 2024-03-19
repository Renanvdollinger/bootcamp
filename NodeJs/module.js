const test = "Renan";

function hello(name){
 // console.log(`Hello ${name}`); (they are the same but different way to write)
  console.log('Hello ' + name);
}

hello('Renan');


module.exports.test = test;
module.exports.hello = hello;

console.log(module);