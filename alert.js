// alert("Hello,I am Javascript")

// let admin,name;
//  name = "john";
// admin = name ;
// alert(admin);

//  task-The variable for our planet
// const myPlanetName = "Earth";
// let currentUserName = "devid";

// // task-Uppercase const?
// const BIRTHDAY = '04.04.1998'; 

// const age = someCode(BIRTHDAY);

// // task-String quotes
// let name = "Ilya";

// alert( `hello ${1}` ); // hello 1

// alert( `hello ${"name"}` ); // hello name

// alert( `hello ${name}` ); // hello Ilya

//task- Interaction: alert, prompt, confirm
// let name = prompt("what is your name?", "")
// alert(name);

// task-operators-The postfix and prefix forms
// let a = 1, b = 1;

// let c = ++a; // 2
// let d = b++; // 1
// // output : a=2 b=2 c=2 d=1

// // task-Assignment result
// let a = 2;

// let x = 1 + (a *= 2);
// // o/p: a=4 x=5

// // Type conversions
// "" + 1 + 0  // '10'
// "" - 1 + 0  //-1
// true + false //1
// 6 / "3" // 2
// "2" * "3" //6
// 4 + 5 + "px" //'9px'
// "$" + 4 + 5 //"$45"
// "4" - 2 // 2
// "4px" - 2 // NaN
// "  -9  " + 5 //"-9 5"
// "  -9  " - 5 //-14
// null + 1 // 1
// undefined + 1 //NaN
// " \t \n" - 2 // NaN

// // Fix the addition
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(a + b); // 12
// // After fix:
// let a = +prompt("First number?", 1);
// let b = +prompt("Second number?",2);
// alert(a+b); 

// task-comparison
// 5 > 4 //true
// "apple" > "pineapple" // false
// "2" > "12" //true
// undefined == null // true
// undefined === null // false
// null == "\n0\n" // false
// null === +"\n0\n" //false

// //task-Conditional branching: if, '?'-if (a string with zero)
// if ("0") {
//     alert( 'Hello' );
//   } //yes

// //   task-The name of JavaScript
// let question = prompt("What is the “official” name of JavaScript?","");
// if (question == "ECMAscript"){
//     alert("Right")
// }
// else{
//     alert("You don't know? ECMAScript!");
// }

// // task-Show the sign
// let num1 = prompt("type a number","0");
// if (num1>0){
//     alert(1);
// }
// else if (num1<0){
// alert(-1);
// }
// else {
//     alert(0);
// }

// // task- Rewrite 'if' into '?'
// let result= (a + b < 4) ? "below":"over";

// task-Rewrite 'if..else' into '?'
// let message = (login == 'Employee') ? 'Hello' :
//               (login == 'Director') ? 'Greetings' :
//               (login == '') ? 'No login' : '';
// alert(message);

// task-logical-operators:What's the result of OR?
// alert( null || 2 || undefined ); //2

// //task- What's the result of OR'ed alerts?
// alert( alert(1) || 2 || alert(3) ); //1 ,then 2

// //task-The result of OR AND OR
// alert( null || 2 && 3 || 4 ); //3

// //task-Check the range between
// if (age>=14 && age<=90);

// // task-Check the range outside
// if (!(age>=14 && age<=90))  //1st o/p
// if (age<14 && age>90)  //2nd o/
// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );
// //The code will excute'first'& 'third'

// //Check the login
// let userName = prompt("Who's there?", '');
// if (userName === 'Admin') {
//   let pass = prompt('Password?', '');
//   if (pass === 'TheMaster') {
//     alert( 'Welcome!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Canceled' );
//   } else {
//     alert( 'Wrong password' );
//   }
// } else if (userName === '' || userName === null) {
//   alert( 'Canceled' );
// } else {
//   alert( "I don't know you" );
// }

// task- loops: while for-Last loop value
// let i=3;
// while(i){
//   alert(i--)
// }; // lastvalue:1

//task -Which values does the while loop show?
// let i = 0;
// while(++i<5) alert(i);  //ans:1 to 4

// let x = 0;
// while(x++<5) alert(x); // ans: 0 to 5

// task - Which values get shown by the "for" loop?
// for (let i=0;i<5;i++) alert(i); //0,1,2,3,4
// for (let j=0;j<5;++j) alert(j); //0,1,2,3,4

// task-Output even numbers in the loop
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     alert( i );
//   }
// }

// task-Repeat until the input is correct
// let num;
// do {
//   num = prompt("Enter a number greater than 100?",0);
// }while(num<=100 && num);

//task-Output prime numbers
let n = 10;
for (let i = 2; i <= n; i++) { 
nextPrime:
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  } 
  alert( i );
}








