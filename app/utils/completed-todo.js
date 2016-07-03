// 公共部分：设置todo为完成状态，并且同步设置所属的子todo的状态
export default function completedTodo(id, check, store) {
    store.findRecord('todo-item', id).then((td) => {
        if (check) {
            td.set('recordStatus', 1);
            td.set('checked', false);
            // 设置所有的子todo为非完成状态
            td.get('childTodos').forEach((std) => {
                store.findRecord('todo-item', std.id).then(function(td) {
                    td.set('recordStatus', 1);
                    td.set('checked', false);
                    td.save();
                });
            });
        } else {  //完成状态
            td.set('checked', true);
            td.set('recordStatus', 2);
            // 设置所有的子todo为完成状态
            td.get('childTodos').forEach((std) => {
                store.findRecord('todo-item', std.id).then(function(td) {
                    td.set('recordStatus', 2);
                    td.set('checked', true);
                    td.save();
                });
            });
        }
        td.save();
    });
}
