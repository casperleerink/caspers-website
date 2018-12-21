var keystone = require('keystone');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'work';
  locals.data = {
    works: [],
  };

  // Load the current work
  view.on('init', function (next) {

    var q = keystone.list('Work').model.findById(req.params.id);

    q.exec(function (err, result) {
      locals.work = result;
      next(err);
    });

  });


  // Render the view
  view.render('work');
};
