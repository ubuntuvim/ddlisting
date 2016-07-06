/**
* 用户profile模型 app/models/profile.js
* @Author: ubuntuvim
* @Date:   2016-07-03T13:12:44+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-07T01:24:34+08:00
*/
import Model from 'ember-data/model';

export default Model.extend({
    // bgImg: DS.belongTo('bgImgLibs'),
    bgImg: DS.attr('string'),
    isOpenEmailNotification: DS.attr('boolean'),  //是否开启消息邮箱通知
    isOpenPromptTone: DS.attr('boolean'),  //是否开启提示音

    user: DS.belongsTo('user')
});
