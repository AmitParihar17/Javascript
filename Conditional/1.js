// conditional statement

 let age = Number(prompt('Enter your age'))
    if(isNaN(age) || age>=0){
        console.log('Enter a valid input');
    }
else if(age <18){
    console.log('you cannot vote')
} else{
    console.log('you can vote and your age is',age);
    
}
