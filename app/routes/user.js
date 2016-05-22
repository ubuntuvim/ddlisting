import Ember from 'ember';

export default Ember.Route.extend({
    model() {
    //    return this.store.createRecord('user');
        return this.store.findAll('users');
   },
   actions: {
    //  处理模板上输入的数据
    saveLibrary(user) {
        // console.log('user === ',JSON.stringify(user));
    //   user.save();
        return Ember.$.ajax('http://localhost:8080', "POST", { data: JSON.stringify(user) });
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
