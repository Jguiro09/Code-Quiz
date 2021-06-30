// HTML RECALLS
questionaireHTML = document.querySelector(".questionaire");
listHTML = document.querySelector("#list");
viewHTML = document.querySelector("#highscore");
questionHTML = document.querySelector("#question");
answer1HTML = document.querySelector("#answer1");
answer2HTML = document.querySelector("#answer2");
answer3HTML = document.querySelector("#answer3");
answer4HTML = document.querySelector("#answer4");
startGameHTML = document.querySelector("#startGame");
time = document.querySelector("#timer");
titleHTML = document.querySelector(".titlePage");
scoreHTML = document.querySelector("#score");
hListHTML = document.querySelector("#highscoreList");
nameHTML = document.querySelector("#nameInput");
submitHTML = document.querySelector("#submit");

// Javascript Variables

// Time Left For Game
timeLeft = 100;

// Keeps track of high score
var highscore = [];

// Questions to be asked
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
}]

// Creates List To Be Outputted
function createList()
{
    var list = document.createElement("li");
    return list;
}

function hideTitle()
{
    titleHTML.setAttribute("class", "setup")
}

function showGame()
{
    questionaireHTML.removeAttribute("class", "setup");
}

function showHighscore()
{
    scoreHTML.setAttribute("class", "setup");
}

function setup()
{
    answer1HTML.innerHTML = questions[0].answer1.text;
    answer2HTML.innerHTML = questions[0].answer2.text;
    answer3HTML.innerHTML = questions[0].answer3.text;
    answer4HTML.innerHTML = questions[0].answer4.text;
    questionHTML.innerHTML = questions[0].question;
}

function intro()
{
    setup();
    questionaireHTML.setAttribute("class", "setup");
    scoreHTML.setAttribute("class", "setup");
    titleHTML.removeAttribute("class", "setup");

    viewHTML.addEventListener("click", function(a)
    {
        a.stopPropagation();
        getHighscore();
    })

    startGameHTML.addEventListener("click", function(a)
    {
        a.stopPropagation();
        start();
    })
}

function start()
{
    questionaireHTML.removeAttribute("class", "setup");
    titleHTML.setAttribute("class", "setup");

    var timeInterval = setInterval(function ()
    {
        timeLeft--;
        time.innerHTML = "Time: " + timeLeft;

        if(timeLeft == 0)
        {
            clearInterval(timeInterval);
            gameOver();
        }
    },1000);

    var i = 0;
    function changeQuestion(i)
    {
        if(i < questions.length)
        {
            questionHTML.innerHTML = questions[i].question;
            answer1HTML.innerHTML = questions[i].answer1.text;
            answer2HTML.innerHTML = questions[i].answer2.text;
            answer3HTML.innerHTML = questions[i].answer3.text;
            answer4HTML.innerHTML = questions[i].answer4.text;
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
        }
    });

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
        }
    });

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
        }
    });
}

function getLocalStorage(highscore)
{
    if (localStorage.getItem("highscore") === null)
    {
        return highscore;
    }

    else
    {
        return JSON.parse(localStorage.getItem("highscore"));
    }
}

function sort(highscore)
{
    highscore =  highscore.sort(function(a,b){return a.score - b.score});
    highscore = highscore.reverse();
    return highscore;
}

function outputHighscore(highscore, hListHTML)
{
    for(var i = 0; i < highscore.length; i++)
    {
        var currentPerson = highscore[i];
        var listItem = createList();
        listItem.textContent = "Name: " + currentPerson.name + " Score: " + currentPerson.score;
        hListHTML.appendChild(listItem);
    }
}

function getHighscore()
{
    questionaireHTML.setAttribute("class", "setup");
    titleHTML.setAttribute("class", "setup");
    scoreHTML.removeAttribute("class", "setup");
    nameHTML.setAttribute("class", "setup");
    submitHTML.setAttribute("class", "setup");
    highscore = getLocalStorage(highscore);
    outputHighscore(highscore, hListHTML);

    viewHTML.addEventListener("click", function()
    {
        hListHTML.innerHTML = "";
        intro();
    })
}

function gameOver()
{
    questionaireHTML.setAttribute("class", "setup");
    titleHTML.setAttribute("class", "setup");
    scoreHTML.removeAttribute("class", "setup");
    viewHTML.setAttribute("class", "setup");
    nameHTML.removeAttribute("class", "setup");
    submitHTML.removeAttribute("class", "setup");

    highscore = getLocalStorage(highscore);
    time = timeLeft;
    
    submitHTML.addEventListener("click", function()
    {
        nameHTML.setAttribute("class", "setup");
        submitHTML.setAttribute("class", "setup");
        var name = nameHTML.value
        var person =
        {
        name: name,
        score: timeLeft
        }

        highscore.push(person);
        sort(highscore);
        outputHighscore(highscore, hListHTML);
        localStorage.setItem("highscore", JSON.stringify(highscore));
    })
    
}
intro();