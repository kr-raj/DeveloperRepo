exports.handler = (event, context, callback) => {

    //Get the request body
    var requestBody = JSON.parse(event.body);
 
    //Retrieve the language and theme values
    var language = requestBody.preferences.language;
    var theme = requestBody.preferences.theme; 
    
    const response = {
        isBase64Encoded: true,
        statusCode: 200,
        multiValueHeaders : {"Set-Cookie": [`language=${language}`, `theme=${theme}`]},
        body: JSON.stringify('User profile set successfully')
    };
    callback(null, response);
};