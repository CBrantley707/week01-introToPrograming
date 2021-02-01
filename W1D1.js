// Challenge #1

// Telling me how to do something
function myBirthYearFunc(){
    console.log("I was born in " + 1980);
}

// // Please do this
myBirthYearFunc()

// I need more information to make this work - that is what needs to end up in the () when we call it later
function myBirthYearFunc(birthYearInput){
    console.log("I was born in " + birthYearInput);
}
myBirthYearFunc("A long time ago")


function add(random1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + random1);
    console.log("num2 is: " + num2);
    var sum = random1 + num2;
    console.log("This is where things get added", sum);
}
add(7,22);