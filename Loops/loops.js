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

let pr = prompt("Enter a number");
if (pr === null) {
    console.log("Cancelled");
} else{
    const num = Number(pr)
    if(isNaN(num)){
        console.log("Invalid Number");
    }
    
    if(num > 0  || num === 0){
        let sum = 1 ;
        for(let i = num ; i>1 ; i--){
            sum = sum * i
        }
        console.log(`Factorial of ${num} is ${sum}`)
    } else if(num < 0){
        console.log("Number should be positive");
        
    }
}