//app/models/custom-inflector-rules.js

import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

// 转换请求的实体类名
// http://domain/todo-items  --> http://domain/todoItems
inflector.irregular('todo-item', 'todoItems');

// Meet Ember Inspector's expectation of an export
export default {};
