// array of quiz questions/answer choices
var questions = [
    {
        question: 'Commonly used data types do NOT include:',
        answers: ['strings', 'booleans', 'alerts', 'numbers'],
        correct: 'alerts'
    },
    {
        question: 'The condition in an if/else statement is enclosed within',
        answers: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        correct: 'parentheses'
    },
    {
        question: 'Arrays in JavaScript include:',
        answers: ['numbers and strings', 'booleans', 'other arrays', 'all of the above'],
        correct: 'all of the above'
    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables',
        answers: ['commas', 'curly brackets', 'parentheses', 'quotation marks'],
        correct: 'quotation marks'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is ',
        answers: ['console.log', 'terminal/bash', 'for loops', 'JavaScript'],
        correct: 'console.log'
    },
]

// variables needed for the function
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

//function to start the timer
function start() {

    // Start timer with 100 seconds
    timeLeft = 100;
    document.getElementById("timeLeft").innerHTML = timeLeft;
    
    // Make timer go down by 1 every second
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        // If timer = 0, end the game
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame(); 
        }
    }, 1000);
    
    next();
    }
    
    //stop the timer to end the game 
    function endGame() {
    clearInterval(timer);
    
    var quizContent = `
    <h2>Game over!</h2>
    <h3>You got a ` + score +  ` /100!</h3>
    <h3>That means you got ` + score / 20 +  ` questions correct!</h3>
    <input type="text" id="name" placeholder="initals"> 
    <button onclick="setScore()">Set score!</button>`;
    
    document.getElementById("quiz-body").innerHTML = quizContent;
    }
    
    //Function to store score in local storage
    function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName",  document.getElementById('name').value);
    getScore();
    }
    
    // Function to retrieve item from local storage
    function getScore() {
    var quizContent = `
    <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("highscore") + `</h1><br> 
    
    <button onclick="clearScore()">Clear score!</button><button onclick="resetQuiz()">Play Again!</button>
    
    `;
    
    document.getElementById("quiz-body").innerHTML = quizContent;
    }
    
    // Function to clear the score
    function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName",  "");
    
    resetQuiz();
    }
    
    // Reset the quiz
    function resetQuiz() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;
    
    document.getElementById("timeLeft").innerHTML = timeLeft;
    
    var quizContent = `
    <h1>Code Quiz!</h1>
    <h3> How well do you know JavaScript?! Click start to play, keep in mind you will be penalized for wrong answers!</h3>
    <button onclick="start()">Start!</button>`;
    
    document.getElementById("quiz-body").innerHTML = quizContent;
    }
    
    //deduct 15seconds from the timer if user chooses an incorrect answer
    function incorrect() {
    timeLeft -= 15; 
    next();
    }
    
    //increases the score by 20points if the user chooses the correct answer
    function correct() {
    score += 20;
    next();
    }
    
    //loops through the questions 
    function next() {
    currentQuestion++;
    
    if (currentQuestion > questions.length - 1) {
        endGame();
        return;
    }
    
    var quizContent = "<h2>" + questions[currentQuestion].question + "</h2>"
    
    for (var buttonQ = 0; buttonQ < questions[currentQuestion].answers.length; buttonQ++) {
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
        buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].answers[buttonQ]);
        if (questions[currentQuestion].answers[buttonQ] == questions[currentQuestion].correct
            ) {
            buttonCode = buttonCode.replace("[ANS]", "correct()");
        } else {
            buttonCode = buttonCode.replace("[ANS]", "incorrect()");
        }
        quizContent += buttonCode
    }
    
    
    document.getElementById("quiz-body").innerHTML = quizContent;
    }