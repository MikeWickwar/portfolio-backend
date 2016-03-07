var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var Skills = function () {
  return knex('skills')
}
var Ed = function () {
  return knex('ed')
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PORTFOLIO' });
});

router.get('/skills', function(req, res, next) {
  Skills().select().then(function (skills) {
    res.json(skills)
  })
});

router.get('/ed', function(req, res, next) {
  Ed().select().then(function (ed) {
    res.json(ed)
  })
});

module.exports = router;
