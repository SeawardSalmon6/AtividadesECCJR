/* =========================================
	Atividade 06 - Regex Validation
========================================= */

const username = document.getElementById("username"); // Full Name Input
const email = document.getElementById("email"); // Email Address Input
const phone = document.getElementById("phone"); // Phone Number Input
const zip = document.getElementById("zip"); // Zip Code Input
const errBox = document.getElementById("regex-error"); // Error Box display

// Regexes
const emailRegex = /^([\w\-\+\.]{1,64})(\@)([a-zA-Z\d\.\-]{1,64})(\.[a-zA-Z\d]{2,63})$/;
const phoneRegex = /^\(?(\d{2})\)? ?(\d{4,5})-?(\d{4})$/;
const zipRegex = /^(\d{2}\.?\d{3})\-?(\d{3})$/;

// ErrorHandler Function
function displayErrors() {
	let errMessages = []; // array that stores the errors

	if(!emailRegex.test(email.value))
		errMessages.push("Insert a valid email!")

	if(!phoneRegex.test(phone.value))
		errMessages.push("Insert a valid phone number!")

	if(!zipRegex.test(zip.value))
		errMessages.push("Insert a valid zip code!")

	errBox.innerHTML = null;
	if(errMessages.length > 0) { // If there is any problem with regex, show error
		errBox.style.display = "block";

		for(let err of errMessages)
			errBox.innerHTML += `<li>${err}</li>`;

		return true;
	} else return false;
}

function validateForm(e) {
	if(!displayErrors()) {
		let successMsg = `Thank you for signing up, ${username.value}!`;
		alert(successMsg);
	} else e.preventDefault();
}

document.getElementById("sign-up").addEventListener("submit", validateForm); // eventListener

/* =======================================================
	Atividade 07.1 - Input Masks
========================================================== */

/* Phone Number Mask */
function inputHandler(masks) {
	let m = phone.value.length > 14 ? 1 : 0;
	VMasker(phone).unMask();
	VMasker(phone).maskPattern(masks[m]);
	phone.value = VMasker.toPattern(phone.value, masks[m]);
}

const phoneMask = ['(99) 9999-9999', '(99) 99999-9999'];
phone.addEventListener('input', inputHandler.bind(undefined, phoneMask));

/* Zip Code Mask */
VMasker(zip).maskPattern('99.999-999');
