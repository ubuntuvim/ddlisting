import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todoItem');
  // this.route('/', { path: '/category/todos' });

  this.route('category', function() {  // #/category
      //  #/category/todos  --> #/category/lvyou
      this.route('todos', { path: '/:category_id' }, function() {
          //   #/category/todos/todoitem  --> #/category/luyou/-xxxsdf
          this.route('todoitem', { path: '/:todo_id' });
      });
  });

  this.route('mobile', function() {
    this.route('category', function() {
      this.route('toods', function() {
        this.route('todoitem');
      });
    });
  });

});
export default Router;
