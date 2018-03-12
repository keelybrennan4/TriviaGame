$(document).on("click", "button", function() {

// ---------GLOBAL VARIABLES --------// 
var correctAnswer = 0;
var incorrectAnswer = 0;
var noAnswer = 0;
var questionCount = 0;
var timeLeft = 20;
var timerId;

// var trivia will store an array of objects. each property contains the value to a single trivia question, answer choice, or the correctAnswer answer. 
var trivia = [
    {
    question: "How many pounds of cheese does the average American eat per year?",
    choice: ["9 pounds", "20 pounds", "28 pounds", "35 pounds"],
    correctAnswer: 3,
    gif: "../assets/images/image-1.gif",
}, 
{
    question: "Which of these varieties generally has the shortest aging time?",
    choice: ["Sharp Cheddar", "Gorgonzola", "Gouda", "Parmigiano-Reggiano"],
    correctAnswer: 1,
    gif: "../assets/images/image-2.gif",
}, 
{
    question: "Bandel, Paneer, and Chhena are cheeses produced in what country?",
    choice: ["New Zealand", "Italy", "Russia", "India"],
    correctAnswer: 3,
    gif: "../assets/images/image-3.gif",
}, 
{
    question: "American Pepper Jack Cheese is a variety of which type of cheese?",
    choice: ["Lumber Jack", "Swiss", "Monterey Jack", "Cheddar"],
    correctAnswer: 2,
    gif: "../assets/images/image-4.gif",
}, 
{
    question: "On average, how many pounds does a wheel of Parmesan weigh?",
    choice: ["18 pounds", "44 pounds", "88 pounds", "132 pounds"],
    correctAnswer: 2,
    gif: "../assets/images/image-5.gif",
}, 
{
    question: "Fondue is a national dish of which European country?",
    choice: ["Belgium", "Norway", "Hungary", "Switzerland"],
    correctAnswer: 3,
    gif: "../assets/images/image-5.gif",
}, 
{
    question: "What has Wisconsin recently started doing with its excess cheese?",
    choice: ["de-ice roads", "fertilizer", "cow feed supplement", "snacking"],
    correctAnswer: 0,
    gif: "../assets/images/image-6.gif",
}, 
{
    question: "Which cheesy slogan was never uttered by Cheetos mascot Chester Cheetah?",
    choice: ["Dangerously cheesy!", "The cheese that goes crunch!", "It ain't easy bein' cheesy", "Say cheese!"],
    correctAnswer: 3,
    gif: "../assets/images/image-7.gif",
}
]

//-------------------  FUNCTIONS -------------------// 
//starts game the upon clicking the start button
$("#start-button").click, function(){
    $(".timer").show();
    countdown();
    $("#start-button").hide();
    correctAnwer = 0;
    incorrectAnswer= 0;
    noAnswer = 0;
    buildQuiz(); 
}

//--------30 SECOND COUNTDOWN TIMER---- // 
    function countdown() {
        timerId = setInterval(questionCountdown, 1000);
        function questionCountdown () {
            if (timeLeft === 0) {
                clearInterval(timerId);
                timeRunsOut();
            } 
            else {
                console.log(timeLeft);
                $(".seconds").html(timeLeft + " " + "seconds remain to answer the question");
                timeLeft--;
            }
        }
    };
     
//initial function to display the trivia answers and choices on the document
    function buildQuiz(){
        $("#start-button").hide();
        $(".question").html("<p class='question-text'>" + trivia[questionCount].question + "<p>");
            console.log("Question: " + trivia[questionCount].question);
            
        answerInput = "<p class='answerChoice'>" + trivia[questionCount].choice[0]+ "</p><p class='answerChoice'>"+ trivia[questionCount].choice[1] + "</p><p class='answerChoice'>"+ trivia[questionCount].choice[2] +"</p><p class='answerChoice'>"+ trivia[questionCount].choice[3] +"</p>";
            console.log("Answers: " + trivia[questionCount].choice[0] + trivia[questionCount].choice[1] + trivia[questionCount].choice[2] + trivia[questionCount].choice[3] );
            
        $(".answers").html(answerInput);
    }
    buildQuiz();

    //after each question is answered, this function will be called to show the next question/answer set, and restart the 30 second countdown timer
    function nextQuestion() {
    if (questionCount < 7) {
        questionCount++
            console.log(questionCount);
        buildQuiz();
        $(".results").empty();
        $(".timer").show();
        timeLeft = 20;
        countdown();
    } else {
        gameOver();
    }
}

    //function for when user selects the correct answer 
    function userCorrect(){
        correctAnswer++;
            console.log(correctGuess);
        $(".timer").hide();
        $(".question").empty();
        $(".answers").empty();
        $(".results").append("<p class='answer-message'>That's correct!</p>");
        setTimeout(nextQuestion, 1000 * 4);
        };

    //function for when user selects the correct answer 
    function userIncorrect(){
        incorrectAnswer++;
        $(".timer").hide();
        $(".question").empty();
        $(".answers").empty();
        $(".results").append("<p class='answer-message'>That's incorrect! The correct answer is" + " " + trivia[questionCount].choice[trivia[questionCount].correctAnswer] + "." + "</p>" + "<src=" + trivia[questionCount].gif + "</>");
        setTimeout(nextQuestion, 1000 *4);
    };

    //When user runs out of time
    function timeRunsOut() {
        noAnswer++;
        console.log(noAnswer);
        $(".timer").hide();
        $(".question").empty();
        $(".answers").empty();
        $(".results").html("<p class='answer-message'>Too slow! The correct answer is" + " " + trivia[questionCount].choice[trivia[questionCount].correctAnswer] + "." + "</p>" + "<src=" + trivia[questionCount].gif + "</>");
        setTimeout(nextQuestion, 1000 *4);
    };

    function gameReset (){
        $(".timer").show();
        $(".question").empty();
        $(".answers").empty();
        $(".results").empty();
        questionCount = 0;
        correctAnswer = 0; 
        incorrectAnswer = 0;
        noAnswer = 0;
        buildQuiz();
        countdown();
    };

    function gameOver(){
        $(".results").html("<p>Results: </p> <br> <p>Correct Answers: " + correctAnswer + "</p> Incorrect Answers:  " + incorrectAnswer + "<br> <p> Unanswered:  " + noAnswer + "</p>");
        $(".timer").hide();
        $(".question").empty();
        $(".answers").empty();
        $("#restart-button").show();
        var restartButton = $("<button>");
            restartButton.addClass("restart-button");
            restartButton.html("Restart Game");
            $(".results").append(restartButton);      
    };

    gameReset();

//------------------- GAME / EVENTS -------------------// 
//function to capture the user's guess, to then evaluate to determine of the user's guess is the correct answer 
    $(".answers").on("click", ".answerChoice", function(event) {
        answerChoice = $(this).text();
        console.log(answerChoice);
        correctGuess = trivia[questionCount].choice[trivia[questionCount].correctAnswer];
        console.log(correctGuess);
        clearInterval(timerId)
        console.log(timerId);
        
        if (answerChoice === correctGuess) {
            userCorrect();
        } else if (answerChoice !== correctGuess) {
            userIncorrect();
        }
    });
})