'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // COMMENT DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // This function is loading our about controller view.  It is called by page.js when the /about rount is found in the URL.  It calls repoView.index as a callback funciton to repos.requestRepos which is basically calling all of the repos with an ajax request then loading those repos into list items on the dom with repoView.index.  RepoView.index exists in repoView.js.  Repos.requestRepos lives in repo.js.
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
