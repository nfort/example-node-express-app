const fortunes = [
    'Conquer your fears or they will overcome you',
    'Rivers need sources',
    'Don\'t be afraid of the unknown',
    'You\'ll find a pleasant surprise',
    'it is ease wherever possible'
];

exports.getFortunes = function() {
    const idx = Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];
};
