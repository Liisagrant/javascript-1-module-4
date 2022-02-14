const url = "https://elephant-api.herokuapp.com/elephants";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFixUrl = proxy + url;

const resultsContainer = document.querySelector(".results");


async function makeApiCall() {
    try {
        const response = await fetch(corsFixUrl);
        const elephantsData = await response.json();

        console.log(elephantsData);
        resultsContainer.innerHTML = alert("Success", "Hey Your API call is successful");
    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = alert("error", error);
    }
}

makeApiCall();