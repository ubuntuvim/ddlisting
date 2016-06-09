// app/serializers/application.js
import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
    // 转换属性的命名规则，默认Ember会吧属性名转换为中划线方式发送数据到后端
    // 但是后端不支持中划线，后端使用下划线方式
    keyForAttribute: function(attr) {
        return Ember.String.underscore(attr);
    }
});
