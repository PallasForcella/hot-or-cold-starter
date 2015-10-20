
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

//start a new game
  	$("a.new").click(newGame);


	$(".user-input").submit(function(event){
		var userGuess= $("#userGuess").val();
		userNumber = parseInt(userGuess, 10);
		checkValid();
		event.preventDefault();
		$("ul#guessList").append("<li>" + userGuess + "</li>");
		$(".user-input")[0].reset();
		var count = document.getElementById('count');
    	var number = count.innerHTML;
    	number++;
    	count.innerHTML = number;
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
  	}

	function checkValid(){
	//checks if it's NaN
		if ( isNaN(userNumber)){
			alert("Please enter a valid number");
			console.log(userNumber);
		}
	//check if between 1 and 100	
		else if (userNumber>100){
			alert("Please enter a number between 1 and 100");

		}
	}

	// check number against secret number
	function checkNumber (){
	if (userNumber === secretNumber){
		alert("You have won!");
		}
	else if (userNumber <(secretNumber-30) || userNumber>(secretNumber+30))
		{
			alert("very cold");
		}
	else (userNumber <(secretNumber-20) || userNumber>(secretNumber+20))
		{
			alert("cold");
		}
	};

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


