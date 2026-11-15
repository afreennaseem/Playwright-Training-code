

//Data types in JS -    PRIMITIVE DATA TYPES and non primitive data types
//PRIMITIVE DATA TYPES -- String, Number, Boolean, Undefined, Null, Symbol, BigInt
//NON PRIMITIVE DATA TYPES -- Object, Array, Function


//PRIMITIVE DATA TYPES -- String, Number, Boolean, Undefined, Null, Symbol, BigInt

//1. STRING -- Data type of variable which is initialized with string is string

let name = "John";
console.log(name);
console.log(typeof name);

//2.NUMBER -- Data type of variable which is initialized with number is number

let age = 20;
console.log(age);
console.log(typeof age);

//3. BOOLEAN -- Data type of variable which is initialized with boolean is boolean

let isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);

//BOOLEAN -- Data type of variable which is initialized with boolean is boolean

let isTeacher = false;
console.log(isTeacher);
console.log(typeof isTeacher);  


//4. UNDEFINED-- Data type of variable which is not initialized is undefined

let marks 
console.log(marks);
console.log(typeof marks);

//lets say later we can initilaize it

marks = 100;
console.log(marks);
console.log(typeof marks);


//5. NULL -- Data type of variable which is initialized with null is null

let studentAddress = null;
console.log(studentAddress);
console.log(typeof studentAddress);

//Let's say later we can initilaize it

studentAddress = "Delhi";
console.log(studentAddress);
console.log(typeof studentAddress);

//Some data types added in ES6 like Symbol and BigInt , we dont really use it in automation projectsv

//6. BigInt -- Data type of variable which is initialized with BigInt is BigInt
//BigInt is used to store large numbers which are beyond the limit of Number data type
//BigInt is created by appending n at the end of the number

let bigIntValue = 1234567890123456789012345678901234567890n;
console.log(bigIntValue);
console.log(typeof bigIntValue);

//7. Symbol -- Data type of variable which is initialized with Symbol is Symbol
//Symbol is used to create unique identifiers for objects

let symbolValue = Symbol("This is a symbol");
console.log(symbolValue);
console.log(typeof symbolValue);





// Non-Primitive Data Types -- Object, Array, Function


// OBJECT LITERAL -- Object is a collection of key value pairs

//Object is a non-primitive data type which can store multiple values in a single variable

let student = {
    name: "John",
    age: 20,
    address: "Delhi"
}

console.log(student);
console.log(typeof student);

//Operations : CURD -- Create, Update, Read, Delete

//To read the value of object we can use dot notation or bracket notation

console.log(student.name);
console.log(student["age"]);

//To add new property to object we can use dot notation or bracket notation

student.gender = "Male";
student["phone"] = "1234567890";

console.log(student);

//To update the value of object we can use dot notation or bracket notation

student.name = "Mike";
student["age"] = 25;

console.log(student);

//To delete the value of object we can use delete keyword

delete student.address;

console.log(student);

//To add the value of object we can use dot notation or bracket notation

student.address = "Mumbai";
student["phone"] = "1234567890";

console.log(student);



/*
Same employee working on two different application , i want to assign differt id to same employee

*/





// in JS array is also an object but it is a special type of object which can store multiple values in a single variable
let marksArray = [100, 90, 80, 70, 60];
console.log(marksArray);
console.log(typeof marksArray);