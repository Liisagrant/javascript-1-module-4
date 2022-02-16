// 1. select the input with id firstName

const firstName = document.querySelector("#firstName");
const errorContainerMessage = document.querySelector(".error-message");
const errorSVG = document.getElementById("error-icon")

// 2. Add event to the input >>> keyup oneyup

firstName.addEventListener("keyup", logLengthMsg);

// 3. get the length of the input

function logLengthMsg() {
    const inputValue = event.target.value.trim();
    const valueLength = inputValue.length;
    if (valueLength > 0) {
        errorContainerMessage.innerHTML = "the input has value";
        errorSVG.style.display = "none";
    } else {
        errorContainerMessage.innerHTML = "The input does'nt have a value";
        errorSVG.style.display = "block";
    }
}

// 4. Make a condition
// if the length is > 0
// show a message "The input has a value"
// else
// show a message "the input does'nt have a value"
//