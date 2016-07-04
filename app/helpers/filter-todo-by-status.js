// app/Helpers/filter-todo-by-status.js
import Ember from 'ember';

// 根据todo的状态过滤
export function filterTodoByStatus(params/*, hash*/) {
    let status = params[0];  //todo状态
    let srcTitle = params[1];  //todo 标题
    let queryTitle = params[2];  //模糊查询值
    let type = params[3]; //过滤类型

    if (type) {
        if ('__COMPLETED_NOT_DEL__' === type) {  //显示完成的、非删除状态的todo
            if (queryTitle && srcTitle) {
                return status === 2 && srcTitle.indexOf(queryTitle) != -1;
            } else {
                return status === 2;  //只显示未完整状态todo
            }
        } else if ('__NOT_COMPLETED_NOT_DEL__' === type) {  //未完成的、非删除状态
            if (queryTitle && srcTitle) {
                return status === 1 && srcTitle.indexOf(queryTitle) != -1;
            } else {
                return status === 1;  //只显示未完整状态todo
            }
        } else {  //  未完成、完成状态
            return status !== 3;
        }
    } else {
        return true;
    }

}

export default Ember.Helper.helper(filterTodoByStatus);
