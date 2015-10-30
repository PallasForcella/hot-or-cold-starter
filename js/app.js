
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
			$(".user-input")[0].reset();
			return false;
		}
	//check if between 1 and 100	

		else if (userNumber>100){
			document.getElementById("feedback").textContent = "Please enter a number between 1 and 100";
			return false;
		}
		return true;
	}
// var diff = Math.abs(userNumber - secretNumber)
	// check number against secret number
	function checkNumber (){
		var diff = Math.abs(userNumber - secretNumber);
	if (diff === 0){
			document.getElementById("feedback").innerHTML = "YOU WON!";
		}
	else if (diff < 5)	
		{
			document.getElementById("feedback").innerHTML = "VERY warm";
		}
	else if (diff < 20)	
		{		
			document.getElementById("feedback").innerHTML = "warm";
		}
	else if (diff < 40)	
		{		
			document.getElementById("feedback").innerHTML = "luke warm";
		}
	else if (diff < 60)	
		{		
			document.getElementById("feedback").innerHTML = "cold";
		}
	else if (diff < 80)	
		{		
			document.getElementById("feedback").innerHTML = "freezing";
		}
	else {		
			document.getElementById("feedback").innerHTML = "frozen";
		}
	};

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


