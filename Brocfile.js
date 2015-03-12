/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  dotEnv: { clientAllowedKeys: ['GITHUB_CLIENT_ID'] }
});

var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');
var sinon = pickFiles('vendor/sinon', {
    srcDir: '/',
    files: ['index.js'],
    destDir: '/assets/sinon'
});

module.exports = mergeTrees([app.toTree(), sinon]);

app.import('bower_components/moment/moment.js');

var index = app.legacyFilesToAppend.indexOf('bower_components/handlebars/handlebars.runtime.js');
if(index) {
    app.legacyFilesToAppend[index] = 'bower_components/handlebars/handlebars.js';
}

module.exports = app.toTree();
