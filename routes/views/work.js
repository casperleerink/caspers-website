const keystone = require('keystone');

exports = module.exports = function (req, res) {

  const view = new keystone.View(req, res);
  const locals = res.locals;

  // Set locals
  locals.section = 'work';
  locals.data = {
    works: [],
  };

  // Load the current work
  view.on('init', function (next) {

    const q = keystone.list('Work').model.findById(req.params.id);

    q.exec(function (err, result) {
      locals.work = result;
      next(err);
    });

  });


  // Render the view
  view.render('work');
};
