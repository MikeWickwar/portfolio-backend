var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var Skills = function () {
  return knex('skills')
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

module.exports = router;
