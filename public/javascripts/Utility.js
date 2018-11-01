let request = require('request');
let axios = require('axios')

//uses the request library to grab the data from the WP site.  It uses the request library and JSON parser to make sense of it
module.exports.grabHtml = async function(link, callback) {
    return axios.get(link)
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