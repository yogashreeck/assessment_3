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

  	var  fname1 = document.getElementById('fname1');
  	var lname1 = document.getElementById('lname1');
	var email1 = document.getElementById('email1');
	var pnumber1 = document.getElementById('pnumber1');
	var Street11 = document.getElementById('Street11');
	var Street21 = document.getElementById('Street21');
	var city1 = document.getElementById('city1');
	var state1 = document.getElementById('state1');
	var zipcode1 = document.getElementById('zipcode1');
	var password1 = document.getElementById('password1');
	var vpassword1 = document.getElementById('vpassword1');


	var fnamecheck = /^[A-Za-z. ]{1,15}$/ ;
	var lnamecheck = /^[A-Za-z. ]{1,15}$/ ;
	var emailcheck = /^[A-Za-z. ]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/ ;
	var pnumbercheck = /^[0-9]{10}$/ ;
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
		document.getElementById("fname").className = "wrong-error";
		document.getElementById("fname1").className = "wname";

		document.getElementById('lnamerror').innerHTML = " last name cannot be blank" ;
		document.getElementById("lname").className = "wrong-error";
		document.getElementById("lname1").className = "wname";

		document.getElementById('emailerror').innerHTML = "we need your email address to contact you";
		document.getElementById("email").className = "wrong-error";
		document.getElementById("email1").className = "wname";

		document.getElementById('pnumerror').innerHTML = " phone number cannot be blank";
		document.getElementById("pnumber").className = "wrong-error";
		document.getElementById("pnumber1").className = "wname";

		document.getElementById('street1error').innerHTML = "street cannot be blank";
		document.getElementById("Street1").className = "wrong-error";
		document.getElementById("Street11").className = "wname";

		document.getElementById('street2error').innerHTML = "street address cannot be blank";
		document.getElementById("Street2").className = "wrong-error";
		document.getElementById("Street21").className = "wname";

		document.getElementById('cityerror').innerHTML = "city cannot be blank";
		document.getElementById("city").className = "wcity";
		document.getElementById("city1").className = "wname";

		document.getElementById('stateerror').innerHTML = "state can't be blank";
		document.getElementById("state").className = "wcity";
		document.getElementById("state1").className = "wname";

		document.getElementById('ziperror').innerHTML = "zipcode can't be blank";
		document.getElementById("zipcode").className = "wcity";
		document.getElementById("zipcode1").className = "wnames";

		document.getElementById('passerror').innerHTML = "password cannot be blank";
		document.getElementById("password").className = "wrong-error";
		document.getElementById("password1").className = "wname";

		document.getElementById('vpasserror').innerHTML = "verify password cannot be blank";
		document.getElementById("vpassword").className = "wrong-error";
		document.getElementById("vpassword1").className = "wname";

		return false;
	}
}