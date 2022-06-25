var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница opera */ 
router.get('/opera', function(req, res, next){
  res.render('hero', {
    title: "Opera",
    picture: "images/opera.png",
    desc: 'Веб-браузер и пакет прикладных программ для работы в Интернете, выпускаемый компанией Opera Software'
  })
});

/* Страница chrome */ 
router.get('/chrome', function(req, res, next){
  res.render('hero', {
    title: "Chrome",
    picture: "images/chrome.png",
    desc: 'Браузер, разрабатываемый компанией Google на основе свободного браузера Chromium и движка Blink.'
  })
});

/* Страница tor */ 
router.get('/tor', function(req, res, next){
  res.render('hero', {
    title: "TOR",
    picture: "images/tor.png",
    desc: 'Свободное и открытое программное обеспечение для реализации второго и третьего поколения так называемой луковой маршрутизации.'
  })
});

module.exports = router;
