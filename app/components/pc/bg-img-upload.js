/**
* 上传图片并把图片存放的URL地址保存到firebase
* @Author: ubuntuvim
* @Date:   2016-07-05T22:30:05+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-07T00:02:16+08:00
*/
import Ember from 'ember';
import layout from '../templates/components/bg-img-upload';

export default Ember.Component.extend({
    layout,

    classNameBindings: [`active`],

    active: Ember.computed(`fileUrl`, function() {
        return !!this.get(`fileUrl`);
    }),

    transfer: Ember.inject.service(`profile-upload`),
    store: Ember.inject.service('store'),
    // click(ev) {
    //     ev.preventDefault();
    //     this.$(`input`).click();
    // },

    uploadFiles() {
        if (!Ember.$("#imgTitle").val()) {
            Ember.$("#imgTitle")[0].focus();
            Ember.$("#introText").addClass('has-error');
            Ember.$("#uploadLoadingText").show();
            Ember.$("#uploadLoadingText").html('<p class="text-danger">请选择输入图片说明</p>');
            return;
        }
        Ember.$("#introText").removeClass('has-error');
        // loading
        Ember.$("#uploadLoading").show();
        Ember.$("#uploadLoadingText").hide();
        // 如果是修改，此值不为空
        let objId = Ember.$("#imgId").val();
        // 如果仅仅是修改了title则不需要重新上传图片
        if (objId) {
            if (Ember.$.trim(Ember.$("#bgImgFile1").val()) === '' &&
            Ember.$.trim(Ember.$("#bgImgFile2").val()) === '' &&
            Ember.$.trim(Ember.$("#bgImgFile3").val()) === '') {
                this.updateBgImg(objId, 'url1', 'url2', 'url3');  //后3个参数无实际意义

                Ember.$("#uploadLoading").hide();
                Ember.$("#uploadLoadingText").show();
                Ember.$("#uploadLoadingText").html('<p class="text-success">修改成功</p>');

                return true;
            }
        }
        const { upload, deserializeResponse, requestError, destroyImage} = this.get(`transfer`);

        // 第一张图片 this.$(`input`).get(2)前2个input为普通的输入框
        const file1 = this.$(`input`).get(2).files[0];
        const oldFile1 = this.get(`fileUrl`);
        console.log(Ember.$.trim(Ember.$("#bgImgFile1").val()));
        var url1 = null;
        var url2 = null;
        var url3 = null;
        if (Ember.$.trim(Ember.$("#bgImgFile1").val()) !== '' && file1.type.indexOf(`image`) > -1) {
            if (destroyImage && oldFile1) {
                destroyImage(this.get(`fileUrl`));
            }
            Ember.RSVP.resolve(upload(file1)).then((response) => {
                    url1 = deserializeResponse(response);
                    // this.onchange(url1);
                    console.log('第一张图片 = ' + url1);

                    // 第二张图片
                    const file2 = this.$(`input`).get(3).files[0];
                    const oldFile2 = this.get(`fileUrl`);

                    if (Ember.$.trim(Ember.$("#bgImgFile2").val()) !== ''  && file2.type.indexOf(`image`) > -1) {
                        if (destroyImage && oldFile2) {
                            destroyImage(this.get(`fileUrl`));
                        }

                        Ember.RSVP.resolve(upload(file2)).then((response) => {
                                url2 = deserializeResponse(response);
                                // this.onchange(url2);
                                console.log('第二张图片 = ' + url2);
                                // 第三张图片
                                const file3 = this.$(`input`).get(4).files[0];
                                const oldFile3 = this.get(`fileUrl`);

                                if (Ember.$.trim(Ember.$("#bgImgFile3").val()) !== ''  && file3.type.indexOf(`image`) > -1) {
                                    if (destroyImage && oldFile3) {
                                        destroyImage(this.get(`fileUrl`));
                                    }

                                    Ember.RSVP.resolve(upload(file3)).then((response) => {
                                            url3 = deserializeResponse(response);
                                            // this.onchange(url3);
                                            console.log('第三张图片 = ' + url3);
                                            // 判断是修改还是新增
                                            if (!objId) { //新增
                                                this.addBgImg(url1, url2, url3);
                                            } else {  //修改
                                                this.updateBgImg(objId, url1, url2, url3)
                                            }

                                        }, (err) => {
                                            if (requestError) {
                                                requestError(err);
                                            }
                                    });
                                } else {  //第三个为空，则只保存前2张图片

                                    // 判断是修改还是新增
                                    if (!objId) { //新增
                                        this.addBgImg(url1, url2, null);
                                    } else {  //修改
                                        this.updateBgImg(objId, url1, url2, url3)
                                    }

                                }
                            }, (err) => {
                                if (requestError) {
                                    requestError(err);
                                }
                        });
                    } else {  //第二个为空，则只保存前1张图片
                        // 判断是修改还是新增
                        if (!objId) { //新增
                            this.addBgImg(url1, null, null);
                        } else {  //修改
                            this.updateBgImg(objId, url1, url2, url3)
                        }
                    }
                }, (err) => {
                    if (requestError) {
                        requestError(err);
                    }
            });
        } else {
            Ember.$("#bgImgFile1")[0].focus();
            Ember.$("#fileInputGroup").addClass('has-error');
            Ember.$("#uploadLoading").hide();
            Ember.$("#uploadLoadingText").show();
            Ember.$("#uploadLoadingText").html('<p class="text-danger">请选择要上传的图片</p>');
        }

    },  // upload

    stopPropagation(ev) {
        ev.stopPropagation();
    },
    addBgImg(url1, url2, url3) {
        var data = {
            imgTitle: Ember.$("#imgTitle").val(),
            imgUploadTime: new Date().getTime() //时间戳
        };

        if (url1) {
            data.imgUrl = url1  //图片地址
        }
        if (url2) {
            data.imgThumb = url2;
        }
        if (url3) {
            data.imgThumb2x = url3;
        }
        this.get('store').createRecord('bg-img-libs', data).save().then(() => {
            Ember.$("#uploadLoading").hide();
            Ember.$("#uploadLoadingText").show();
            // 清空文件上传框
            Ember.$("#bgImgFile1").val();
            Ember.$("#bgImgFile2").val();
            Ember.$("#bgImgFile3").val();
        });
    },
    updateBgImg(id, url1, url2, url3) {
        this.get('store').findRecord('bg-img-libs', id).then((obj) => {
            obj.set('imgTitle', Ember.$("#imgTitle").val());
            if (Ember.$.trim(Ember.$("#bgImgFile1").val()) !== '') {
                obj.set('imgUrl', url1);
            }
            if (Ember.$.trim(Ember.$("#bgImgFile2").val()) !== '') {
                obj.set('imgThumb', url2);
            }
            if (Ember.$.trim(Ember.$("#bgImgFile3").val()) !== '') {
                obj.set('imgThumb2x', url3);
            }
            obj.save().then(() => {
                Ember.$("#uploadLoading").hide();
                Ember.$("#uploadLoadingText").show();
                // 清空文件上传框
                Ember.$("#bgImgFile1").after(Ember.$("#bgImgFile1").clone().val(""));
                Ember.$("#bgImgFile1").remove();
                Ember.$("#bgImgFile2").after(Ember.$("#bgImgFile2").clone().val(""));
                Ember.$("#bgImgFile2").remove();
                Ember.$("#bgImgFile3").after(Ember.$("#bgImgFile3").clone().val(""));
                Ember.$("#bgImgFile3").remove();
            });
        });
    }
});
