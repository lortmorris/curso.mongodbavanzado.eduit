/**
 * Pokemon.io, examples for MongoDB course.
 * Powered By César Casas
 */



const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongojs = require("mongojs");
const server = http.createServer(app);
const db = mongojs("pokemon", ["markers"]);

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post("/savemarkers", (req, res)=> {
    let response = {error: false, msg: "", result: null};

    req.body.points.forEach(p=> {
        p.location.coordinates[0] = parseFloat(p.location.coordinates[0]);
        p.location.coordinates[1] = parseFloat(p.location.coordinates[1]);
    });

    db.markers.insert(req.body.points, (err, docs)=> {
        if (err) {
            response.error = true;
            response.msg = err;
        } else {
            response.result = docs;
        }

        res.json(response);
    })
});

app.listen(process.env.PORT || 5000);
