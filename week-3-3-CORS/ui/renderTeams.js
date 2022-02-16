// 2.select the team-container class
export function renderTeams(teamsToRender) { // i passed the teamsToRender as an argument
    const teamContainer = document.querySelector(".team-container");
    // TODO clear the teamContainer HTML to be empty
    teamContainer.innerHTML = '';
    for (let i = 0; i < teamsToRender.length; i++) {

        teamContainer.innerHTML += `<div class="team">
                                        <h4>${teamsToRender[i].full_name}</h4>
                                    </div>`
    }
}