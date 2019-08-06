const { test } = require('../controllers/test.controller'); // can call multiple functions

module.exports = function (app) {
    app.get('/', test);
};