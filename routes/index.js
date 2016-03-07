var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var Skills = function () {
  return knex('skills')
}
var Ed = function () {
  return knex('ed')
}
var Exp = function () {
  return knex('exp')
}
var Proj = function () {
  return knex('projects')
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

router.get('/exp', function(req, res, next) {
  Exp().select().then(function (exp) {
    res.json(exp)
  })
});

router.get('/projects', function(req, res, next) {
  Proj().select().then(function (projects) {
    res.json(projects)
  })
});

module.exports = router;
