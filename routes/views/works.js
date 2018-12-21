var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'works';

	view.on('init', function (next) {

		var works = keystone.list('Work').model.find().sort({date: -1});

		works.exec(function (err, results) {
			locals.works = results;
			next(err);
		});
	});

	// Render the view
	view.render('works');
};
