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
	
	//var inputMobile = $("#mobile");
	//var lblMobileErr = $("#mobileError");
	
	var inputSubject = $("#subject");
	var lblSubjectErr = $("#subjectError");
	
	var inputMessage = $("#message");
	
	var inputEmail = $("#email");
	var lblEmailErr = $("#emailError");
	
	var btnSendEmail = $("#submitEmail");
	
	
	//Must have a name
	if(inputName.val().length == 0){
		lblNameErr.show();
		return false;
	}else{
		lblNameErr.hide();
	}
	//Must have a mobile number
	/*if(inputMobile.val().length == 0){
		lblMobileErr.show();
	}else{
		lblMobileErr.hide();
	}*/
	
	//Limit subject to 70 characters and must have at least 10 characters
	if(inputSubject.val().length < 10
		|| inputSubject.val().length > 70){
		lblSubjectErr.show();
		return false;
	}else{
		lblSubjectErr.hide()
	}
	
	//REGEX with email
	var emailRegex = /^([0-9a-zA-Z.]{1,25})@([0-9a-zA-Z]{1,25}).([a-zA-Z]{2,8})$/;
	if(emailRegex.test(inputEmail.val()) == false){
		lblEmailErr.show();
		return false;
	}else{
		lblEmailErr.hide();
	}
	//Limit message to 300 characters and must have at least 10 characters
	var lblMsgErr = $("#characterLeft");
	if(inputMessage.val().length < 10
		|| inputMessage.val().length > 300){
		lblMsgErr.addClass('red');
		lblMsgErr.html("*Le texte doit contenir de 10 &agrave; 300 caract&egrave;res.");
		return false;
	}else{
		lblMsgErr.removeClass('red');
	}
		
		
	var newLine = "%0D%0A";
	var space = "%20";
	var bodyHTML = inputName.val() + newLine
		+ inputEmail.val() + newLine
		+ inputMessage.val();
		//+ inputMobile + newLine
	
	//Send mail to destination
	var link = "mailto:santerre.sebas@gmail.com"
		+ "?subject=[Site]" + space + inputSubject.val()
		+ "&body=" + bodyHTML;
	window.location.href = link;
	/*
	$.ajax({
		url:"https://formspree.io/santerre.sebas@gmail.com",
		method:"POST",
		dataType:"json",
		//contentType: "application/json;charset=utf-8",
		data: {
			_subject: inputSubject.val(),
			_replyto: inputEmail.val(),
			message: bodyHTML
		},
		success: function (msg){
			console.log("Mail sent.");
		},
		error: function(msg){
			console.log(msg);
		}
	});*/
	
	//For client reloading purposes
	return true;
}