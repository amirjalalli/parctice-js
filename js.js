// let color =  undefined
// let car = null

// console.log("color",typeof color, "null",typeof car)
// some of primitive data type
// string number boolean object and undefined

// let user = {
//     name: "Amir",
//     lastName: "jalali",
//     age: 28,
//     hobby: "reading",
//     job: "frontEndDeveloper"
// }

// console.log(`my name is ${user?.name} ${user?.lastName} and my work is ${user["job"]}`)

// let friends = ["arman", "mamad", "mehdi"]
// console.log(friends[friends.length - 1])

// function showMyName (arguman) {
//     console.log(arguman)
// }

// showMyName("amir")
// showMyName("parameter")

// function calcSum (num1, num2) {
//     const sum = num1 + num2
//     return sum
// }

// const result = calcSum(30 , 20)

// console.log(result)

//exercise

// let person  = {
//     name : "Amir",
//     age: 40,
//     isMarried: false,
//     homeAddress: {
//         long: 41,
//         lat: 273,
//     },
//     frieds: ["arman", "mmd", "mehdi"],
// }
// let number = 10
// if(number > 0) {
//     console.log("this is a positive number")
// }else if (number < 0) {
//     console.log("this is a negative number")
// }else {
//     console.log("this is Zero number");
// }

// let color = "yellow";
// switch (color) {
//   case "red":
//     console.log("this is red");
//     break;
//   case "black":
//     console.log("this is black");
//     break;
//   case "blue":
//     console.log("this is blue");
//     break;
//     default:
//         console.log("this color is not declear")
// }

// let num1 = 20;
// let num2 = 111;
// let max = num1 > num2 ? "num1 > num2" : "num2 > num1";

// console.log("max", max);

// let wirteNumber = 4

// if ( wirteNumber % 3 === 0 && wirteNumber % 5 === 0) {
//     console.log("FizzBuzz")
// }else if (wirteNumber % 5 === 0) {
//     console.log("Buzz")
// }else if (wirteNumber % 3 === 0) {
//     console.log("Fizz")
// }else {
//     console.log("Nothing")
// }

// let fizBuzz =
//   wirteNumber % 3 === 0 && wirteNumber % 5 === 0
//     ? "FizzBuzz"
//     : wirteNumber % 5 === 0
//     ? "Buzz"
//     : wirteNumber % 3 === 0
//     ? "Fizz"
//     : "nothing";

//     console.log(fizBuzz)

// let mark = 10;

// switch (true) {
//   case mark >= 80 && mark <= 100:
//     console.log("A+");
//     break;
//   case mark >= 70 && mark <= 79:
//     console.log("A");
//     break;
//   case mark >= 60 && mark <= 69:
//     console.log("A-");
//     break;
//   case mark >= 50 && mark <= 59:
//     console.log("B");
//     break;
//   case mark >= 40 && mark <= 49:
//     console.log("C");
//     break;
//   case mark >= 33 && mark <= 39:
//     console.log("C");
//     break;
//   case mark >= 0 && mark <= 32:
//     console.log("F");
//     break;
// }


// for (let i = 0; i <= 4; i++) {
//     console.log("amir")
// }
// for (let i = 4 ; i >= 1; i--) {
//     console.log("min")
// }

// let index = 1 
// while (index <= 4) {
//     console.log("while")
//     index++;
// }

// let servise = 1
// do {
//     console.log("do loop")
//     servise++
// } while(servise <=4 )

// let person  = {
//     name : "Amir",
//     age: 40,
//     isMarried: false,
//     homeAddress: {
//         long: 41,
//         lat: 273,
//     },
//     frieds: ["arman", "mmd", "mehdi"],
// }


// for (let key in person) {
//     console.log(key, person[key])
// }

// let number = [1,2,3,4,5]
// for (let num in number ) {
//     console.log(number[num], num, number)
// }

// for (let num of number) {
//     // console.log(num, number)
//     // console.log(number[num] )
// }

// for (let i = 0 ; i < 20; i++){

    
//     if (i === 8) {
//         continue;
//     }
    
//     if (i >= 17) {
//         break
//     }
//     console.log(i)
// }

// let message = "Hi My Name Is Amir Hi"
// console.log(message.toLocaleLowerCase().startsWith(`hi`))
// console.log(message.toLocaleLowerCase().includes((`amir`)))

// console.log(message.search("amir"))
// console.log(message.toLocaleLowerCase().indexOf("name"))
// console.log(message.lastIndexOf('Hi'))


// let temp = [1,2,3,4]
// console.log(temp.toString())

// let m1 = "hi"
// let m2 = "my name is"
// let m3 = "Amir"


let m = 'Hi my name is Amir'
// console.log(m.split(" "))
// console.log(m.slice(0, m.length[m.length -1]))\
// console.log(Array(m ))


// what diffrent betwenn substr and substring and slice 
// the substr second parmeter is length but the substring and slice are index

console.log(m.substr(0, m.length))