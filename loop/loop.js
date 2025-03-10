//  for(start;end;change){}

// for(let i=0;i<23;i++){
//     console.log("i:",i);

// }

// for(let i=23;i>1;i--){
//     console.log(i);

// }

// let i = 1;
// for(;i<=10;i++){
//     console.log(i);
// }
// console.log("fail",i);

// for(let i = 1;i<=10;){
//     console.log(i);          // valid code h but infinite loop
// }

// for (let i = 1;; ) {
//   console.log(i); //        valid code h but infinite loop
// }

// for (;;) {
//   console.log("hello"); // valid code h but infinite loop(2semicolon needed)
// }




// sum of 1 natural number

// let pr = prompt("Enter a number");

// if(pr === null){
//     console.log("Cancelled"); 
// }
// else{
// let num = Number(pr);

// if (isNaN(num) || num === "") {
//   console.log("Invalid input");
// } else {
//   if (num > 0) {
//      let sum = 0;
//     for (let i = 1; i <= num; i++) {
//          sum = sum + i;    
//     }
//        console.log(sum);
//   } else {
//     console.log("should be +ve and more than 0");
//   }
// }
// }


//Factors of number

let pr = prompt("Enter a number");

if(pr === null){
  console.log("Cancelled");
}
else{
  let num = Number(pr);
  if(isNaN(num) && num === ""){
    console.log("invalid input");
  } else {
      if (num > 0) {
        for (i = 1; i <= Math.floor(num /2); i++) {
          if (num % i === 0) {
            console.log(i);
          }
        }
        console.log(num);
        
      } else {
        console.log("should be positive more than 0");
      } 
  }
} 

