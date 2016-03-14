var moment = require('moment');

exports.Journal = function() {
  this.title = "string";
};

exports.Text = function(title, body) {
  this.title = title;
  this.body  = body;
  this.timeCreated = moment().format('LLL');
};

exports.Text.prototype.getWordCount = function() {
  var countArray = this.body.split(" ");
  this.count = countArray.length;
};
