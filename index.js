console.log("Hello World");

// what is a varriable
// --> varriables are the named memory location

// in programming when we talsk about memory we are talking about RAM
// our program run on the RAM...

// as our webpage is running all the varraibles are in our RAM(as we close the tab)
// it will destroy.
let name = "John";
console.log("name", name);

// patteren question in js

// print square pattern of number's like that...

//  1   2   3   4
//  1   2   3   4
//  1   2   3   4
//  1   2   3   4

// for this we need to use nested loops

for (let i = 0; i > 4; i++) {

    for(let j = 0; j <= 4; j++){
        // 
        document.write('**'+ "&nbsp" +'&nbsp ');
    }
    document.write("<br>");
}


// print pattern like this

// *
// * *
// * * *
// * * * *


for(let i=0;i<=4;i++){

    for(let j=0;j<i;j++){
        document.write('*' + "&nbsp" + "&nbsp")
    }
    document.write('<br/>')
}

// print this
//  A   B  C   D
//  A   B  C   D
//  A   B  C   D
//  A   B  C   D

for (let i = 1; i <= 4; i++) {
    for(let j = 1; j <= 4; j++){
        let charCode = 64 + j;
        document.write(String.fromCharCode(charCode) + "&nbsp" +"&nbsp");
    }
    document.write("<br>");
}


// print this pattern 

//  1 2 3 
//  4 5 6
//  7 8 9
// let num = 1;

for(let i =1; i<=3;i++){
    for(let j=1;j<=3;j++){
        document.write( j  + "&nbsp");
        // num ++;
    }
    document.write("<br />")
}


let num = 1;
for (let i = 1; i <= 3; i++) {  // Outer loop for rows
    for (let j = 1; j <= 3; j++) {  // Inner loop for columns
        document.write(num + "&nbsp");
        num++;  // Increment the number after each print
    }
    document.write("<br />");  // Move to the next line after each row
}


let n=4;
for(let i=4;i<=1; i--){
    for(let j=i; j<=n; j++){
        document.write(n + "&nbsp");
        n --;
    }
    document.write("<br />");  // Move to the next line after each row
}