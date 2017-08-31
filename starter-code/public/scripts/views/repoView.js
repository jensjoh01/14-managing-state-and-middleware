'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  // COMMENT DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // This function is appending repos as list items to an unordered list.  It is basically rendering our repos to the dom.  This function is being called by request repos, which is being called in the about controller, which is invoked by page JS when the user navigates to /about in the URL.  It calls a ui() function which configures the ui and prepairs it for our repo view.  That funciton is locally scoped inside of this IFFE.
  repoView.index = function() {
    ui();

    $('#about ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
