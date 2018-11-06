let request = require('request');
let express = require('express');
let router = express.Router();
let util = require('../public/javascripts/Utility');
let axios = require('axios'); //https://github.com/axios/axios

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/demo', function(req, res, next) {

    //grab the postID we want to access from the query params
    let id = req.query.postId;

    //we have to parse this as an int because otherwise when we are searching for a match we will compare into to string
    //which produces unwanted events
    id = (parseInt(id));

    //aws api gateway link
    let link = 'https://sjnaz4dcif.execute-api.us-east-2.amazonaws.com/beta/demo';


    //use the util function, once we have gotten the data from it (.then) render it on the page using pug
    //the grabhtml page will return the body object of the post with the id grabbed from query params
    util.grabHtml(link, id).then((body) => {
        if (body) {
            res.render('demo', {
                title: body["content"].rendered
            })
        } else {
            res.render('demo', {
                title: "Specified id not found "
            })
        }
    });
});

module.exports = router;