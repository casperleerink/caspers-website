var keystone = require('keystone');
var Types = keystone.Field.Types;

var Work = new keystone.List('Work', {nodelete: true});

Work.add({
  title: { type: Types.Text, initial: true, required: true },
  subtitle: { type: Types.Text},
  instrumentation: { type: Types.Text, required: true, initial: true},
  date: { type: Types.Datetime, default: Date.now, required: true, initial: true },
  image: { type: Types.CloudinaryImage, autoCleanup: true, initial: true},
  description: { type: Types.Html, wysiwyg: true},
  audio_url: { type: Types.Text },
  video_url: {type: Types.Text }
});

Work.defaultColumns = "title";

Work.register();
