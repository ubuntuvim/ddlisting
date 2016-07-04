// 设置todo的star状态
export default function setStarStatus(id, star, store) {

    let ids = "#"+id;
    Ember.$(ids).hide();

    store.findRecord('todo-item', id).then((td) => {
        if (star) {
            td.set('star', false);
        } else {
            td.set('star', true);
        }
        // 更新创建时间
        // td.set('timestamp', new Date().getTime());
        td.save();
    });
    Ember.$(ids).slideDown();
}
