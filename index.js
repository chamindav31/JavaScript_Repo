//this is my first javascrip statement to test the console output
console.log("first test message to console");
console.log("hello world");
/* This is my first javascript statement to test the alerts 
and multiline comments
*/
//window.alert("It smells good");

//declaring a vaiable
let age;
let firstName = "Chaminda"
// assign a value to "age" variable
age=21;
age = age + 1;
/*Arithmetic operatoin "age = age + 1" can also be written as follows. This can be done 
for all operators (+,-,*,/) except modulous operator(%) */
age += 1;
//declare and assign in the same step
let hight = 180;
//print the value of "age" on to the console
console.log("Hello ",firstName, "your age is ",age,"years and hight is ",hight," cm");

//Getting user input and assign it to a variable using window prompt
let lastName = window.prompt("What is your name?");

//change the inner HTML paragraph text using paragraph IDs
document.getElementById("P2").innerHTML = "Hi " + firstName + " " + lastName;
let myAge;
//Getting user inpur from an HTML text box
document.getElementById("btnMyAge").onclick = function(){

    //get input age and assign it to the variable
    myAge = document.getElementById("txtMyAge").value;
    //check if user enters any value
    myAge = Boolean(myAge);
    console.log(myAge);

    //convert string variable into number variable
    myAge = Number(myAge);
    //increase age by one
    myAge +=1;
    //display the age obtained from the user
    document.getElementById("P3").innerHTML = myAge;
    //change the text of the label
    document.getElementById("lblLable").innerHTML = "Thank You";


}



