var express = require('express');
var router = express.Router();
var fs = require("fs");

router.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})

/* GET home page. */
router.get('/', function(req, res) {
     res.sendFile( __dirname + "/" + "index.html" );
});

module.exports = router;
