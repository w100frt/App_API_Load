const fs = require('fs');

 module.exports = {
    setJSONBody: setJSONBody,
    logBody: logBody
  }

  function setJSONBody(requestParams, context, ee, next) {
    return next(); // MUST be called for the scenario to continue
  }

  function logBody(requestParams, response, context, ee, next) {
console.log(response.body);
      let body=response.body+"\r\n"; //this enabled new line in windows , use \n for linux
	fs.appendFile('testLogs.txt', function(err){
    if (err) console.log(err);
    //console.log("Successfully Written to File.");
	});
    return next(); // MUST be called for the scenario to continue
  }
