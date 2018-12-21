var keystone = require('keystone');
var Types = keystone.Field.Types;

var Bio = new keystone.List('Bio', {nodelete: true});

Bio.add({
 title: { type: Types.Text, initial: true, required: true, index: true },
 subtitle: { type: Types.Text, initial: true, required: true},
 description: { type: Types.Html, wysiwyg: true, initial: true, required: true },
 image: {type: Types.CloudinaryImage, initial: true }
});

Bio.defaultColumns = "title";

Bio.register();
