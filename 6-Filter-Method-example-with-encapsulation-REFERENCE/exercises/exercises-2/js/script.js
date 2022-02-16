const url = "https://randomuser.me/api/";
const wrapperContainer = document.querySelector(".wrapper");

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.results);
        const results = data.results;
        for (let i = 0; i < results.length; i++) {
            console.log(results[i]);
            const firstName = results[i].name.first;
            const lastName = results[i].name.last;
            const personImg = results[i].picture.large;
            console.log(firstName);
            console.log(lastName);
            console.log(personImg);
            wrapperContainer.innerHTML = `
            <h1>${firstName} ${lastName}</h1>
            <img src="${personImg}" alt="the name of the peron is ${firstName}"/>
            `;
        }
    })
    .catch((error) => {
        console.log(error);
        wrapperContainer.innerHTML += `
        <h1>hello</h1>
`;
    })