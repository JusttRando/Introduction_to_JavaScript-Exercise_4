// TODO: Create a variable called score and give it a value between 0 and 100

let score = Math.floor(Math.random()* 101); 

let displayscore = "          " + score

// TODO: Create a variable called passingGrade and set it to 60

let passingGrade = 60

// TODO: Write an if statement to check if score is greater than or equal to passingGrade

// TODO: Add an else statement for when the score is below passingGrade

// TODO: Print "Passed" or "Failed" based on the score

// TODO: Add another condition to check if the score is perfect (100)
 
if (score >= passingGrade)
    {
        
        console.log("Passed")
    }
    else console.log("Failed")

if (score === 100)
    {
        console.log("perfect score")
    }

document.getElementById("score").innerHTML= displayscore

let standard = ""

if (score >= passingGrade)
    {
        standard = "A"
    }
    else standard = "F"

if (score === 100)
    {
        standard = "A +"
    }

document.getElementById("Grade").innerHTML= standard

let count = 0

function increment() 
{
    window.location.reload();
}

let stats = ""

if (score >= passingGrade)
    {
       stats = "passed"
    }
    else stats = "failed"

if (score === 100)
    {
        stats = "prefect score"
    }


document.getElementById("status").innerHTML= stats