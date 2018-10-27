let request = require('request');


module.exports.grabHtml=function(link) {
    request('https://news.wfu.edu/wp-json/wp/v2/posts', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', JSON.parse(response.body)); // Print the HTML for the Google homepage.
        body = JSON.parse(body);
        console.log(body[0]["id"])  //[0][whatever json field it is you want to access] https://stackoverflow.com/questions/42326078/access-json-fields-in-body-of-message


    });

    /*
module.exports.reportHTML=function(link, data) {
    if(data) {
        return data
    }
    else {
        grabHtml(link)
    }
};
*/


};
