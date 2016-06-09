// app/routes/category.js

import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            categorys: this.store.findAll('category'),
            todos: this.store.findAll('todo-item')
        });
    }
});
