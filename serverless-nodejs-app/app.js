// app.js

const express = require("express");
const sls = require("serverless-http");
const ping = require("ping");

const app = express()
var cfg = {timeout: 5}

app.get("/", async (req, res, next) => {
    res.status(200).send("Hello world");
});

app.get("/ping/:host", async(req, res) => {
    let hostToPing = req.params.host;
    var hostStatus; // used to determine if the host is up or not

    ping.sys.probe(hostToPing, function(isAlive) {
	if(isAlive) {
	    res.status(200).send("Host is Alive");
	} else {
	    res.status(200).send("Host appears to be down\n");
	}
    }, cfg)    
});

module.exports.server = sls(app)
