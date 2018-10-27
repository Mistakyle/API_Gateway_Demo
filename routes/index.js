let express = require('express');
let router = express.Router();
let util  = require('../public/javascripts/Utility')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/demo', function (req, res, next) {
util.grabHtml(null)
//console.log("Returned body: " + body)
res.render('demo', {title: "Kappa"})
});

module.exports = router;


//TODO: Must get the data from grabhtml and pass that through to index.js.  Probably have some helper function or something
//TODO: Put this project in git...share with Damian