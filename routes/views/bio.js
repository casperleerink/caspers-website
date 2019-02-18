const keystone = require('keystone');

exports = module.exports = function (req, res) {

	const view = new keystone.View(req, res);
	const locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'bio';

	view.on('init', function (next) {

		const biography = keystone.list('Bio').model.find();

		biography.exec(function (err, result) {
			locals.bio = result[0];
			next(err);
		});
	});

	// Render the view
	view.render('bio');
};
