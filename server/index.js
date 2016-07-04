/*jshint node:true*/

// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

module.exports = function(app) {
  var globSync   = require('glob').sync;
  var mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
  var proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

  // 文件上传组件
  var formidable = require('formidable'),
    http = require('http'),
    fs = require('fs'),
    util = require('util');

    var uploadProgress = require('node-upload-progress');


  // Log proxy requests
  var morgan  = require('morgan');
  app.use(morgan('dev'));

  mocks.forEach(function(route) { route(app); });
  proxies.forEach(function(route) { route(app); });

  console.log("启动文件上传服务……");

  uploadHandler = new uploadProgress.UploadHandler;
  uploadHandler.configure(function() {
    this.uploadDir = __dirname + '/public/bgs';
    // this.uploadDir = process.cwd()+"/public/bgs";
  });
  app.post('/upload2', function(req, res) {
      uploadHandler.upload(req, res);
      return;
  });

};
