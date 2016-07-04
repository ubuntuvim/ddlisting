import Model from 'ember-data/model';

export default Model.extend({
    // bgImg: DS.belongTo('bgImgLibs'),
    bgImg: DS.attr('string'),
    isOpenEmailNotification: DS.attr('boolean'),  //是否开启消息邮箱通知
    isOpenPromptTone: DS.attr('boolean'),  //是否开启提示音

    user: DS.belongTo('user')
});
