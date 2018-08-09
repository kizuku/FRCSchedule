// server.js

var dotenv = require('dotenv').config()
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const axios = require('axios')
var port = process.env.PORT || 5000;
const apiUrl = process.env.apiUrl;
const apiKey = process.env.apiKey;

app = express();
app.use(serveStatic(__dirname + "/dist"));

function buildUrl (teamNum, eventCode, yr) {
    return apiUrl + 'team/frc' + teamNum + '/event/' + yr + eventCode + '/matches/simple' 
}

axios.defaults.headers.common['X-TBA-Auth-Key'] = apiKey

var year, team, event, object

app.get('/api', function(req, res) {
    year = req.headers.year
    event = req.headers.event
    team = req.headers.team

    axios.get(buildUrl(team, event, year)).then(result => {
        object = result
        res.send(object.data)
    })
})

app.listen(port);
console.log('server started on port ' + port);
