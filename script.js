const questions = document.getElementById('question');
const options = document.getElementsByClassName('option-text');


var currentquestion = {};
var questionCounter = 0;
var score = 0;
var availableQuestion = []

var timer = 60;

var question = [

    {
        questions: "What is 5 * 12?",
        options:"17",
        options:"7",
        options:"60",
        options:"48",

        answer:"60"
    },

    {
        questions: "What is the value of gravity?",
        options:"9.81m/s2",
        options:"-9.81m/s2",
        options:"32m/s2",
        options:"-10m/s2",

        answer:"9.81m/s2"
    },

    {
        questions:"what is the gravity of the moon",
        options:"1.62 m/s²",
        options:"3.71 m/s²",
        options:"10.44 m/s²",
        options:"0.003 m/s²",

        answer:"1.62 m/s²"
    },

    {
        questions:"What is the circumference of earth",
        options:"24,855 mi",
        options:"13,263 mi",
        options:"272,946 mi",
        options:"10,052 mi",

        answer:"24,855 mi"
    },

    {
        questions:"What country made the first rocket",
        options:"China",
        options:"Russia",
        options:"United States",
        options:"United Kingdom",

        answer:"China"
    }

]

function startQuiz (){
    questionCounter= 0;
    score = 0;
    availableQuestion = [question];
    console.log (availableQuestion);
    getquestion();
}

function getquestion(){
    questionCounter++;
    const questionI = Math.floor(Math.random() * availableQuestion.length);
    currentquestion = availableQuestion[questionI];
    question.innerText = currentquestion.question;
}

question.forEach(option => {
    const choice = option.dataset["choice"];
    choice.innerText = currentquestion["question" + choice];
});




startQuiz()

//if wrong take time off

//test results

//save score to local storage

// add start button