//to popup login form...
function openForm() {
	document.getElementById("myForm").style.display = "block";
}

// register form validation..

function singValidation() {

	var fname = document.getElementById('fname').value;
	var lname = document.getElementById('lname').value;
	var email = document.getElementById('email').value;
	var pnumber = document.getElementById('pnumber').value;
	var Street1 = document.getElementById('Street1').value;
	var Street2 = document.getElementById('Street2').value;
	var city = document.getElementById('city').value;
	var state = document.getElementById('state').value;
	var zipcode = document.getElementById('zipcode').value;
	var password = document.getElementById('password').value;
	var vpassword = document.getElementById('vpassword').value;


	var fnamecheck = /^[A-Za-z. ]{1,15}$/ ;
	var lnamecheck = /^[A-Za-z. ]{1,15}$/ ;
	var emailcheck = /^[A-Za-z. ]{1,15}$/ ;
	var pnumbercheck = /^[]{10}$/ ;
	var street1check = /^[A-Za-z. ]{1,15}$/ ;
	var street2check = /^[A-Za-z. ]{1,15}$/ ;
	var citycheck = /^[A-Za-z. ]{1,15}$/ ;
	var statecheck = /^[A-Za-z. ]{1,15}$/ ;
	var zipcodecheck = /^[A-Za-z. ]{1,15}$/ ;
	var passcheck = /^[A-Za-z. ]{1,15}$/ ;
	var vpasscheck = /^[A-Za-z. ]{1,15}$/ ;

	if (fnamecheck.test(fname)) {
		document.getElementById('fnamerror').innerHTML = " ";
	}
    if (lnamecheck.test(lname)) {
		document.getElementById('lnamerror').innerHTML = " ";
	}
	if (emailcheck.test(email)) {
		document.getElementById('emailerror').innerHTML = " ";
	}
	if (pnumbercheck.test(pnumber)) {
		document.getElementById('pnumerror').innerHTML = " ";
	}
	if ( street1check.test(Street1)) {
		document.getElementById('street1error').innerHTML = " ";
	}
	if ( street2check.test(Street2)) {
		document.getElementById('street2error').innerHTML = " ";
	}
	if (citycheck.test(city)) {
		document.getElementById('cityerror').innerHTML = " ";
	}
	if (statecheck.test(state)) {
		document.getElementById('stateerror').innerHTML = " ";
	}
	if (zipcodecheck.test(zipcode)) {
		document.getElementById('ziperror').innerHTML = " ";
	}
	if (passcheck.test(password)) {
		document.getElementById('passerror').innerHTML = " ";
	}
	if (vpasscheck.test(vpassword)) {
		document.getElementById('vpasserror').innerHTML = " ";
	}

	else{
		document.getElementById('fnamerror').innerHTML = " First name cannot be blank" ;
		document.getElementById('lnamerror').innerHTML = " last name cannot be blank" ;
		document.getElementById('emailerror').innerHTML = "we need your email address to contact you";
		document.getElementById('pnumerror').innerHTML = " phone number cannot be blank";
		document.getElementById('street1error').innerHTML = "street cannot be blank";
		document.getElementById('street2error').innerHTML = "street address cannot be blank";
		document.getElementById('cityerror').innerHTML = "city cannot be blank";
		document.getElementById('stateerror').innerHTML = "state can't be blank";
		document.getElementById('ziperror').innerHTML = "zipcode can't be blank";
		document.getElementById('passerror').innerHTML = "password cannot be blank";
		document.getElementById('vpasserror').innerHTML = "verify password cannot be blank";
		return false;
	}
}