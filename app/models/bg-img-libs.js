/**
* 背景图片库模型类 app/models/bg-img-libs.js
* @Author: ubuntuvim
* @Date:   2016-07-05T22:30:05+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-07T21:59:56+08:00
*/
import Model from 'ember-data/model';
import DS from 'ember-data';

// 背景图片库
export default Model.extend({
    // profile: DS.belongTo('profile'),
    imgTitle: DS.attr('string'),
    imgUrl: DS.attr('string'),  //图片地址
    imgThumb: DS.attr('string'),  //缩略图图片地址
    imgThumb2x: DS.attr('string'),  //2倍缩略图图片地址，
    imgUploadTime: DS.attr('number') //时间戳
});
