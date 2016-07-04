// app/routes/pc.js
import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return Ember.RSVP.hash({
            loginUser: sessionStorage.getItem("__LOGIN_USER_ID__"),
            todos: this.store.findAll('todo-item'),
            defaultProjectId: sessionStorage.getItem('__DEFAULT_PROJECT_ID__')
        });
    }
});
