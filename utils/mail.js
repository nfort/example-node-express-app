const nodemailer = require('nodemailer');
const credendatials = require('../credentials');

module.exports = function() {
    const mailTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: credendatials.google.login,
            pass: credendatials.google.pass
        }
    });

    const from = '"Meadowlark Travel" <meadowlark@meadowlark.com';
    const errorRecipient = 'yourmail@gmail.com';

    return {
        send: function(to, subj, body) {
            mailTransport.sendMail({
                from,
                to,
                subject: subj,
                html: body,
                generateTextFromHtml: true
            }, function(err) {
                if (err) {
                    console.log('Not available for delivery', err);
                }
            });
        },

        emailError: function(message, filename, exception) {
            let body = '<h1>Meadowlark Travel Site Error</h1>' +
                    'message:<br><pre>' + message + '</pre><br>';

            if (exception) body += 'exception:<br><pre>' + exception + '</pre><br>';
            if (filename) body += 'filename:<br><pre>' + filename + '</pre><br>';

            mailTransport.send({
                from,
                to: errorRecipient,
                subject: 'Error',
                html: body,
                generateTextFromHtml: true
            }, function(err) {
                if (err) console.log('Не возможно');
            })
        }
    }
};
