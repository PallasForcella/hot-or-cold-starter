
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
    	checkNumber();
	});

    var userNumber = null;
    var secretNumber = 0;
    var isStarted = false;
    var newNumber = secretNumber - userNumber;
    
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

	function checkValid(){
	//checks if it's NaN
		if ( isNaN(userNumber)){
			document.getElementById("feedback").innerHTML = "Please enter a valid number";
			console.log(userNumber);
			}
	//check if between 1 and 100	

//how do i keep it from appending the li?	
		else if (userNumber>100){
			document.getElementById("feedback").innerHTML = "Please enter a number between 1 and 100";
			}
		}

	// check number against secret number
	function checkNumber (){
	if (userNumber === secretNumber){
		document.getElementById("feedback").innerHTML = "You have won!";
		}
	else if ((secretNumber - userNumber) < 5)	
		{
			document.getElementById("feedback").innerHTML = "VERY warm";
		}
	// else if (userNumber >=(secretNumber-5) || userNumber<=(secretNumber+5))
	// 	{
	// 		document.getElementById("feedback").innerHTML = "VERY warm";
	// 	}
	else if (userNumber >=(secretNumber-10) || userNumber<=(secretNumber+10))
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


