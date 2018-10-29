let request = require('request');

let express = require('express');
let router = express.Router();
let util  = require('../public/javascripts/Utility');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/demo', function (req, res, next) {

    /*
    To loop through and get all the news storied, run a loop get all unique ids, then
    run the loop over [i]["content"].rendered as many times as necessary
     */

    //TODO: get this into git
    //TODO: need to learn pug and see if we can make this thing more beauiful
    //TODO: find a way out of async hell
    request('https://news.wfu.edu/wp-json/wp/v2/posts', function(error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        body = JSON.parse(body);
        res.render('demo', {title: body[0]["content"].rendered});  //to get the different articles [1][content].rendered, [2]....
        //console.log((body[0]["id"])); //[0][whatever json field it is you want to access] https://stackoverflow.com/questions/42326078/access-json-fields-in-body-of-message
    })

    /*
    good way of doing things
    let body = util.reportHTML(link,null)
    console.log("Returned body: " + body);
    await res.render('demo', {title: body)})
    */
});

module.exports = router;

