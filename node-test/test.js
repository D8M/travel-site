var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>HTML is great</h1>", function(error) {
  if (error) {
    return console.log(error);
  } else {
    return console.log("Congrats");
  }
});

var myPhotoLocation = 'https://www.jetphotos.com/photo/9225250';

https.get(myPhotoLocation, function(response) {
  response.pipe(fs.createWriteStream(__dirname + "/jet.jpg"));
});
C:\Users\Daves\Desktop\sites\travel-site