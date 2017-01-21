const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.set('port', process.env.PORT || 3000);
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.use(function(req, res) {
    res.status('404');
    res.render('400');
});

app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function() {
    console.log(`Express has been start on http://localhost:${app.get('port')};\n` +
                'Press Ctrl + C for finish');
});
