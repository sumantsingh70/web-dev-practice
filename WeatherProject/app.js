const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
	const url =
		"https://api.openweathermap.org/data/2.5/weather?q=London&appid=831deb81a5ca396ab9e3e69a6f509818&unit=metric";
	https.get(url, function (response) {
		console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            console.log(temp);
            console.log(weatherDescription);
        }); 
	});
	res.send("Server is up and running.");
});

app.listen(3000, function () {
	console.log("Server is running on port 3000.");
});
