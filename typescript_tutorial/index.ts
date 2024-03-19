let age:number = 20;
let couser: string = "Test";
let is_true:boolean = true;

let test: any[] = [1, true, 'test'];

let arr: number[] = [1,2,3,4];

// tuples
let user: [number, string] = [1, 'Renan'];

// function example
function salary(age: number, salary: number, name: string) : string {
  return name + " is " + age + " year old and his salary is " + salary;
}

var person = salary(10, 1000, 'Renan');
console.log(person);

// let employee: {
//   id: number,
//   name: string,
// } = {id : 1, name: "Renan"};

type Student = {
  id: number,
  name: string,
}
let employee: Student = {id: 1, name: 'Renan'};
let student: Student = {id: 1, name: 'Renan'};
let per: Student = {id: 1, name: 'Renan'};

function getAge(age: number | string){
  console.log(age);
}
getAge('20');

class Person {
  // constructor
  firstName: string;
  LastName: string;

  constructor(firstName:string, lastName:string){
    this.firstName = firstName;
    this.LastName = lastName;
  }
}

class Male extends Person{
  age: number;

  constructor(firstName:string, lastName:string, age:number){
    super(firstName,lastName);
    this.age = age;
  }

}
var pers: Person = new Person('Renan', 'Dollinger');
console.log(pers);