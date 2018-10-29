let request = require('request');

//uses the request library to grab the data from the WP site.  It uses the request library and JSON parser to make sense of it
module.exports.grabHtml = async function(link, callback) {
    let demo = "Hello";
    await request('https://news.wfu.edu/wp-json/wp/v2/posts', function(error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', JSON.parse(response.body)); // Print the HTML for the Google homepage.
        body = JSON.parse(body);
        console.log((body[0]["id"])); //[0][whatever json field it is you want to access] https://stackoverflow.com/questions/42326078/access-json-fields-in-body-of-message
        callback(link, body[0]["id"]);

    });


};


//function used to get the data from the callback function in request. Needed because return data within a call back
module.exports.reportHTML = async function(link, data) {
    if (data != null) {
        console.log("Returning + " + data);
        return data
    } else {
        await this.grabHtml(link, this.reportHTML)
    }
};