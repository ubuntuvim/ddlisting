import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // pc端路由
  this.route('pc', function() {
    this.route('category', function() {
        // pc.category.todos
      this.route('todos', { path: '/:category_id' }, function() {
          this.route('todoitem', { path: '/:todo_id' });
      });
    });
    // this.route('todoitem', { path: '/:todo_id' });
    // this.route('newCategory');
  });

  // this.route('m', function() {
  //   this.route('category');
  //   this.route('todos.category', { path: '/todos/:category_id' });
  //   this.route('todoitem', { path: '/todos/:category_id/:todo_id' });
  // });
  // 手机端路由
  this.route('m', function() {
    this.route('category');
    this.route('todos', { path: '/category/:category_id/todos' });
    this.route('todoitem', { path: '/category/:category_id/todos/:todo_id' });
    this.route('search', { path: '/category/:category_id' });
    this.route('profile');
    this.route('accountDetail');
    this.route('passwordSetting');
    this.route('profileBgSetting');
    this.route('profileFeedback');
  });

});
export default Router;
