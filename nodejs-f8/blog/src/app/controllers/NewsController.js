class NewController {

    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /new/:slug 
    show(req, res) {
        res.send('new details');
    }
}

module.exports = new NewController;

