import Ember from 'ember';

// ember2.0之后不支持在模板中使用script标签，
// 通过组件方式加入
export default Ember.Component.extend({
	tagName: 'script',
    attributeBindings: ['type'],
    type: 'text/javascript'
});
