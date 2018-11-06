let request = require('request');
let axios = require('axios');

//uses axios to grab the json data stored at the passed in link.  Then checks for a aprticular id field that will
//exist in this iteration.  Once we have that id
module.exports.grabHtml = async function(link, postId) {
    let i = 0;
    let indexId = 0;
    let data = await axios.get(link);
    for (i = 0; i < data.data.length; i++) {
        //console.log(data.data[i]["id"]);
        if (data.data[i]["id"] === postId) {
            console.log("FOUUND ID " + indexId);
            return data.data[i]

        }
    }

    return null

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