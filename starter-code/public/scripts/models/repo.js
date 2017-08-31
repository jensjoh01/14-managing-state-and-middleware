'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // COMMENT DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // This function sends an ajax request to our server for a github repo.  It is being called in our aboutController.js file which will load when /about is in the URL and detected by page.js.  It is calling one other function as a callback function which is app.repoView.index which is a function that loads all of the repos that it requested to the dom.  That function lives in repoView.js.
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
