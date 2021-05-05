var express = require('express');
var router = express.Router();

var ping = require("ping");
var cfg = {timeout: 5};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Host Alive?', status: "N/A"});
});

router.post("/submit-form", function(req, res){
    let hostToPing = req.body.host;
    var hostStatus; // used to determine if the host is up or not

    console.log(hostToPing);
    
    
    ping.sys.probe(hostToPing, function(isAlive) {
	if(isAlive) {
	    res.render("index", {title: "Host Alive?", status: `${hostToPing} - Appears to be up`});
	} else {
	    res.render("index", {title: "Host Alive?", status: `${hostToPing} - Does not appear to be up`});
	}
    }, cfg)
});

module.exports = router;
