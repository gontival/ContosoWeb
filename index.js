var express = require('express');
var app = express();
var formidable = require('formidable');

app.use(express.static(__dirname + '/WebCalculatorSolution/WebCalculator'));

app.get('/', function (request, response) {
    response.redirect('default.html');
});

app.post('/ContactMessage', function (request, response) {
    var form = new formidable.IncomingForm();
    form.parse(request, function (err, fields) {
        var firstName = fields.firstName;
        var lastName = fields.lastName;
        var email = fields.email;
        var message = fields.message;

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('Thank you ' + firstName + ' ' + lastName + '<br/>');
        response.write('We will contact you soon at ' + email + '<br/>');
        response.end('Your message : ' + message + '<br/>');
        console.log('Handled request for ' + firstName + ' ' + lastName);
    });
});

app.post('/ContactService', function (request, response) {
    var form = new formidable.IncomingForm();
    form.parse(request, function (err, fields) {
        var firstName = fields.firstName;
        var lastName = fields.lastName;
        var email = fields.email;
        var message = fields.message;
        var result = 'Thank you ' + firstName + ' ' + lastName + '<br/>'
                    + 'We will contact you soon at ' + email + '<br/>'
                    + 'Your message : ' + message + '<br/>';
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end('{ "result" : "'+ result + '"}');
        console.log('Handled request for ' + firstName + ' ' + lastName);
    });
});


var port = 8080;
app.listen(port);
console.log('Listening on port: ' + port);
