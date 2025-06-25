let prompt = require('prompt-sync')()
// let num = Number(prompt("Enter a number "))

// for(let i = 1;i<=num; i++){
//     process.stdout.write("* ")
// }

// let prompt = require("prompt-sync")();   import statement
// let num = Number(prompt("Enter a number "));    for input from user
// process.stdout.write("* ");    for print in terminal without line break

//square pattern 

// let num = Number(prompt("Enter a number-"))
// for(let i = 1;i<=num; i++){
//     for(let j = 1; j<= num ;j++){
//         process.stdout.write("* ");
//     }
//     console.log();
    
// }

// right angle triangle 

// let num= Number(prompt("Enter a number -> "));
// for(let i = 1; i<=num;i++){
//     for(let j= 1;j<=i;j++){
//         process.stdout.write("* ")
//     }
//     console.log()
// }

// right angle triangle with Numbers
// let num = Number(prompt("Enter a number -> "))
// for(let i = 1 ;i <=num ; i++){
//     for(let j = 1;j<=i;j++){
//         process.stdout.write(j + '')
//     }
//     console.log();
// }

// rat with Alphabet

// let num = Number(prompt("Enter a number -> "))
// for(let i = 1;i<=num ;i++){
//     let ascii = 65;
//     for(let j= 1;j<=i;j++){
//         process.stdout.write(String.fromCharCode(ascii) + "")
//         ascii++;
//     }
//         console.log(); 
// }

// let num = Number(prompt("Enter a number-> "))
// for(let i = num;i > 0;i--){
//         for(let j=1;j<=i;j++){
//             process.stdout.write("* ")
//         }
//         console.log();      
// }

// let num = Number(prompt("Enter a number -> "))
// for(let i = 1; i<=num; i++){
//     for(let j= 1;j<=num-i + 1;j++){
//     process.stdout.write("* ")       
//     }
//     console.log();  
// }

// let num = Number(prompt("Enter a number -> "));
// for(let i = 1; i<=num; i++){
//     for(let j= num;j>=i;j--){
//     process.stdout.write("* ")       
//     }
//     console.log();  
// }

// let num = Number(prompt("Enter a number -> "))
// for(let i = 1;i<=num;i++){
//     for(let j= 1;j<=num-i;j++){
//         process.stdout.write("  ")
//     }
//     for(let j= 1;j<=i;j++){
//         process.stdout.write("* ")
//     }
//     console.log();   
// }

// let num = Number(prompt("Enter a number -> "))
// for(let i =1 ;i<=num;i++){
//     for(let j=1;j<=num;j++){
//         if(i==j || i+j == num+1){
//      process.stdout.write("*")
//         } else{
//             process.stdout.write(" ");
//         }
//     }
//     console.log();
    
// }

let num = Number(prompt("Enter a number->"))
for(let i = 1;i<=num;i++){
    for(let j= 1;j<=2*num-1;j++){
        if(i==j || i+j == 2*num){
            process.stdout.write("*")
        } else{
            process.stdout.write(" ");
        }
    }
    console.log();
    
}


