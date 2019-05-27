var express = require('express');

// создаём Express-приложение
var app = express();

// создаём маршрут для главной страницы
// http://localhost:8080/
app.get('/', function (req, res) {
    res.sendfile('index.html');
});

app.get('/word.css', function (req, res) {
    res.sendfile('word.css');
});

var quotes = [
    {
        "text": "Что хочешь помнить, то всегда помнишь.",
        "author": "Р. Бредбери"
    },
    {
        "text": "И вообще не бывает так, чтобы все стало, как было.",
        "author": "М. Булгаков"
    },
    {
        "text": "Громким смехом не скроешь дикой боли.",
        "author": "М. Цветаева"
    },
    {
        "text": "Берегите в себе человека.",
        "author": "А. Чехов"
    },
    {
        "text": "Пока человек не сдается, он сильнее своей судьбы.",
        "author": "Э. Ремарк"
    },
    {
        "text": "Поверь мне — счастье только там, Где любят нас, где верят нам!",
        "author": "М. Лермонтов"
    },
];

app.get('/api/quotes/:quoteId', function (req, res) {
    // res.send(req.params)
    res.send(quotes[req.params.quoteId]);
});

// запускаем сервер на порту 8080
app.listen(8080);
// отправляем сообщение
console.log('Сервер стартовал!');
