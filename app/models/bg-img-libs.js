// app/models/bg-img-libs.js
import Model from 'ember-data/model';

// 背景图片库
export default Model.extend({
    // profile: DS.belongTo('profile'),
    imgTitle: DS.attr('string'),
    imgUrl: DS.attr('string'),  //图片地址
    imgUploadTime: DS.attr('number') //时间戳
});
