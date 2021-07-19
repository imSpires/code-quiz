var startBtn = document.getElementById('start-btn');
var questionContainer = document.getElementById('question-container');
var randomQuestion, currentQuestion;
var questionEl = document.getElementById('question');
var answerButtonsEl = document.getElementById('answer-buttons');

startBtn.addEventListener('click', startGame);

function startGame() {
    startBtn.classList.add('hide');
    randomQuestion = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    questionContainer.classList.remove('hide');
    nextQuestion();
}

function nextQuestion() {
    showQuestion(randomQuestion[currentQuestion]);
}

function showQuestion() {
    questionEl.innerText = question,question;
}

function selectAnswer() {

}

var questions = [
    {
        question: 'Commonly used data types do NOT include:',
        answers: [
            {text: 'strings', correct: false},
            {text: 'booleans', correct: false},
            {text: 'alerts', correct: true},
            {text: 'numbers', correct: false}
        ]
    },
    {
        question: 'The condition in an if/else statement is enclosed within',
        answers: [
            {text: 'quotes', correct: false},
            {text: 'curly brackets', correct: false},
            {text: 'parentheses', correct: true},
            {text: 'square brackets', correct: false}
        ]
    },
    {
        question: 'Arrays in JavaScript include:',
        answers: [
            {text: 'numbers and strings', correct: true},
            {text: 'booleans', correct: false},
            {text: 'other arrays', correct: false},
            {text: 'all of the above', correct: false}
        ]
    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables',
        answers: [
            {text: 'parentheses', correct: false},
            {text: 'curly brackets', correct: false},
            {text: 'commas', correct: false},
            {text: 'quotation marks', correct: true}
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is ',
        answers: [
            {text: 'console.log', correct: true},
            {text: 'terminal/bash', correct: false},
            {text: 'for loops', correct: false},
            {text: 'JavaScript', correct: false}
        ]
    }

]