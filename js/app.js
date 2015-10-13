
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

    var UserNumber;
    var SecretNumber = 0;
    
    function CreateSecretNumber() {
        SecretNumber = (Math.floor(Math.random()*100));
        console.log("Secret number = " + SecretNumber);
    }

  	function NewGame(){
	CreateSecretNumber();
	UserNumber = 0;
  	}

	function EnterNumber(){
		$(".button").click(function(){
		UserNumber = parseInt(UserNumber, 10);
	CheckValid();
	});
	}

	function CheckValid(){
	//checks if it's NaN
	if ( isNaN(UserNumber)
		)
	{
		alert("Please enter a valid number");
	}
	}

	// check number against secret number
	function CheckNumber (){
	if (UserNumber === SecretNumber){
		alert("You have won!");
		}
	else if (UserNumber <=(SecretNumber-30) || UserNumber>=(SecretNumber+30))
		{
			alert("very cold");
		}
	else (UserNumber <=(SecretNumber-20) || UserNumber>=(SecretNumber+20))
		{
			alert("cold");
		}
	};

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


