const request = require('request'); 

request('https://api.thecatapi.com/v1/breeds/search?q=sib', function (error, response, body) {
  //console.log('body:', body);
  //console.log(typeof body);
  const data = JSON.parse(body);
  
  console.log(data[0]['description']);
//console.log(data);
//console.log(typeof data);

});
