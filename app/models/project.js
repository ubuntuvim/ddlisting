/**
* 项目模型类 app/models/project.js
* @Author: ubuntuvim
* @Date:   2016-06-25T00:24:36+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-07T01:25:03+08:00
*/
import DS from 'ember-data';

/**
 * 可以这种todo属于某个项目
 */
export default DS.Model.extend({
    userId: DS.attr('string'),
    // projCode: DS.attr('string'),
    projName: DS.attr('string'),
    timestamp: DS.attr('number'),  //项目创建时间
    projStatus: DS.attr('number'), // 项目状态：1-正常；2-删除；3-过期
    isDefaultProj: DS.attr('boolean'), //true-默认分类（默认分类一个用户只有一个）
    todoItems: DS.hasMany('todo-item')  //关联todo
});
