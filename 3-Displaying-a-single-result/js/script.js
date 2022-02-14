// Sometimes we retrieve only a single result from an API call.
// In this case, we will work with a single object rather
// than an array of objects.

// Because we are not working with an array,
// we access the result properties directly.


// Example 1
// https://rawg.io/apidocs the API
// API Documentation https://api.rawg.io/docs/#operation/games_read
const container = document.querySelector(".container");
const url = "https://api.rawg.io/api/games/3328?key=54582cd735a340b89b17702eae51578b";

async function fetchGame() {
    try {
        const response = await fetch(url);
        const details = await response.json();
        createHTML(details);
    } catch (error) {
        console.log(error);
    }
}
fetchGame();


function createHTML(details) {
    container.innerHTML = `                                                                                
<h1 class="details-title">name:${details.name} </h1>                                                   
<div class="details-image" style="background-image: url('${details.background_image}')"></div>         
<p class="details-description">description: ${details.description}</p>                                 
<time class="details-date">released: ${details.release}</time>                                         
`;
}