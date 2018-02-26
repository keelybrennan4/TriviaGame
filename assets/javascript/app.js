$( document ).ready(function() {
    console.log( "ready!" );

//define global variables for scoring 
var questionCount = 1;
    //var currentQuestion = 0;
    //var correctAnswers = 0;
    //var incorrectAnswers = 0;
    //var complete = false;

// define trivia question and answers in multidimensional array
var trivia = [
    ["What is the answer to question 1?", "apple", "apple", "Blue", "Red", "Purple"],
    ["What is the answer to question 2?", "bird", "bird", "Cat", "Dog", "Mouse"],
    ["What is the answer to question 3?", "cat", "cat", "Bed", "Pillow", "Couch"],
    ["What is the answer to question 4?", "dog", "dog", "Car", "Van", "Taxi"],
    ["What is the answer to question 5?", "egg", "egg", "Car", "Van", "Taxi"],
    ["What is the answer to question 6?", "fish", "fish", "Car", "Van", "Taxi"],
    ["What is the answer to question 7?", "gold", "gold", "Car", "Van", "Taxi"],
    ["What is the answer to question 8?", "horse", "horse", "Car", "Van", "Taxi"],
    ["What is the answer to question 9?", "ice", "ice", "Car", "Van", "Taxi"],
    ["What is the answer to question 10?", "jack", "jack", "Car", "Van", "Taxi"],
]

// to initialize the game
//function initialize(){
    //questionCount ++;
    //console.log(questionCount);
//}


//itterate through var trivia to determine the question (index 0++ of var trivia)
for (var i=0; i < questionCount; i++) {
    $("#question").html(trivia[i][0]);
    console.log(trivia[i][0]);
        $("#option1").html(trivia[i][2]);
        $("#option2").html(trivia[i][3]);
        $("#option3").html(trivia[i][4]);
        $("#option4").html(trivia[i][5]);
    }  
        //here, we're checking to see if the userAnswer matches index 2 of the current question. 
        //index 2 is always the correct answer in the trivia array. 
        console.log(trivia[i][2]);
            if(trivia[i][2] == "blue"){ //"userAnswer";
                console.log("correct!");
                //change html, stop timer, etc. 
            }
            else{
            console.log("that's incorrect!");
            }

});

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

    var timeLeft = 30;
    var answerInterval = 15;
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == -0) {
            clearTimeout(timerId);
            outOfTime();
        } else {
            timeLeft--;
            console.log(timeLeft);
            $("#timer-display").html(timeLeft + " seconds remain to answer the question"); 
            }
    }

    function outOfTime() {
        $("#timer-display").html("Out of time!"); // change to hide timer and then change content to 
    }