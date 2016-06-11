// app/adapters/application.js
import Ember from 'ember';

import FirebaseAdapter from 'emberfire/adapters/firebase';

const { inject } = Ember;

// 使用firebase实时数据库
export default FirebaseAdapter.extend({
  firebase: inject.service()
});

// import JSONAPIAdapter from 'ember-data/adapters/json-api';
//
// export default JSONAPIAdapter.extend({
//     host: 'http://localhost:3000'
//     // host: 'https://ddlisting.wilddogio.com',
//   //   ajaxOptions: function(url, type, options) {
//   //       var hash = this._super(url, type, options);
//   //       hash.method = "post";
//   //       return hash;
//   //   },
//   //   headers: {
//   //       'API_KEY': 'secret key',
//   //       'ANOTHER_HEADER': 'Some header value'
//   // }
// });
