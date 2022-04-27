
/**
 * LOGIC
 * 1. Once button is clicked, get the id
 * 2. Change the value of the variable
 * 3. Stored in local storage based on the endpoint name for every category
 * 4. It will proceed to the secondPage.html
 */

/**
 * 3 functions needed
 * 
 * 1. determining what category was pressed
 * 2. storing on the local storage on what button is clicked 
 * 3. redirecting to the next web page
 */

/**
 * 
 */
let getJokeCategory = (clickedId) => {

    if (clickedId === "programming-button") return "Programming";
    if (clickedId === "spooky-button") return "Spooky";
    if (clickedId === "christmas-button") return "Christmas";
    if (clickedId === "pun-button") return "Pun";
}

/**
 * 
 */
let storeJokeCategory = (jokeCategoryName) => {
    sessionStorage.setItem("jokeCategory", jokeCategoryName);
}

/**
 * 
 */
let redirectToJokeCategory = (clickedId) => {

    let pressedJokeCategory = getJokeCategory(clickedId);

    if (pressedJokeCategory) {
        storeJokeCategory(pressedJokeCategory);
        window.location.href = "secondPage.html";
    }
}