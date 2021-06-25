// GIVEN I am taking a code quiz

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
//     1. HTML/CSS for buttons?
//     2. Timer is counting down 
//         a. setTimeout()?
//     3. Eventlistener("click" function)

// WHEN I answer a question
// THEN I am presented with another question
//     5. If questions finsihed: clearInterval();
//     6. time = score;

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
//     1. A function that subtracts the timer
//     2. if (event.target.getAttribute("data-answer") === true)
//     3. else {}
//     3. 

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
//     1. when timer ends, run function that brings up screen?
//     2. Ask for initials and prompt (form or prompt)
//     3. Put in localstorage
//         a. Get Set

// WHEN the game is over
// THEN I can save my initials and my score
//     1. Set / Get highscores with local storage
//     2. Object for info?

// Variables:

//     GLOBAL:
//         1. var timeLeft
//         2. obj template for user?
//         3. Array of Ojects
//         4. 
//

console.log("connected!");

// Used as the timer for the multiple choice game
var timeLeft;


// References To HTML
questionHTML = document.querySelector("#question");
answer1HTML = document.querySelector("#answer1");
answer2HTML = document.querySelector("#answer2");
answer3HTML = document.querySelector("#answer3");
answer4HTML = document.querySelector("#answer4");


// Questions asked in the multiple choice
var questions  = [
{
        question: "Test question 1",
        answer1: {
        correct: true,
        text: "Test Answer 1"
                },

        answer2: {
        correct: false,
        text: "Test Answer 2"
                },

        answer3: {
        correct: false,
        text: "Test Answer 3"
        },

        answer4: {
        correct: false,
        text: "Test Answer 4"
        }
},

{
        question: "Test question 2",
        answer1: {
        correct: true,
        text: "Test Answer 1"
                },

        answer2: {
        correct: false,
        text: "Test Answer 2"
                },

        answer3: {
        correct: false,
        text: "Test Answer 3"
        },

        answer4: {
        correct: false,
        text: "Test Answer 4"
        }
},

{
        question: "Test question 3",
        answer1: {
        correct: true,
        text: "Test Answer 1"
                },

        answer2: {
        correct: false,
        text: "Test Answer 2"
                },

        answer3: {
        correct: false,
        text: "Test Answer 3"
        },

        answer4: {
        correct: false,
        text: "Test Answer 4"
        }
},

{
        question: "Test question 4",
        answer1: {
        correct: true,
        text: "Test Answer"
                },

        answer2: {
        correct: false,
        text: "Test Answer 2"
                },

        answer3: {
        correct: false,
        text: "Test Answer 3"
        },

        answer4: {
        correct: false,
        text: "Test Answer 4"
        }
}
]


// A place to enter high scores to be sent to the localstorage
var highscores = 
{
name: "wahtever",
score: "*insert variable*"
}


// Creates a button for each of the answers
function createButton()
{
        var button = document.createElement("button");
        return button;
}

function intro()
{
        questionHTML.setAttribute("class", "start");
        questionHTML.innerHTML = "Welcome To The Quiz!";

        answer3HTML.appendChild(createButton());
        answer3HTML.children[0].innerHTML = "Press start to begin!";

        answer3HTML.children[0].addEventListener("click", start)
        
}

function start()
{
        // Resets "title" for questions
        questionHTML.removeAttribute("class", "start");

        //Resets answer3HTMLs button so it can be used as an answer choice.
        answer3HTML.children[0].removeEventListener("click", start);

        

        // Sets Up The Question/AnswerChoices
        questionHTML.innerHTML = questions[0].question;

        answer1HTML.appendChild(createButton());
        answer1HTML.children[0].innerHTML = questions[0].answer1.text;

        answer2HTML.appendChild(createButton());
        answer2HTML.children[0].innerHTML = questions[0].answer2.text;

        answer3HTML.children[0].innerHTML = questions[0].answer3.text;

        answer4HTML.appendChild(createButton());
        answer4HTML.children[0].innerHTML = questions[0].answer4.text;

        console.log("success!");
}

intro();