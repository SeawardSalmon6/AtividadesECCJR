/* =========================================
	Atividade 06 - Regex Validation
========================================= */
const username = document.getElementById("username"); // Full Name Input
const email = document.getElementById("email"); // Email Address Input
const phone = document.getElementById("phone"); // Phone Number Input
const zip = document.getElementById("zip"); // Zip Code Input
const errBox = document.getElementById("regex-error"); // Error Box display

const emailRegex = /^([\w\-\+\.]{1,64})(\@)([a-zA-Z\d\.\-]{1,64})(\.[a-zA-Z\d]{2,63})$/;
const phoneRegex = /^\(?(\d{2})\)? ?(\d{4,5})-?(\d{4})$/;
const zipRegex = /^(\d{2}\.?\d{3})\-?(\d{3})$/;

function displayErrors() {
	let errMessages = [];

	if(!emailRegex.test(email.value))
		errMessages.push("Insira um e-mail válido!")

	if(!phoneRegex.test(phone.value))
		errMessages.push("Insira um número de telefone válido!")

	if(!zipRegex.test(zip.value))
		errMessages.push("Insira um código postal válido!")

	errBox.innerHTML = null;
	if(errMessages.length > 0) {
		errBox.style.display = "block";

		for(let err of errMessages)
			errBox.innerHTML += `<li>${err}</li>`;

		return true;
	} else return false;
}

function validateForm(e) {
	if(!displayErrors()) {
		let successMsg = `Obrigado por se cadastrar, ${username.value}!`;
		alert(successMsg);
	} else e.preventDefault();
}

document.getElementById("sign-up").addEventListener("submit", validateForm);

/* =======================================================
	Atividade 07 - Input Masks and Page Navigation
========================================================== */

let phoneMask = ['(99) 9999-9999', '(99) 99999-9999'];

function phoneMasker() {
	VMasker(phone).unMask();
	if(phone.value.length >= 14)
		VMasker(phone).maskPattern(phoneMask[1]);
	else
		VMasker(phone).maskPattern(phoneMask[0]);
}

phone.addEventListener("input", phoneMasker);
