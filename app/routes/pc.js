// app/routes/pc.js
import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        // console.log("--------"+Ember.computed.none(sessionStorage.getItem("__LOGIN_USER__")));
        return Ember.RSVP.hash({
            loginUser: sessionStorage.getItem("__LOGIN_USER__"),
            todos: this.store.findAll('todo-item')
        });
    }
});
