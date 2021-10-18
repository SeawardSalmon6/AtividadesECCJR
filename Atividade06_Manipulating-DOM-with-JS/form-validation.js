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

	if(errMessages.length > 0) {
		errBox.style.display = "block";
		errBox.innerHTML = null;

		for(let err of errMessages)
			errBox.innerHTML += `<li>${err}</li>`;

		return true;
	} else return false;
}

document.getElementById("sign-up").addEventListener("submit", function(e) {
	e.preventDefault();
	if(!displayErrors()) {
		let successMsg = `Obrigado por se cadastrar, ${username.value}!`;
		alert(successMsg);
	}
});
