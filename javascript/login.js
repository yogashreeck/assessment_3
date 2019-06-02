// popup login form
function openForm() {
	document.getElementById("myForm").style.display = "block";
}

// register form

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
	var pnumbercheck = /^[0-9]{10}$/ ;
	var street1check = /^[A-Za-z. ]{1,15}$/ ;
	var street2check = /^[A-Za-z. ]{1,15}$/ ;
	var citycheck = /^[A-Za-z. ]{1,15}$/ ;
	var statecheck = /^[A-Za-z. ]{1,15}$/ ;
	var zipcodecheck = /^[A-Za-z. ]{1,15}$/ ;
	var passcheck = /^[A-Za-z. ]{1,15}$/ ;
	var vpassecheck = /^[A-Za-z. ]{1,15}$/ ;

	if (fnamecheck.test(fname)) {
		document.getElementById('fnamerror').innerHTML = " ";
	}
	else{
		document.getElementById('fnamerror').innerHTML = " First name cannot be blank" ;
		return false;
	}

	if (lnamecheck.test(lname)) {
		document.getElementById('lnamerror').innerHTML = " ";
	}
	else{
		document.getElementById('lnamerror').innerHTML = " last name cannot be blank" ;
		return false;
	}
}