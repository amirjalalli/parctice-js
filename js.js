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

// let m = 'Hi my name is Amir'
// console.log(m.split(" "))
// console.log(m.slice(0, m.length[m.length -1]))\
// console.log(Array(m ))

// what diffrent betwenn substr and substring and slice
// the substr second parmeter is length but the substring and slice are index

// console.log(m.substr(0, m.length))

// let user = {
//     name: "amir",
//     age: "28",

// }

// user.email = "amirjalali@gmail.com"
// delete user.age

// console.log(user)

// let user = {
//     name: "amir",
//     age: "28",
//     email: 'amir@gamil.com',
//     phone: '123123',
// }

// for(let key in user) {
//     console.log(key, user[key])
// }
// for (let val of Array(user)) {
//     console.log(val, Array(user))
// }
// console.log(Object.values(user), Object.keys(user))

// let sumOfPayment = {
//     amir: '1000',
//     mehdi: '1500',
//     farzin: '4000',
//     afshin: '1500',
//     mmdreza: '3000',
// }

// let sum = 0
// for (let key in sumOfPayment) {
//     // sum += Number(user[key])
//     sum = sum + Number(sumOfPayment[key])
// }
// let sum1 = 0
// for (let val of Object.values(sumOfPayment)) {
//     sum1 += Number(val)
//     // sum1 = sum1 + Number(val)
// }
// console.log(sum, sum1)

// const user = {
//     name : 'amir',
//     age: 28,
//     favBook: {
//         bookName: "volume Profile",
//         bookAuthor: "xxx",
//     }
// }

// const {name, age, favBook} = user
// console.log(name, age, favBook.bookName, favBook.bookAuthor)

// const user = {
//     name : 'amir',
//     age: 28,
// }

// const copidUser = {}

// for (let key in user) {
//     // console.log( user[key])
//     console.log(copidUser[key] = user[key])
// }
// const copidUser = Object.assign({email: "amir@gmail.com"}, user)
// const copidUser  = {...user, email: "amir@gmail.com"}
// console.log(copidUser)

// function calcSum (num1, num2 = 10, num3= 5) {
//     return console.log(num1 + num2 + num3)
// }
// calcSum(5, 5, 2)

//rest parameters
// function calcSum (...args) {
//     let multi = 1
//     for (let num of args) {
//         multi *= num
//     }
//     return console.log(multi)
// }

// // calcSum(2,3,4,5)
// const number = [1, 2, 3, 2, 4, 2, 5];
// // number.unshift(9,10,11)
// // number.push(17,18,19)
// // number.shift(9)
// // number.pop(19)
// // number.splice(2, number.length, 14, 15);
// // console.log(number);
// console.log(number.includes(2, 4))

// const dr = [
//     {name: 'amir', age: 20},
//     {name: 'ali', age: 15},
//     {name: 'g', age: 35},
//     {name: 'sss', age: 23},
//     {name: 'ddd', age: 41},
//     {name: 'rrr', age: 31},
// ]
// const result = dr.map((item,index) => {
//     return item.age > 25
// }) ? true : false
// console.log(result)
// dr.sort((a,b) => {
//     if(a.age > b.age) return +1
//     if(a.age < b.age) return -1
//     if(a.age === b.age) return 0
// }).reverse()

// console.log(result)
// two method call some and every
// have one diffrent bettwen them that is if one of them have diffrent of condition the result be false

// let num = [1,2,3,4,5,6]
// console.log(num.slice(2, 4))

// let num1 = [1,2,3]
// let num2 = [4,5,6]
// let result = [...num1]

// console.log(num1.some((n) => {
//     return n >= 3
// }))

// let set = new Set()
// set.add(100)
// set.add(200)
// set.add(100)
// set.delete(200)

// console.log(set.size)
// let map = new Map()
// map.set("Mango", "ame")
// map.set("banana", "kola")
// map.set("Score", 100)
// console.log(map)

// set , map , weakset

// therer only get object
// const ws = new WeakSet()
// const object1 = {}
// const object2 = {}
// ws.add(object1)
// ws.add(object2)
// console.log(ws)
// console.log(ws.has(object1))
// const wm = new WeakMap()
// wm.set(object1)
// console.log(wm.has(object1))
// console.log(wm.get(object1))

// function div(a, b) {
//     if(b === 0) {
//         throw SyntaxError("Error")
//     }
// }
// console.log(

//     div(1,0)
// )

// let regExp = /amir/i
// console.log(regExp.test("hello amir"))

//factory funciton

// function user (name, age) {
//     const userObje = {
//         name,
//         age,
//         walk: function() {
//             console.log("hello amir")
//         }
//     }
//     return userObje
// }

// const user1 = user("farzin", 30)
// const user2 = user("amir", 28)

// console.log(user1,user2)

//

// console.log("before")

// function fetchUser () {
//     setTimeout(() => {
//         console.log("in function")
//         return {
//             name: "amir",
//             age: 40
//         }
//     }, 2000)
// }

// const user = fetchUser()
// console.log(user)

// console.log("After")
/////////////////////////////////////////////
// fetchUser(1234,"amirjalali@gmail.com",(user)  =>{
//     console.log(user)
//     sendEmail(fetchUser.email,(response) => {
//         console.log(response)
//     })
// })

// function sendEmail (userEmail, callback) {
//     setTimeout(() => {
//         console.log("in function sendEmail")
//         const response = {response : true}
//         callback(response)
//     }, 3000)
// }

// function fetchUser (id,email,callback) {
//     setTimeout(() => {
//         console.log("in function fetchUser")
//         const fetchedUser = {
//             id: id,
//             name: "amir",
//             age: 28,
//             email: email
//         }
//         callback(fetchedUser)
//     },2000)
// }

// Promise

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1)
//         reject(new Error("this is error"))
//     },2000)
// })

// promise.then(( result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err.message)
// })

// const gitAPI = fetch("https://api.github.com/users/andrew")

// gitAPI.then((res) => {
//     return res.json().then((profile) => {
//         return console.log(profile)
//     })
// }).catch(err => console.log(err))

// async function getApi () {
//     const res = await fetch("https://api.github.com/users/andrew")

//     const profile = await res.json()
//     console.log(profile)
// }

// getApi()

// const resolveAfter2Second = (x)  =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(x)
//         }, 2000)
//     })
// }

// async function f1 () {
//     const x  = await resolveAfter2Second(10)
//     console.log(x)
// }

// f1()
// function resolveAfter2Seconds(x) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(x);
//       }, 2000);
//     });
//   }

//   async function f1() {
//     const x = await resolveAfter2Seconds(10);
//     console.log(x); // 10
//   }

//   f1();

// let headers = document.getElementsByTagName("h2")
// headers = Array.from(headers)

// headers.forEach(header => {
//     console.log(header)
//     header.style.color = "#fff"
//     header.style.backgroundColor = "#333"
//     header.style.marginTop = "15px"
//     header.style.marginBottom = "15px"
//     header.style.padding = "10px 15px"
// })

// console.log(headers)

// let lists = document.querySelector('ol')

// console.log(lists.children)
// console.log(lists.childElementCount)
// console.log(lists.children[1])
// lists.children[2].innerHTML = "<span>hi amir</span>"
// console.log(lists)
// console.log(lists)
{/* <li class="content-li">
  <p>post1</p>
  <button>x</button>
</li>; */}

// let orderList = document.querySelector(".conten-ol")
// let list1 = document.createElement('li')
// let paragraph = document.createElement("p")
// let button = document.createElement("button")

// list1.className = "content-li"
// paragraph.innerText = "create new element"
// button.innerText = "x"
// list1.append(paragraph, button)
// orderList.append(list1)
// console.log( orderList)


// const btn = document.querySelector(".btn")

// btn.addEventListener('click', (event) => {
//     console.log(event.target)
//     console.log(event.clientX)
//     console.log(event.clientY)
//     console.log(event.offsetX)
//     console.log(event.offsetY)
//     console.log(event.shiftKey)
//     console.log(event.altKey)
//     console.log(event.ctrlKey)  
// })




