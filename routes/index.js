let request = require('request');
let express = require('express');
let router = express.Router();
let util = require('../public/javascripts/Utility');
let axios = require('axios'); //https://github.com/axios/axios
let amplify = require('aws-amplify')

//TODO:  Have a link that goes to WFU via GMAIL :DONE
//TODO:  Have a link that goes to rendered news via AWS signin :Done uses redirect

/* GET home page. */

//this is used for google/user signin
router.get('/', async function(req, res, next) {

    // res.redirect("https://wfu3.auth.us-east-2.amazoncognito.com/login?response_type=code&client_id=61545m2dcj7vf8cd2uteiro5fv&redirect_uri=http://localhost:3000/redirect")
    res.redirect("https://wfu3.auth.us-east-2.amazoncognito.com/login?response_type=code&client_id=61545m2dcj7vf8cd2uteiro5fv&redirect_uri=https://www.wfu.edu")



    //res.render('index', {
    //title: 'Express'
    //});
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


//hits this route then goes to demo,  using this as a dummy redirect
router.get('/redirect', function(req, res) {
    res.redirect("https://wfuadmin.auth.us-east-2.amazoncognito.com/login?response_type=code&client_id=45hdeek22ld0aki8ie1nu2cee5&redirect_uri=http://localhost:3000/demo?postId=50483")
})

module.exports = router;    