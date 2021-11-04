const request = require('request'); 
const args = process.argv.slice(2);


request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, function (error, response, body) {
  //console.log('body:', body);
  //console.log(typeof body);
  const data = JSON.parse(body);
  
  if (data[0] === undefined) {
    console.log("Breed name not found");
  } else {
    //console.log(data);
    console.log(data[0]['description']);
  }
  
//console.log(data);
//console.log(typeof data);

});
