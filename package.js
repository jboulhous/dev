Package.describe({
  name: 'jboulhous:dev',
  version: '1.0.1',
  summary: 'Meteor.isDevelopment in dev mode',
  git: 'https://github.com/jboulhous/dev',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
//  api.versionsFrom('1.0.4');
  api.addFiles('dev.js');
});
