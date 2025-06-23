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

let num = Number(prompt("Enter a number -> "))
for(let i = 1;i<=num ;i++){
    let ascii = 65;
    for(let j= 1;j<=i;j++){
        process.stdout.write(String.fromCharCode(ascii) + "")
        ascii++;
    }
        console.log();
        
}