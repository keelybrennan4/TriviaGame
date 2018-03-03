//define global variables for scoring 
var questionCount = 1; // doesnt have
var correctAnswers = 0; // same
var incorrectAnswers = 0; //wrongAnswers
var unanswered = 0; //same
var guess = 0; //userGuess

// var currentQuestion = 0;
//var complete = false;
var timerId;

// define each trivia question as an object with properties to define the question, answer options, and the position of the correct answer 
var questionOne = {
    question: "How many pounds of cheese does the average American eat per year?",
    options: ["9 pounds", "20 pounds", "28 pounds", "35 pounds"],
    correct: 3,
    image: " ",
}
var questionTwo = {
    question: "For a quality cheese, which of these varieties generally has the shortest aging time?",
    options: ["Sharp Cheddar", "Gorgonzola", "Gouda", "Parmigiano-Reggiano", ],
    correct: 1,
    image: " ",
}
var questionThree = {
    question: "Bandel, Paneer, and Chhena are cheeses produced in what country?",
    options: ["New Zealand", "Italy", "Russia", "India"],
    correct: 3,
    image: " ",
}
var questionFour = {
    question: "American Pepper Jack Cheese is a variety of which type of cheese?",
    options: ["Lumber Jack", "Swiss", "Monterey Jack", "Cheddar"],
    correct: 2,
    image: " ",
}
var questionFive = {
    question: "On average, how much does a wheel of Parmesan weigh?",
    options: ["18 pounds", "44 pounds", "88 pounds", "132 pounds"],
    correct: 2,
    image: " ",
}
var questionSix = {
    question: "Fondue is a national dish of which European country?",
    options: ["Belgium", "Norway", "Hungary", "Switzerland"],
    correct: 3,
    image: " ",
}
var questionSeven = {
    question: "What has Wisconsin recently started doing with its excess cheese?",
    options: ["Using it to de-ice roads", "Using it as fertilizer", "Using it as a cow feed supplement", "Snacking"],
    correct: 0,
    image: " ",
}
var questionEight = {
    question: "Which cheesy slogan was never uttered by Cheetos mascot Chester Cheetah?",
    options: ["Dangerously cheesy!", "The cheese that goes crunch!", "It ain't easy bein' cheesy", "Say cheese!"],
    correct: 3,
    image: " ",
}
var questionNine = {
    question: "What are lovers of cheese called?",
    options: ["Turophiles", "  ", "  ", "  "],
    correct: "Turophiles", 
    image: " ",
}

var results = ["Correct", "Incorrect", "Time's up!"];
var currentQuestion = ["questionOne", "questionTwo", "questionThree", "questionFour", "questionFive", "questionSix", "questionSeven", "questionEight", "questionNine"];

//before the game starts we want to hide all content except the start button
$("#game").hide();
$("#post-game").hide();
$("#answer-game").hide();
$("#question-game").hide();
$("#question-count").hide();

// when the start button is clicked, the timer will begin running and 
$("#start-button").click(function(){
    $("#pre-game").hide();
    $("#game").show();
    $("#question-game").show();  
    $("#question-count").show();
  //  $("#question-count").html(questionCount); 
  //  console.log("The Question count is " + questionCount);
    run();
})

gameLoop();

var i;
//function showQuestion(currentQuestion) {
    //for (var i=0; i < currentQuestion; i++){
    if (currentQuestion.length >= (i + 1)){
    $("#question").html(currentQuestion[0]);
    $("#option1").html(currentQuestion.options[0]);
    $("#option2").html(currentQuestion.options[1]);
    $("#option3").html(currentQuestion.options[2]);
    $("#option4").html(currentQuestion.options[3]);
    }

//};

//var i;

    // whenever the user clicks an option button, the 30 second countdown timer will stop
    //var intervalId;
    $(".options").on("click", stop);
    $(".options").on("click", function(){
        guess = currentQuestion[0];
        //console.log(val());

    //check to see if the guess matches the correct answer of the current Question
    if (guess === currentQuestion[i]) {
       //make answers not selectable and correct answer green
        console.log("That's correct");
        $("#question-game").hide();
        $("#answer-game").show();
        correctAnswers++;
        $("#correct").text("Correct Answers: " + correctAnswers);
        stop();
        i++
        questionCount++
        setTimeout(gameLoop, 3000);   
    } 
    else {
        console.log("That's wrong");
        //make answers not selectable and red
        $("#question-game").hide();
        $("#answer-game").show();
        incorrectAnswers++;
        $("#incorrect").text("Incorrect Answers: " + incorrectAnswers);
        stop(); 
        i++
        questionCount++
        setTimeout(gameLoop, 3000); 
    }
});

function gameLoop (){
    $("#game").show();
    $("#results").hide();
    $("#question").html(currentQuestion[i]);
    $("#option1").html(currentQuestion.options[0]);
    $("#option2").html(currentQuestion.options[1]);
    $("#option3").html(currentQuestion.options[2]);
    $("#option4").html(currentQuestion.options[3]);  
    run();
}
gameLoop();

function run(){
    timeLeft = 30;
    clearInterval(timerId)
    timerId = setInterval(countdown, 1000);
}

function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
        outOfTime();
    } else {
        timeLeft--;
        console.log(timeLeft);
        $("#timer-display").html(timeLeft + " seconds remain to answer the question"); 
        }
}

function outOfTime() {
    $("#timer-display").append("" + " Out of time!");
    $("#answer-game").show();
    incorrectAnswers++;
    questionCount++;
    //remove button selector ability? 
    //change to hide timer and then change content to
}

function stop() {
    timeLeft = 10;
    clearInterval(timerId);
    timerId = setInterval(countdown, 1000);
    console.log(timeLeft);
}
