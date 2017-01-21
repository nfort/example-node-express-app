const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(function(req, res) {
    res.type('text/plain');
    res.status('404');
    res.send('404 - Not Found');
});

app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Internal Server Error');
});

app.listen(app.get('port'), function() {
   console.log(`Express has been start on http://localhost:${app.get('port')};\n
                Press Ctrl + C for finish`);
});
