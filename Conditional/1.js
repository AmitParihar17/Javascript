// conditional statement

//  let age = Number(prompt('Enter your age'))
//     if(isNaN(age) || age>=0){
//         console.log('Enter a valid input');
//     }
// else if(age <18){
//     console.log('you cannot vote')
// } else{
//     console.log('you can vote and your age is',age);
    
// }


//2    formula  discount = (discount * amount ) / 100

// let amount =Number (prompt("What is the final amount"));

// if(amount > 0 && amount <=5000){
//     console.log(amount); 
// } else if(amount >5000 && amount <7001){
//         console.log(amount -Math.floor((5*amount) / 100));    
// }
//  else if(amount >7000 && amount < 9001){
//         console.log(amount -Math.floor((10*amount) / 100));    
// }
//  else if(amount >9001){
//         console.log(amount -Math.floor((20*amount) / 100));    
// } else{
//      console.log('wrong input');
     
// }

// 2 better way  formula  discount = (discount * amount ) / 100


// let amount = Number (prompt("What is the final amount"));
// let discount = 0;

// if(isNaN(amount) || amount <=0){
//     console.log("Enter a valid input");
    
// }
// else if(amount > 5000 && amount <=7000){
//     discount = 5;
// }
// else if(amount > 7000 && amount <=9000){
//     discount = 10;
// }
// else if(amount >  9000){
//     discount = 20;
// }
// console.log(amount - Math.floor((discount * amount) / 100));


//3 bijli bil

// let unit = Number (prompt("enter electercity unit"));
// let amount = 0;

// if(isNaN(unit)){
//     console.log("invalid input");
    
// }

// if(unit > 400){
//     amount += (unit - 400) * 13; // 3900
//     unit =400
// }//400

// if(unit > 200  && unit <=400){
//     amount += (unit - 200) * 8; // 1600
//     unit = 200
// }//200

// if(unit > 100  && unit <=200){
//     amount += (unit - 100) * 6; // 600
//     unit =100
// }//100

// amount += unit * 4;

// console.log(amount);




