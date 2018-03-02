//define global variables for scoring 
var questionCount = 1;
var correctAnswers = 0;
var incorrectAnswers = 0;
// var currentQuestion = 0;
//var complete = false;
var trivia = [];
var guess;
var timerId;

// define trivia question and answers in multidimensional array
trivia = [
    {
    question: "What is the answer to question 1?",
    options: ["Apple", "Blue", "Red", "Purple"],
    correct: 0   
    }, {
    question: "What is the answer to question 2?",
    options: ["Bird", "Cat", "Dog", "Mouse"],
    correct: 1   
    }, {
    question: "What is the answer to question 3?",
    options: ["Gold", "Car", "Van", "Taxi"],
    correct: 2     
    }
];

gameLoop();

//before the game starts we want to hide all content except the instrictions and start button
$("#game").hide();
$("#post-game").hide();
$("#answer-game").hide();
$("#question-game").hide();
$("#question-count").hide();

// function initializeGame(){
$("#start-button").click(function(){
    $("#pre-game").hide();
    $("#game").show();
    $("#question-game").show();
    $("#question-count").show();
    $("#question-count").html(questionCount); 
    run();
    console.log("The Question count is " + questionCount);
})

//itterate through var trivia to determine the question (index 0++ of var trivia)
function gameLoop (){
    for (var i=0; i < trivia.length; i++) {
    $("#question").html(trivia[0].question);
        $("#option1").html(trivia[i].options[0]);
        $("#option2").html(trivia[i].options[1]);
        $("#option3").html(trivia[i].options[2]);
        $("#option4").html(trivia[i].options[3]);
    } 

$(".options").on("click", function () {
    guess = trivia[0].correct[0];
       
    if (guess === $(this).value) {
        console.log("That's correct");
        $("#question-game").hide();
        $("#answer-game").show();
        correctAnswers++;
        $("#correct").text("Correct Answers: " + correctAnswers);
        stop();
        i++
        questionCount++
        //make answers not selectable and correct answer green
        setTimeout(gameLoop, 3000);   
    } else {
        console.log("That's wrong");
        $("#question-game").hide();
        $("#answer-game").show();
        incorrectAnswers++;
        $("#incorrect").text("Incorrect Answers: " + incorrectAnswers);
        stop(); 
        i++
        questionCount++
        //make answers not selectable and red
        setTimeout(gameLoop, 3000); 
    }
    });
};

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


//----- call next question and loop through again! ---- 

  





// to initialize the game
//function initialize(){
    //questionCount ++;
    //console.log(questionCount);
//}
//$("h1").show();


    //for (var i=0; i < questionCount; i++) {
    //if (trivia.length[i] === questionCount) {
    //break;

// -------  html ids ----------
// "#timer-display"
// "#pre-game"
// "#post-game"
// "#game"
// "answer"
// $("#question").html(trivia[1][1]);
// $("#option1").html(trivia[2][2]);
// $("#option2").html(trivia[3][3]);
// $("#option3").html(trivia[0][3]);
// $("#option4").html(trivia[0][4]);
// $("#results").html(trivia[0][1]);

//---------- functions -------------- 
// function for countdown timer during guess 
    // function questionCountown 
// function for hidden countdown timer between questions/ while answers are displayed so page automatically goes to new question after 
    // function answerCountdown 

// 1. Display instructions and use an event listener when the 'start quiz' button is clicked. 
    // $("#pre-game").on("click", function() {

// 2. clicking start button initializes the game: 
    // change? content in "pre-game" div to "question" div (so the instructions and "start game" button are replaced with a question, 4 multi-choice answers and the timer) 
        //function initializeCounter() {
            //var currentQuestion = 0;
            //var correctAnswers = 0;
            // var incorrectAnswers = 0;
            //var complete = false;
    // call function below 

//3. function askQuestion: 
    //show countdown timer and begin counting down from 30 seconds 
    //increment the question count by 1
        //if time = 0 before an option button is clicked, user gets the questin wrong (wrongAnswer)
           // if(timeRemaining > 0){
           //}

    //four options will be displayed -- when hovering over each option, the option is selected. 

// 4. function evaluateAnswer: 
// When option is clicked run function to check if the answer is correct. 
    // $(".option").on("click", function() {
        // countdown timer begins at 15 seconds and will move on to the next question automatically 
        // evaluate if userGuess = correctAnswer: 
        // if yes (correct)
            // display "Yay! That's correct!" message 
            // increment correctAnswers variable by one 
        // else (incorrect)
            // display "Wrong!" message
            // display the correct answer by highlighting in green 
            // increment incorrectAnswers variable by one 
        // else (no guess)
            // display "time's up!" message
            // display the correct answer by highlighting in green
            // increment incorrectAnswers variable by one 
//5. Repeat #3 and #4 for all trivia questions (use loop to itterate through question/answer pairs?) 

//6. After we've itterated through all questions, show content "endGame"
    // Show content: 
        //var correctAnswers 
        //var incorrectAnswers
        //hide countdown timer 
    // "Try again?" button. on click = initializeGame 

    
//--------------------TIMER----------------------------------------//
// need to fix 30 second countdown timer so that it starts when the "#start-button" is clicked.
// $("#start-button").on("click, countdown());

    //var timeLeft = 30;
    //var answerInterval = 15;
    //var timerId = setInterval(countdown, 1000);

    //function countdown() {
        //if (timeLeft == -0) {
            //clearTimeout(timerId);
            //outOfTime();
       // } else {
          //  timeLeft--;
          //  console.log(timeLeft);
          //  $("#timer-display").html(timeLeft + " seconds remain to answer the question"); 
          //  }
   // }

   // function outOfTime() {
       // $("#timer-display").html("Out of time!"); // change to hide timer and then change content to 
   // }

   //["What is the answer to question 1?", "apple", "apple", "Blue", "Red", "Purple"],
    //["What is the answer to question 2?", "bird", "bird", "Cat", "Dog", "Mouse"],
   // ["What is the answer to question 3?", "cat", "cat", "Bed", "Pillow", "Couch"],
   // ["What is the answer to question 4?", "dog", "dog", "Car", "Van", "Taxi"],
   // ["What is the answer to question 5?", "egg", "egg", "Car", "Van", "Taxi"],
    //["What is the answer to question 6?", "fish", "fish", "Car", "Van", "Taxi"],
   // ["What is the answer to question 7?", "gold", "gold", "Car", "Van", "Taxi"],
   // ["What is the answer to question 8?", "horse", "horse", "Car", "Van", "Taxi"],
   // ["What is the answer to question 9?", "ice", "ice", "Car", "Van", "Taxi"],
   // ["What is the answer to question 10?", "jack", "jack", "Car", "Van", "Taxi"],]

   //for (var i=0; i < questionCount; i++) {
   // $("#question").html(trivia[i][0]);
   // console.log(trivia[i][0]);
   //     $("#option1").html(trivia[i][2]);
   //     $("#option2").html(trivia[i][3]);
   //     $("#option3").html(trivia[i][4]);
   //     $("#option4").html(trivia[i][5]);
   // } 