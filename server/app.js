const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set('views', path.join(__dirname + '/../client'));
app.set('view engine', 'ntl');

app.get('/', function (req, res) {
  res.render('index', { title: 'Template Engine', message: 'Hola Mundo Node'});
});


app.engine('ntl', function (filePath, options, callback) {
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(new Error(err));
    var rendered = content.toString().replace('#title#', ''+ options.title +'')
    .replace('#message#', ''+ options.message +'');
    return callback(null, rendered);
  });
});

app.listen(3000);
console.log('Almundo app and listening on port 3000');
