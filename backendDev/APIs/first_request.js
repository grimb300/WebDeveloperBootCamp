var request = require('request');
// URLs to request
var reqURLs = { google:    'http://www.google.com',
                google404: 'http://www.google.com/afdadsfasdfasdfsa',
                sunsetHI:  'https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
                    // &apikey=thewdb
              };

request(reqURLs.sunsetHI, function (error, response, body) {
  if(error) {
      // Print the error if one occurred
      console.log('Something went wrong!!!');
      console.log('error:', error);
  } else {
      if (response && response.statusCode === 200) {
          console.log('It worked!!!');
          var parsedData = JSON.parse(body);
          console.log('Sunset in Maui:', parsedData.query.results.channel.astronomy.sunset); // Print the body of the response
      } else {
          console.log('Got a response, but not successful.');
          console.log('statusCode: '+response.statusCode);
      }
  }
});
