// app/adapters/application.js
// import Ember from 'ember';
//
// import FirebaseAdapter from 'emberfire/adapters/firebase';
//
// const { inject } = Ember;
//
// // 使用firebase实时数据库
// export default FirebaseAdapter.extend({
//   firebase: inject.service()
// });

import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
    host: 'http://localhost:3000'
});
