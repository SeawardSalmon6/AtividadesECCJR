/* =========================================
Atividade 07.2 - Page Navigation
========================================= */

document.querySelectorAll("a[href^='#']").forEach(function (anchor) {
  // --> Verifies for standard patter at the anchors
  if (!anchor.hash) return; // --> Tests if there is a hash on the anchor
  if (anchor.origin + anchor.pathname !== self.location.href) return; // --> Tests if the hash path is correct

  (function (destination) {
    // --> Receives the destination element (anchor.hash)
    anchor.addEventListener("click", function (event) {
      event.preventDefault(); // --> Cancel anchor onClick default behavior
      window.scrollTo({
        // --> Scrolls to the element
        top: destination.offsetTop,
        behavior: "smooth",
      });
    });
  })(document.querySelector(anchor.hash)); // --> Destination argument
});
