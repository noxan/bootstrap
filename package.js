// package metadata file for Meteor.js

Package.describe({
  name: 'noxan:picostrap',  // http://atmospherejs.com/noxan/picostrap
  summary: 'A minimalistic aproach to Twitter\'s bootstrap.',
  version: '3.3.4',
  git: 'https://github.com/noxan/picostrap.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');
  api.addFiles([
    'dist/fonts/glyphicons-halflings-regular.eot',
    'dist/fonts/glyphicons-halflings-regular.svg',
    'dist/fonts/glyphicons-halflings-regular.ttf',
    'dist/fonts/glyphicons-halflings-regular.woff',
    'dist/fonts/glyphicons-halflings-regular.woff2',
    'dist/css/picostrap.css',
    'dist/js/picostrap.js',
  ], 'client');
});
