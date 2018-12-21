var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'bio';

	view.on('init', function (next) {

		var biography = keystone.list('Bio').model.find();

		biography.exec(function (err, result) {
			locals.bio = result[0];
			next(err);
		});
	});

	// Render the view
	view.render('bio');
};
