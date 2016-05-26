import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            categorys: this.store.findAll('project'),
<<<<<<< HEAD
            todos: this.store.findAll('todo-item')
=======
            todoItems: this.store.findAll('todo-item')
>>>>>>> b9e7347ab8469f935fae0e357f4e970655a0837d
        });
    }
});
