$( document ).ready(function() {
    console.log( "ready!" );

//define global variables for scoring 
    //var currentQuestion = 0;
    //var correctAnswers = 0;
    //var incorrectAnswers = 0;
    //var complete = false;

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
        //if time = 0 before an option button is clicked, user gets the questin wrong (wrongAnswer)
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
