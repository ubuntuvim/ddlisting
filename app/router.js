import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todoItem');
  // this.route('/', { path: '/category/todos' });

  this.route('category', function() {
    this.route('todos', { path: '/:category_id' }, function() {
      this.route('todoitem', { path: '/:todo_id' });
    });
  });
  this.route('user');
});

export default Router;
