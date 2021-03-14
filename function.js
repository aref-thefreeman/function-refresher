console.log("Greet 5 times!")

//function declaration
function greet(){
    for(let i = 0; i<5; i++){
        console.log("Hello!")

    }
}
greet();


//arrow function
 const greetFiveTimesExtra = (randomName) =>"hello " + randomName;
 

console.log(greetFiveTimesExtra('Shakib'))


//function expression

const greetFiveTimes = function(){
    for(let i = 6; i<=10; i ++){
        console.log("Hello! from Exp!")
    }
}

greetFiveTimes();



//arrow function
const areaCalculator = radius => 3.14 * radius ** 2;

console.log(areaCalculator(25));


//Arguments and Parameters
const speak = function(name){
    console.log(`${name} Good Day`)

}

speak("Aref is a");



//For each

const people = ["Aref", "Tamim", "Shopi", "Twinkle"]

people.forEach((person, index)=>  {
    console.log(`${index+1} ${person}`);
})