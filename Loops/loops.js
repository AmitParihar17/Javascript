// for
// for(start;end;change){
// }

// for(let i = 1; i <=22 ; i++){
//     console.log(i)
// }

// for(let i =200 ;i> 100; i--){
//     console.log(i);
// }

// let i = 1;
// for (;i <= 10; i++) {
//      console.log(i);    
// }
// console.log(i);

// for(let i = 1 ; i<=11 ;){  value pass ho jayegi  INFINE LOOP CHL JAYEGA
//     console.log(i);
// }

// for(let i=1;;){   INFINE LOOP
//     console.log(i);  
// }

//  for(;;){ INFINITE LOOP
//     console.log("hello");
    
//  }/

// Sum of natural number

//  const num = Number(prompt("enter a number"));
//  if(isNaN(num)){
//     console.log("Enter valid number");
//  } else{
//     let sum = 0;
//     if(num > 0){
//         for(i=1;i<=num;i++){
//             sum += i 
//         }
//         console.log(sum);
        
//     } else{
//         console.log("should be positive and more than 0");
        
//     }
//  }


// let pr = prompt("Enter a number");
// if(pr=== null){
//     console.log("cancelled");
// } 
// else{
//    const num = Number(pr)
//     if (isNaN(num)) {
//         console.log("Inavlid input");
        
//     }
//     if (num > 0) {
//         let sum = 0;
//         for(let i = num ; i >=1  ; i--){
//             // console.log(i);
//             sum += i;
//         }
//         console.log('Total sum is ->',sum);
        
//     } else if(num <= 0){
//         console.log("Number should be positive or greater than 1");  
//     }
// }

// let pr = prompt("Enter a number");
// if (pr === null) {
//     console.log("Cancelled");
// } else{
//     const num = Number(pr)
//     if(isNaN(num)){
//         console.log("Invalid Number");
//     }
    
//     if(num > 0  || num === 0){
//         let sum = 1 ;
//         for(let i = num ; i>1 ; i--){
//             sum = sum * i
//         }
//         console.log(`Factorial of ${num} is ${sum}`)
//     } else if(num < 0){
//         console.log("Number should be positive");
        
//     }
// }

// Factors of a number

// const num = 12;

// for(let i= 1; i<=num/2; i++){
//     if( num % i === 0) {
//         console.log("these are the factors of",i);
//     }
// }


// const num = 12;

// for(let i =1;i<=num/2; i++){
//     if (num % i === 0) {
//         console.log(`factor of num is ${i}`);
//     }
// }
// console.log(`factors of num is ${num}`);



// optimize way
// const num = Math.floor(Number(prompt("Enter a number")));

// if(isNaN(num)){
//     console.log('Invalid input');
// }
// else {
//     if( num > 0){

//         for(let i = 1 ; i<=Math.floor(num/2) ; i++){
//                 if (num % i === 0) {
//                     console.log("Fatctors of ",num,"is",i); 
//                 }
//         }
//         console.log("Fatctors of ",num,"is",num)
        
//     } else{
//         console.log("Number should be positive or greater than 0");
        
//     }
// }


//prime no

// let pr =Math.floor(Number(prompt("Entr a number")))
//  if(isNaN(pr)){
//     console.log("invalid");
//  } else{
//     if (pr  > 0) {
//         let isPrime = true
//         for(let i = 2;i<=Math.floor(pr/2);i++){
//             if (pr % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         console.log(isPrime);
        
//     } else{
//         console.log("Number should be +ve or > 0");
        
//     }
//  }


// function isPrime(num){ //12
//     if(num <=1) return false;
//     if(num === 2) return true;
//     if(num % 2 == 0) return false;
//     for(let i = 3; i<=Math.floor(Math.sqrt(num));i+=2){
//         if(num % i == 0) return false
//     }
//     return true
// }

// console.log(isPrime(9));


// for(let i= 1; i <23 ;i++){
//     if (i=== 11) {
//         continue;
//     }
//     console.log(i);
// }


// start;
// while(end){
//     // code 
//     change;
// }


// let i = 1;
// while(i<22){
//     console.log(i);
//     i+=2;
// }/


// sum of digit  while loop

// let num = 1234;
// console.log(num);

// if (num > 0) {
//   let sum = 0;
//   while (num > 0) {
//     let rem = num % 10;
//     sum += rem;
//    num = Math.floor(num / 10);
//   }
//   console.log(sum);
// } else {
//   console.log("Number should be positive or greater then 0");
// }
 
// Strong Number

//  let num = 146;
//  if (num < 0) {
//     console.log("Number should be positive or more then 0");
//  } else{
//     let numCopy = num
//  let sum = 0
//      while(num > 0){
//         let fact = 1;
//       let rem = num % 10
//     for(let i = 1;i<=rem ;i++){
//      fact = fact * i;
//     }
//     sum += fact
//      num = Math.floor(num/10)
//      }
//      console.log(num,sum,"is total sum after factorial of ",numCopy," your input is ->",numCopy);
//      if(sum === numCopy){
//         console.log(numCopy+ " is a Strong number");
//      }
//      else{
//         console.log(numCopy ," is Not a Strong number");
        
//      }
     
//  }

let randomNumber = Math.floor(Math.random() * 100) + 1 ;
console.log(randomNumber);

let guessNumber = 0;
while(guessNumber !== randomNumber){
    guessNumber = Number(prompt("Guess a Number"))
    if(isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100){
        console.log("Try again b/w 1 to 100");
        continue
    }
    if (guessNumber > randomNumber) {
            console.log("Too high");         
    } else if (guessNumber < randomNumber){
        console.log("Too low , try again");
    } else{
        console.log("Conrats 👌🫡 number was🥳🎉",randomNumber);
        
    }
}
