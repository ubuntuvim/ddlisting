/**
* 背景图片设置，
* @Author: ubuntuvim
* @Date:   2016-07-05T01:18:58+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-09T16:19:55+08:00
*/
import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        del(id) {
            this.store.findRecord('bg-img-libs', id).then((bg) => {
                bg.destroyRecord();
            });
        }
    }
});
