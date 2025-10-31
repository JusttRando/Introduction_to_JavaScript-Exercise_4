// TODO: Create a variable called score and give it a value between 0 and 100

let score = Math.floor(Math.random()* 101); 



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


// displaying score with space inbetween    

let displayscore = "          " + score

document.getElementById("score").innerHTML= displayscore

// wanted to give the site a letter grading system 

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

// this determines the which word is displayed 

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

//restarts webpage when button is clicked

function increment() 
{
    window.location.reload();
}