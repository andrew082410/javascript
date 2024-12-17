"use strict";

$(document).addEventListener('DOMContentLoaded',function() {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		const form=document.getElementById('reservstionForm');
		if(arrivaldate==="||nights===||email===") {valid=false;alert('All fields must be filled out.');}
	if (isNaN(nights)||nights<=0){valid=false;alert('Number of nights must be a positive number.');}
	if(!emailPattern.test(email)){valid=false;
		alert('Email address is not valid.');}
		if(!valid){event.preventDefault();
	$('arrivaldate').focus();
	('reservationForm').on('submit',function(event));
	let arrivaldate=$('arrivaldate').val().trim();
	let nights=$('numberOfNights').val().trim();
	let adults=$('adults').val().trim();
	let children=$('children').val().trim();
	let name=$('name').val().trim();
	let phone=$('phone').val().trim();
	let email=$('email').val().trim();
	let valid=true;
			$('arrivalDate').val(arrivaldate);
			$('numberOfNights').val(nights);
			$('adults').val(adults);
			$('children').val(children);
			$('name').val(name);
			$('email').val(email);
			$('phone').val(phone);
		
}}); // end ready