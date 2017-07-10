jQuery(document).ready(function($) {
	
	$('#characterLeft').text('250 characters left');
	$('#message').keydown(function () {
		var max = 250;
		var len = $(this).val().length;
		if (len >= max) {
			$('#characterLeft').text('You have reached the limit');
			$('#characterLeft').addClass('red');
			$('#btnSubmit').addClass('disabled');            
		} 
		else {
			var ch = max - len;
			$('#characterLeft').text(ch + ' characters left');
			$('#btnSubmit').removeClass('disabled');
			$('#characterLeft').removeClass('red');
		}
	});    
});

function sendEmail() {
	
	var inputName = $("#name");
	var lblNameErr = $("#nameError");
	
	var inputMobile = $("#mobile");
	var lblMobileErr = $("#mobileError");
	
	var inputSubject = $("#subject");
	var lblSubjectErr = $("#subjectError");
	
	var inputMessage = $("#message");
	
	var inputEmail = $("#email");
	var lblEmailErr = $("#emailError");
	
	var btnSendEmail = $("#submitEmail");
	
	//Validate if inputs are OK (REGEX)
		//Must have a name
		if(inputName.val().length == 0){
			//console.log("DEBUG1");
			lblNameErr.show();
		}else{
			//console.log("DEBUG2");
			lblNameErr.hide();
		}
		//Must have a mobile number
		if(inputMobile.val().length == 0){
			console.log("DEBUG1");
			lblMobileErr.show();
		}else{
			console.log("DEBUG2");
			lblMobileErr.hide();
		}
		
		//Limit subject to 70 characters and must have at least 10 characters
		if(inputSubject.val().length < 10
			|| inputSubject.val().length > 70){
			lblSubjectErr.show();
		}else{
			lblSubjectErr.hide()
		}
		
		//REGEX with email
		var emailRegex = /^([0-9a-zA-Z.]{1,25})@([0-9a-zA-Z]{1,25}).([a-zA-Z]{2,8})$/;
		if(emailRegex.test(inputEmail) == false){
			console.log("hello");
			lblEmailErr.show();
		}else{
			console.log("boff");
			lblEmailErr.hide();
		}
		//Limit message to 300 characters and must have at least 10 characters
		var lblMsgErr = $("#characterLeft");
		if(inputMessage.val().length < 10
			|| inputMessage.val().length > 300){
			lblMsgErr.addClass('red');
			lblMsgErr.html("*Le texte doit contenir de 10 &agrave; 300 caract&egrave;res.");
			
		}else{
			lblMsgErr.removeClass('red');
		}
		
		
		
		
	//Send mail to destination
	//var link = "mailto:" + inputEmail
	//	+ "?subject=[Site]_" + inputName + " | " +  inputSubject
	//	+ "&body=" + inputMobile + "\n" + inputMessage;
	//window.location.href = link;

	//For client purposes
	return false;
}