import Ember from 'ember';
<<<<<<< HEAD
import FirebaseAdapter from 'emberfire/adapters/firebase';

const { inject } = Ember;

export default FirebaseAdapter.extend({
  firebase: inject.service(),
=======
import DS from 'ember-data';

// import FirebaseAdapter from 'emberfire/adapters/firebase';
import JSONAPIAdapter from 'ember-data/adapters/json-api';


// export default JSONAPIAdapter.extend({
//     // firebase: inject.service(),
//     host: 'http://localhost:8080',
//     headers: {
//         'ContentType': 'application/vnd.api+json',
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Credentials': true
//     },
    // extractArray: function(store, type, payload) {
    //     // ...
    //     return this._super(store, type, payload); // added this return statement
    // }
>>>>>>> b9e7347ab8469f935fae0e357f4e970655a0837d
});
