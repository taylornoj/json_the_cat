const request = require('request');
const breedName = process.argv.slice(2);


request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName[0]}`, function(error, response, body) {
  if (error) {
    return console.log("Failed to request details:", error);
  }


  const data = JSON.parse(body);
  
  if (data[0] === undefined) {
    console.log(`${breedName} not found`);
  } else {
    //console.log(data);
    console.log(data[0]['description']);
  }
});
