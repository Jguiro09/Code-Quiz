// GIVEN I am taking a code quiz

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
//     1. HTML/CSS for buttons?
//     2. Timer is counting down 
//         a. setTimeout()?
//     3. Eventlistener("click" function)

// WHEN I answer a question
// THEN I am presented with another question
//     1. Array of questions
//     2. Array of answers (right and wrong)
//     3. Array of correct/incorrect
//     4. Nested arrays?
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

var timeLeft;

var questions = [
    {
        question: "Test question 1",
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
        text: "Test Answer 3"
        }
    },

    {
        question: "Test question 2",
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
        text: "Test Answer 3"
        }
    },

    {
        question: "Test question 3",
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
        text: "Test Answer 3"
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
        text: "Test Answer 3"
        }
    }
]

var highscores = 
{
    name: "wahtever",
    score: "*insert variable*"
}

console.log()
console.log(document.querySelector("#question").innerHTML = questions[0].question);
console.log(questions);
document.querySelector("#question").innerHTML = questions[0].question;