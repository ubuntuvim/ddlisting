import Ember from 'ember';

export default Ember.Component.extend({

    actions: {
        showDetail(id) {
            Ember.$("#pcIndexTodoDetailModalWin").modal('toggle');
        }
    }
});
