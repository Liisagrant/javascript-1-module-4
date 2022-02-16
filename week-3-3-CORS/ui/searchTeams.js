import {renderTeams} from "./renderTeams.js";

export function searchTeams(teams) {
    const search = document.querySelector(".search");
    search.onkeyup = function (event) {
        const searchValue = event.target.value.trim().toLowerCase();
        const filteredTeams = teams.filter(function (team) {
            if (team.full_name.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        })

        renderTeams(filteredTeams);
    }
}