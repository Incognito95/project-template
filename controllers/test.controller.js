exports.test = function (req, res, next) {
    res.render('page', { "title": "hello world", 
    "content": "kaffepause." }) // title and content variable that gets sent to our route
};