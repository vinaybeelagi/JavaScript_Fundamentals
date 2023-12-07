// //Topic-Functions: Task-Is "else" required?
// // example-1
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       // ...
//       return confirm('Did parents allow you?');
//     }
//   }
// //   example-2
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     }
//     // ...
//     return confirm('Did parents allow you?');
//   }

// //   Ans: no difference

// Rewrite the function using '?' or '||'
function checkAge(age){
    return(age>18) ? true:confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }