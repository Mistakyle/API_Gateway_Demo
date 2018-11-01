let request = require('request');

let express = require('express');
let router = express.Router();
let util  = require('../public/javascripts/Utility');
let axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/demo', function (req, res, next) {
let link  = 'https://sjnaz4dcif.execute-api.us-east-2.amazonaws.com/beta/demo'
    /*
    To loop through and get all the news storied, run a loop get all unique ids, then
    run the loop over [i]["content"].rendered as many times as necessary
     */

    /*
    request('https://sjnaz4dcif.execute-api.us-east-2.amazonaws.com/beta/demo', function(error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        body = JSON.parse(body);
        res.render('demo', {title: body[0]["content"].rendered});  //to get the different articles [1][content].rendered, [2]....
        //console.log((body[0]["id"])); //[0][whatever json field it is you want to access] https://stackoverflow.com/questions/42326078/access-json-fields-in-body-of-message
    })
    */
    /*
    axios.get('https://sjnaz4dcif.execute-api.us-east-2.amazonaws.com/beta/demo').then((body)=>
    //console.log(data.data[0]["content"]))
    res.render('demo', {title: body.data[0]["content"].rendered}));
*/

    //use the util function, once we have gotten the data from it (.then) render it on the page using pug
    util.grabHtml(link).then((body) => {
        res.render('demo', {title: body.data[0]["content"].rendered})
    });
})

module.exports = router;

