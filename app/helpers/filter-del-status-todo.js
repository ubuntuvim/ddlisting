import Ember from 'ember';

// 过滤删除状态的子任务
export function filterDelStatusSubTodo(params/*, hash*/) {

    // let oldTitle = params[1];
    let queryTitle = params[2];
    if (queryTitle) {
        return params[0] !== 3 && params[1].indexOf(queryTitle) != -1;
    } else {
        return params[0] !== 3;
    }

}

export default Ember.Helper.helper(filterDelStatusSubTodo);
