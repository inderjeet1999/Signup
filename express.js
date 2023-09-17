var express = require('express');
var fs = require('fs'); // Require the 'fs' module for file operations
var app = express();

app.use(express.static('public'));

app.get('/process_login', function (req, res) {
    var response1 = {
        first_name: req.query.first_name,
        last_name: req.query.last_name,
        Email: req.query.Email,
    };

    // Convert the form data to JSON format
    var jsonData = JSON.stringify(response1);

    // Write the data to a text file
    fs.writeFile('form_data.txt', jsonData, 'utf8', function (err) {
        if (err) {
            console.error(err);
            return res.status(500).send('Error writing to file');
        }
        console.log('Data written to form_data.txt');
    });

    res.end(JSON.stringify(response1));
});

var server = app.listen(2000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
