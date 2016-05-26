// app/adapters/application.js
import Ember from 'ember';

import FirebaseAdapter from 'emberfire/adapters/firebase';

const { inject } = Ember;

// 使用firebase实时数据库
export default FirebaseAdapter.extend({
  firebase: inject.service()
});
