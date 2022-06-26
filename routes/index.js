var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница stars */ 
router.get('/stars', function(req, res, next){
  res.render('hero', {
    title: "Звёздная ночь",
    picture: "images/stars.png",
    desc: 'Одна из наиболее известных картин нидерландского художника-постимпрессиониста Винсента Ван Гога. Представляет вид из восточного окна спальни Ван Гога в Сен-Реми-де-Прованс на предрассветное небо и вымышленную деревню. Картина написана в июне 1889 года; с 1941 года хранится в Музее современного искусства в Нью-Йорке.'
  })
});

/* Страница giraffe */ 
router.get('/giraffe', function(req, res, next){
  res.render('hero', {
    title: "Жираф в огне",
    picture: "images/giraffe.png",
    desc: '«Жираф в огне» – одна из известнейших картин Сальвадора Дали, объединяющая сразу несколько излюбленных образов художника. Центральная фигура – женщина с выдвижными ящиками на теле'
  })
});

/* Страница blue */ 
router.get('/blue', function(req, res, next){
  res.render('hero', {
    title: "Голубая обнаженная",
    picture: "images/blue.png",
    desc: 'Серия цветных литографий Анри Матисса, выполненных из вырезов, изображающих обнаженные фигуры в различных позах.'
  })
});

module.exports = router;
