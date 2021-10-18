/* =========================================
Atividade 07.2 - Page Navigation
========================================= */

$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			let hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
});

/* document.querySelectorAll('a[href^="#"]').forEach(function (element) {
	if (!element.hash) return;
	if (element.origin + element.pathname !== self.location.href) return;

	(function (destination) {
		element.addEventListener(
			'click',
			function (event) {
				window.scrollTo({
					top: destination.offsetTop,
					behavior: 'smooth',
				});
				event.preventDefault();
			},
			false
			);
		})(document.querySelector(element.hash));
	}); */

