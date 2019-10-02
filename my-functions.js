const fs = require('fs');

 module.exports = {
    setJSONBody: setJSONBody,
    logBody: logBody
  }

  function setJSONBody(requestParams, context, ee, next) {
    return next(); // MUST be called for the scenario to continue
  }

  function logBody(response, context, ee, next) {
console.log(response.body);
      let body=response.body+"\r\n"; //this enabled new line in windows , use \n for linux
	fs.appendFile('testLogs.txt', body, function(body, err){
    if (err) console.log(err);
		else Console.WriteLine("passed-omit");
    //console.log("Successfully Written to File.");
	});
    return next(); // MUST be called for the scenario to continue
  }
