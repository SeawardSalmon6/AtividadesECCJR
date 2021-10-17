/* =======================================
 ** BOM - Properties, Objects and Methods
========================================= */

/* BOM - Browser Object Model
    -> when creating a new browser window, it is created a object called BOM
    -> it have a lot of properties that allow us to manipulate and get info about the window
        Ex.:
            -> screen
            -> document

    -> the Document property it's a unique object that we can use to manipulate HTML files
*/

/* Screen Object */
console.log(
    "Screen Properties",
    "\n------------------------------",
    "\n-> width: ", screen.width, // returns the window width
    "\n-> height: ", screen.height, // returns the window height
    "\n-> orientation: ", screen.orientation.type, // returns the window orientation
);

/* Navigator Object */
console.log(
    "Navigator Properties",
    "\n------------------------------",
    "\n-> appName: ", navigator.appName, // returns the navigator app name @deprecated
    "\n-> appVersion: ", navigator.appVersion, // returns the navigator version @deprecated
    "\n-> language: ", navigator.language, // returns the navigator standard language
);

/* Location Object */
console.log(
    "Navigator Properties",
    "\n------------------------------",
    "\n-> href: ", location.href, // returns the file href
    "\n     -> redirecting to Google: { location.href = \"https://google.com\" }", // redirects to another page if needed
);

/* History Object */
console.log(
    "Navigator Properties",
    "\n------------------------------",
    "\n-> back(): { history.back() }", // returns to the previous website visited if there is one
    "\n-> forward(): { history.forward() }", // goes to the next website visited if there is one
);

function voltar() {
    history.back();
}

function proxima() {
    history.forward();
}
