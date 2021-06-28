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


console.log("connected!");



// References To HTML
questionaireHTML = document.querySelector(".questionaire");
questionHTML = document.querySelector("#question");
answer1HTML = document.querySelector("#answer1");
answer2HTML = document.querySelector("#answer2");
answer3HTML = document.querySelector("#answer3");
answer4HTML = document.querySelector("#answer4");
startGameHTML = document.querySelector("#startGame");
time = document.querySelector("#timer");

// Used as the timer for the multiple choice game
timeLeft = 100;


// Questions asked in the multiple choice
var questions  = [
{
question: "Who is Iron Man?",
answer1: {
correct: true,
text: "Tony Stark"
        },

answer2: {
text: "Peter Parker",
correct: false
        },

answer3: {
text: "Bruce Banner",
correct: false
},

answer4: {
text: "Steve Rogers",
correct: false
}
},

{
question: "Where are 'The Avengers' located?",
answer1: {
correct: false,
text: "Texas"
        },

answer2: {
correct: false,
text: "California"
        },

answer3: {
correct: true,
text: "New York"
},

answer4: {
correct: false,
text: "Michigan"
}
},

{
question: "Who was the main villian for 'Avengers Infinity War/Endgame'",
answer1: {
correct: false,
text: "Vulture"
        },

answer2: {
correct: false,
text: "Red Skull"
        },

answer3: {
correct: false,
text: "Ultron"
},

answer4: {
correct: true,
text: "Thanos"
}
},

{
question: "Where is Thor from?",
answer1: {
correct: false,
text: "Earth"
        },

answer2: {
correct: false,
text: "Mars"
        },

answer3: {
correct: true,
text: "Asgard"
},

answer4: {
correct: false,
text: "Mercury"
}
}
]


// Highscore
var highscore = [];
var nameHighscore = [];
var scoreHighscore = [];

// Creates a button for each of the answers
function createButton()
{
  var button = document.createElement("button");
  return button;
}

function createList()
{
  var list = document.createElement("li");
  return list;
}

function createOrderedList()
{
  var ol =  document.createElement("ol");
  return ol;
}

// Creates the buttons and hides it until after start
function setup()
{
  answer1HTML.appendChild(createButton());
  answer1HTML.children[0].innerHTML = questions[0].answer1.text;
  answer1HTML.setAttribute("class", "setup");

  answer2HTML.appendChild(createButton());
  answer2HTML.children[0].innerHTML = questions[0].answer2.text;
  answer2HTML.setAttribute("class", "setup");

  answer3HTML.appendChild(createButton());
  answer3HTML.children[0].innerHTML = questions[0].answer3.text;
  answer3HTML.setAttribute("class", "setup");

  answer4HTML.appendChild(createButton());
  answer4HTML.children[0].innerHTML = questions[0].answer4.text;
  answer4HTML.setAttribute("class", "setup");
}

function intro()
{
  setup();
  questionHTML.setAttribute("class", "start");
  questionHTML.innerHTML = "Welcome To The Quiz!";

  startGameHTML.appendChild(createButton());
  startGameHTML.children[0].innerHTML = "Press me to start!"

  startGameHTML.children[0].addEventListener("click", function (a)
{
  a.stopPropagation();
  start();
}); 
}

function start(event)
{
  console.log("test");
// Resets buttons and title f or questions
  questionHTML.removeAttribute("class", "start");
  answer1HTML.removeAttribute("class", "setup");
  answer2HTML.removeAttribute("class", "setup");
  answer3HTML.removeAttribute("class", "setup");
  answer4HTML.removeAttribute("class", "setup");
  startGameHTML.setAttribute("class", "setup");

//Resets answer3HTMLs button so it can be used as an answer choice.
  answer3HTML.children[0].innerHTML = questions[0].answer3.text;

// Sets Up The Question/AnswerChoices
  questionHTML.innerHTML = questions[0].question;


// Timer for quiz
var timeInterval = setInterval(function () 
{
  timeLeft--;
  time.innerHTML = "Time: " + timeLeft;

  if(timeLeft == 0)
    {
      clearInterval(timeInterval);
      gameOver();
    }
}, 1000)

//Actual Game
console.log(questions.length);

var i = 0;
function changeQuestion(i)
{
  if(i < questions.length)
    {
      questionHTML.innerHTML = questions[i].question;
      answer1HTML.children[0].innerHTML = questions[i].answer1.text;
      answer2HTML.children[0].innerHTML = questions[i].answer2.text;
      answer3HTML.children[0].innerHTML = questions[i].answer3.text;
      answer4HTML.children[0].innerHTML = questions[i].answer4.text;
    }

  else
    {
      clearInterval(timeInterval);
      gameOver();
    }
}

// First Choice
answer1HTML.addEventListener("click", function(event)
{
  event.stopPropagation();

  if(questions[i].answer1.correct == true)
    {
      i++;
      changeQuestion(i);
    }

  else
    {
      timeLeft = timeLeft - 15;
      i++;
      changeQuestion(i);
      console.log(i);
    }
});

//Second Choice
answer2HTML.addEventListener("click", function(event)
{
  event.stopPropagation();
  if(questions[i].answer2.correct == true)
    {
      i++;
      changeQuestion(i);
    }

else
{
  timeLeft = timeLeft - 15;
  i++;
  changeQuestion(i);
  console.log(i);
}
})

// Third Choice
answer3HTML.addEventListener("click", function(event)
{
event.stopPropagation();

if(questions[i].answer3.correct == true)
{
  i++;
  changeQuestion(i);
}

else
{
  timeLeft = timeLeft - 15;
  i++;
  changeQuestion(i);
  console.log(i);
}
})

//Forth Choice
answer4HTML.addEventListener("click", function(event)
{
  event.stopPropagation();

  if(questions[i].answer4.correct == true)
  {
    i++;
    changeQuestion(i);
  }

  else
  {
    timeLeft = timeLeft - 15;
    i++;
    changeQuestion(i);
    console.log(i);
  }
})

}

function sort(highscore)
{
  highscore =  highscore.sort(function(a,b){return a.score - b.score});
  highscore = highscore.reverse();
  return highscore;
}

function gameOver()
{
  setup();

  answer1HTML.setAttribute("class", "setup");
  answer3HTML.setAttribute("class", "setup");

  questionHTML.innerHTML = "Highscores:";

  //GRABS SCORE FROM LOCAL STORAGE (IF IT EXISTS)
  if (localStorage.getItem("highscore") != null)
  {
          highscore = JSON.parse(localStorage.getItem("highscore"));
  }

  //Grabs your name to put into the high score
  var name = "";
  name = prompt("Enter your name!");

  //Object that is put into local storage
  var h =
  {
    name: name,
    score: timeLeft
  }

  //Pushes recent score to the end of the array
  highscore.push(h);

  //Calls the method to sort the array
  var sorted = sort(highscore);

  //Puts the updated highscores inside the local storage
  localStorage.setItem("highscore", JSON.stringify(highscore));

  // Creats an Ordered List for the scores
  var orderList = createOrderedList();
  questionaireHTML.appendChild(orderList);

  //Outputs the scores
  for(var i = 0; i < highscore.length; i++)
  {
    var currentPerson = highscore[i];
    var listItem = createList();
    listItem.textContent = "Name: " + currentPerson.name + " Score: " + currentPerson.score;
    orderList.appendChild(listItem);
    console.log(orderList.appendChild(listItem));
  }
}

intro();