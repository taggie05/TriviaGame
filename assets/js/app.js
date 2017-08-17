$(document).ready(function(){

function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();



$("body").on("click", ".start-button", function(event){
	event.preventDefault();  // added line to test issue on GitHub Viewer

	generateHTML();

	timerWrapper();

}); 

$("body").on("click", ".answer", function(event){
	//answeredQuestion = true;
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		//alert("correct");

		clearInterval(theClock);
		generateWin();
	}
	else {
		//alert("wrong answer!");
		clearInterval(theClock);
		generateLoss();
	}
}); 

$("body").on("click", ".reset-button", function(event){

	resetGame();
}); 

});  

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 3000);
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter +
  "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" +
  imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 3000);  //
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" +
  "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" +
  "<img class='center-block img-wrong' src='assets/images/rm.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 3000);
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" +
  questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "
  +answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "
  +answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" +
  "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally +
  "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" +
  "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}
var startScreen;
var gameHTML;
var counter = 30;
var questionArray=["What did Rick turn himself into in Season 3 Ep.2", "What is the name of the assasin Rick sells weapons to?", "Who is Rick's best friend?", "What demnsional universe are Rick and Morty from?", "What is Rick's favorite attraction at Anatomy park?", "What happened to the universe Rick and Morty were originally from?",'What episode does Rick use the line "this has been a long time coming"?', "What does the telescope the devil gives Rick do?"];
var answerArray=[["Tiny Rick", "Pickle", "Shoe", "Darwin"], ["Mr. Poopy Butthole","Krombopulos Michael","Meesesks","Bird Person"],
  ["Mr. Poopy Butthole", "Morty", "Gearhead", "Bird Person"], ["C137","C-132","C-1998M","304-X"],
  ["Lung Lift-Off", "Haunted Liver", "Bone Train", "Pirates of the Pancreas"], ["The Galatic Federation takes control","Cronenbergs","Is blown up","Nothing"],
  ["Rickle in Time", "Look Who's Purging Now", "Auto Erotic Assimilation", "Big Trouble in Little Sanchez"], ["Sees into the future","Makes people retarded","can see through microorganisms",
  "does normal microsope functions"]];
var imageArray = ["<img class='center-block img-right' src='assets/images/pickleRick.png'>", "<img class='center-block img-right' src='assets/images/km.png'>",
  "<img class='center-block img-right' src='assets/images/birdperson.png'>", "<img class='center-block img-right' src='assets/images/c137.png'>",
  "<img class='center-block img-right' src='assets/images/pirates of the pancreas.png'>", "<img class='center-block img-right' src='assets/images/cronenberg.png'>",
  "<img class='center-block img-right' src='assets/images/rickle.png'>", "<img class='center-block img-right' src='assets/images/dev.png'>"];
var correctAnswers = ["B. Pickle", "B. Krombopulos Michael", "D. Bird Person", "A. C137", "D. Pirates of the Pancreas", "B. Cronenbergs", "A. Rickle in Time", "B. Makes people retarded"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
