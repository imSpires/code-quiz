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
