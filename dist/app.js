//var apiUrl = process.env.apiUrl;
//var apiKey = process.env.apiKey;

//var apiUrl = 'https://www.thebluealliance.com/api/v3/';
//var apiKey = 'exJ8N6aK7Y5Fh8t2l5NDLJXaLaamWqI4ZjggCGvxDrbFiCca5Gn1kDj4FoYLypAb';

var myVars = require('./vars.js');
var apiUrl = myVars.apiUrl;
var apiKey = myVars.apiKey;

console.log("apiUrl = " + apiUrl)
console.log("apiKey = " + apiKey)

function buildUrl (team, event) {
    return apiUrl + 'team/frc' + team + '/event/2017' + event + '/matches/simple' 
}

axios.defaults.headers.common['X-TBA-Auth-Key'] = apiKey

const vm = new Vue({
    el: '#app',
    data: {
        categories: [
            'Match #', 'Red 1', 'Red 2', 'Red 3', 'Red Score', 'Blue Score', 'Blue 1', 'Blue 2', 'Blue 3'
        ],
        matches: []
    },
    mounted() {
        axios.get(buildUrl('1758', 'scmb')).then(result => {
            console.log(result.data); 
            
            var match;
            for (match in result.data) {
                if (result.data[match].comp_level == "qm") {
                    this.matches.push({
                        "matchNum": result.data[match].match_number, 
                        "red1": result.data[match].alliances.red.team_keys[0].substring(3),
                        "red2": result.data[match].alliances.red.team_keys[1].substring(3),
                        "red3": result.data[match].alliances.red.team_keys[2].substring(3),
                        "redScore": result.data[match].alliances.red.score,
                        "blueScore": result.data[match].alliances.blue.score,
                        "blue1": result.data[match].alliances.blue.team_keys[0].substring(3),
                        "blue2": result.data[match].alliances.blue.team_keys[1].substring(3),
                        "blue3": result.data[match].alliances.blue.team_keys[2].substring(3)
                    })
                }
            }
            
            this.matches.sort(function(a, b) {
                return parseFloat(a.matchNum) - parseFloat(b.matchNum);
            });

            console.log(this.matches);
        })
    }
});