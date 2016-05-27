import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // pc端
  this.route('pc', function() {
    this.route('category', function() {
        // pc.category.todos
      this.route('todos', { path: '/:category_id' }, function() {
          this.route('todoitem', { path: '/:todo_id' });
      });
    });
    // this.route('todoitem', { path: '/:todo_id' });
  });

  // this.route('m', function() {
  //   this.route('category');
  //   this.route('todos.category', { path: '/todos/:category_id' });
  //   this.route('todoitem', { path: '/todos/:category_id/:todo_id' });
  // });

  this.route('m', function() {
    this.route('category', function() {
        // pc.category.todos
      this.route('todos', { path: '/:category_id' }, function() {
        //   this.route('todoitem', { path: '/:todo_id' });
      });
    });
    this.route('todoitem', { path: '/:todo_id' });
  });
});
export default Router;
