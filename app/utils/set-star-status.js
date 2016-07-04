// 设置todo的star状态
export default function setStarStatus(id, star, store) {
    store.findRecord('todo-item', id).then((td) => {
        if (star) {
            td.set('star', false);
        } else {
            td.set('star', true);
        }
        td.save();
    });
}
