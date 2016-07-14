import Ember from 'ember';
import logout from '../../utils/logout';

export default Ember.Route.extend({
    // model() {
    //     return Ember.RSVP.hash({
    //         users: this.store.findAll('user')
    //     });
    // },

    actions: {
        logout() {
            logout();
        }
    }
});
