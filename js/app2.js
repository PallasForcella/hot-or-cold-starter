
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
	$(".what").click(function(){
		$(".overlay").fadeIn(1000);
	});

//start a new game
	$("a.new").click(newGame);


	$(".user-input").submit(function(event){
		event.preventDefault();
		var userGuess= $("#userGuess").val();
		userNumber = parseInt(userGuess, 10);
		var isValid = checkValid(userNumber);
		if (isValid) {
			var $li = $('<li>').text(userGuess);
			$("ul#guessList").append($li);
			$(".user-input")[0].reset();
			var count = document.getElementById('count');
			var number = count.innerHTML;
			number++;
			count.innerHTML = number;
			checkNumber();
		}
	});

	var userNumber = null;
	var secretNumber = 0;
	var isStarted = false;
	
	function createSecretNumber() {
		secretNumber = (Math.floor(Math.random()*100));
		console.log("Secret number = " + secretNumber);
	}

	function newGame(){
		isStarted=true;
		createSecretNumber();
		userNumber = null;
		count=0;
		$("ul#guessList").empty();
		$("#count").empty();
		$("#feedback").empty();
		document.getElementById("feedback").innerHTML = "Make a guess!";
	}

	function checkValid(userNumber){
		//checks if it's NaN
		if ( isNaN(userNumber)){
			document.getElementById("feedback").innerHTML = "Please enter a valid number";
			console.log(userNumber);
			return false;
		}
	//check if between 1 and 100	

		//how do i keep it from appending the li?	
		else if (userNumber>100){
			document.getElementById("feedback").textContent = "Please enter a number between 1 and 100";
			return false;
		}
		return true;
	}

var giveFeedback = (function() {
	var $feedback = $('#feedback');

	return function() {
		$('#feedback').text(text);
	};
})();

// js style guide

// anonymous function expression:
// (function() {})

function asdf() {

}


// var $feedback = $("#feedback");
// function giveFeedback(text) {
// 	$feedback.html(text);
// 	// document.querySelector('#feedback').innerHTML = text;
// }

	// check number against secret number
	function checkNumber (){
		var diff = Math.abs(userNumber - secretNumber);
	if (diff === 0){
		}
	else if (diff < 5)	
		{
			giveFeedback("VERY warm");
		}
	// else if (userNumber >=(secretNumber-5) || userNumber<=(secretNumber+5))
	// 	{
	// 		document.getElementById("feedback").innerHTML = "VERY warm";
	// 	}
	else if (diff < 10)
		{
			document.getElementById("feedback").innerHTML = "warm";
		}
	else if (userNumber >=(secretNumber-20) || userNumber<=(secretNumber+20))
		{
			document.getElementById("feedback").innerHTML = "cold";
		}
	else if (userNumber >=(secretNumber-30) || userNumber<=(secretNumber+30))
		{
			document.getElementById("feedback").innerHTML = "very cold";
		}
	else {
		alert("something is messed up");
	}		
	};

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

});


