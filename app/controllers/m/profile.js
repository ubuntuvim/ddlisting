// app/contollers/m/profile.js
import Ember from 'ember';

export default Ember.Controller.extend({
    // 使用一个URL参数设置tab标签页的激活状态
    queryParams: ['tabType'],
    tabType: '1',
    // 账户标签为激活状态
    tabsActive1: Ember.computed('tabType', function() {
        var tabType = this.get('tabType');
        return tabType === '1';
    }),
    // 设置标签为激活状态
    tabsActive2: Ember.computed('tabType', function() {
        var tabType = this.get('tabType');
        return tabType === '2';
    })
});
