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

//3rd   INR

// let amount = 5234;

// if(amount>=500){
//     console.log("500 notes :",Math.floor(amount / 500));
//     amount =  amount % 500
// }
// if(amount>=200){
//     console.log("200 notes :", Math.floor(amount / 200));
//     amount =  amount % 200
// }
// if(amount>=100){
//     console.log("100 notes :", Math.floor(amount / 100));
//     amount =  amount % 100
// }
// if(amount>=50){
//     console.log("50 notes :", Math.floor(amount / 50));
//     amount =  amount % 50
// }
// if(amount>=20){
//     console.log("20 notes :", Math.floor(amount / 20));
//     amount =  amount % 20
// }
// if(amount>=10){
//     console.log("10 notes :", Math.floor(amount / 10));
//     amount =  amount % 10
// }
// if(amount>=5){
//     console.log("5 notes :", Math.floor(amount / 5));
//     amount =  amount % 5
// }
// if(amount>=2){
//     console.log("2 notes :", Math.floor(amount / 2));
//     amount =  amount % 2
// }
// if(amount ===1){
//     console.log("1 notes :",amount);
// }

//ternary operator

// condition ? true : false

// 12>5 ? console.log('yes') : console.log('no');
//  console.log(112 < 111 ? true : false);

// nested ternary

// let num =10;
// console.log(num>0 ? "positive" : num<0 ? "negative" : "zero");

//SWITCH CASE
// day or case ki value match hogi to chlega nhi to default ;
// break use ni krenge to fallthrough condition hogi

// let day = 2;

// switch (day){
//     case 1 : console.log("monday");
//     break;
//     case 2 : console.log("tuesday");
//     break;
//      default : console.log("invalid");
// }

// let check = 6;

// switch (check){
//     case 1 :
//     case 2 :
//     case 3 : console.log("yooo");
//     break;

//     case 4 :
//     case 4 :
//     case 6 : console.log("hooo");
//     break;

//      default : console.log("invalid");
// }

// switch (true) {
//   case 19 > 6:
//     console.log("helllo");
//     break;
//   case 10 > 6:
//     console.log("byy");
//     break;
//   default:
//     console.log("hehee");
// }


let num = 0.1 + 0.2;     //0.300000

switch(num){
    case 0.3 : console.log('hee');
    break;
    case 0.4: console.log('heeheey');
    break;
    default : console.log('heelo');
    
}