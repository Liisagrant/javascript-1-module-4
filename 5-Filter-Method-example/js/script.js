// Filter method Example

// Example 1 Filter Method with Static Data
import teams from "./data/teams.js"
console.log(teams);

//2. select the teams-container class
//3. select the search class

const teamContainer = document.querySelector(".team-container");
const search = document.querySelector(".search");

//4. assign the teams data to a variable

let teamsToRender = teams;

//5. loop on the array and inject data to the DOM teamContainer
function renderTeams (someArr){
    teamContainer.innerHTML = "";
    for(let j = 0; j < someArr.length; j++){
        console.log(someArr[j]);
        teamContainer.innerHTML += `<div class="team"><h3>${someArr[j].full_name}</h3></div>`
    }
}
renderTeams(teamsToRender);

search.onkeyup = function (event) {
    console.log(event);
    //console.log(event.target.value);
    const searchValue = event.target.value.trim().toLowerCase();
    console.log(`searchValue`, searchValue);

    const filteredTeams = teamsToRender.filter(function (team){
        if (team.full_name.toLowerCase().startsWith(searchValue)){
            return true
        }
    });
    console.log(filteredTeams);
    //teamsToRender = filteredTeams;
    console.log(`teamsToRender`,filteredTeams);
    renderTeams(filteredTeams);
}


