/**
* 清单广场用户列表  app/components/pc/pc-index-user-list-panel.js
* @Author: ubuntuvim
* @Date:   2016-07-19T01:49:32+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-19T02:02:58+08:00
*/
import Ember from 'ember';

export default Ember.Component.extend({

    users: Ember.computed(function() {
        return this.store.findAll('user');
    }),
    enabledUserList: Ember.computed('users.@each.status', function() {
        return this.get('users').filter((u) => {
            return u.get('status') === 1;
        });
    })
});
