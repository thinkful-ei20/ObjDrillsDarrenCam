'use strict';

// function createMyObject() {
//   return {
//     foo: 'bar',
//     answerToUniverse: 42,
//     'olly olly': 'oxen free',
//     sayHello: function(){
//       return 'hello';
//     },
//   };
// }

// let monkey ={};

// function updateObject(obj) {
//   obj.foo = 'foo';
//   obj.bar = 'bar';
//   obj.bizz = 'bizz';
//   obj.bang = 'bang';

//   return obj;
// }

// console.log(updateObject(monkey));

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function(){
      return `${this.firstName} ${this.lastName}`;
    },
  };
  return person;
}

let objTest = {
  foo: 'foo',
  bar: 'bar',
};

function keyDeleter(obj){
  delete obj.foo;
  delete obj.bar;

  return obj;
}


// console.log(keyDeleter(objTest));

// console.log(keyDeleter(objTest));

function makeStudentsReport(data) {
  return data.map(student => `${student.name}: ${student.grade}`); 
}

const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];

// console.log(makeStudentsReport(testData));

const students = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  }
];

function enrollInSummerSchool(students) {
  // for(let i = 0l i < students.length; i++) {
  //   if(students[i].status !== 'In Summer School') {
  //     students[i].status = 'In Summer School'
  //   }
  // }
  // return students;
  return students.map(students => {
    return {
      name: students.name,
      status: 'In Summer School',
      course: students.course,
    };
  });
}

// console.log(enrollInSummerSchool(students));

const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];

function findById(items, idNum) {
  return items.find(elem => elem.id === idNum);
}

// console.log(findById(scratchData,19 ));

const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

/*
validateKeys should return true if object has all of the keys from expectedKeys, and no additional keys. 
It should return false if one or more of the expectedKeys is missing from the object, or if the object contains extra keys not in expectedKeys.
*/

function validateKeys(object, expectedKeys) {
  // if the enumerable properties of object is not the same as expectedKeys, return false
  if (Object.keys(object).length !== expectedKeys.length) {
    return false;
  }

  // Loop through expectedKeys
  for(let i = 0; i < expectedKeys.length; i++) {
    // While loop through expectedkeys.length
    // if Object.keys(object) DOES NOT find, the key matching expectedKey[i], return false
    // Goes through the array of strings, that is the keys of the object parameter, and if the key is found, it returns true
    if(!Object.keys(object).find(key => key === expectedKeys[i])) {
      return false;
    }
  }
  // otherwise return true
  return true;
}

console.log(validateKeys(objectB, expectedKeys));