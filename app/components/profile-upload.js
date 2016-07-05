//
import Ember from 'ember';
import layout from '../templates/components/profile-upload';

export default Ember.Component.extend({
    layout,

    classNameBindings: [`active`],

    active: Ember.computed(`fileUrl`, function() {
        return !!this.get(`fileUrl`);
    }),

    transfer: Ember.inject.service(`profile-upload`),

    click(ev) {
        ev.preventDefault();
        this.$(`input`).click();
    },

    actions: {
        uploadLoading() {

        },

        uploadFiles() {
            console.log('-----------------------');
            // const file = this.$(`input`).get(0).files[0];
            const fileList = this.$(`input`).get(0).files;
            const { upload, deserializeResponse, requestError, destroyImage} = this.get(`transfer`);
            const oldFile = this.get(`fileUrl`);
            let urlArr = [];
            fileList.forEach(function(file) {
                console.log('file ========= ' + file);

                if (file && file.type.indexOf(`image`) > -1) {
                  if (destroyImage && oldFile) {
                    destroyImage(this.get(`fileUrl`));
                  }

                  Ember.$("#uploadLoading").show();

                  Ember.RSVP.resolve(upload(file)).then((response) => {
                    //   response里包含了返回的所有参数：
                    //     var url = response.url;
                    //     var public_id = response.public_id;
                    //     var created_at = response.created_at;
                    //     console.log("url === " + url);
                    //     console.log("public_id === " + public_id);
                    //     console.log("created_at === " + created_at);
                    const picUrl = deserializeResponse(response);
                    this.onchange(picUrl);
                    console.log("picUrl ========= " + picUrl);
                    urlArr.pushObject(picUrl);
                  }, (err) => {
                    if (requestError) {
                      requestError(err);
                    }
                  });
                }
            });

            let imgTitle = Ember.$("#imgTitle").val();
            console.log('imgTitle === ' + imgTitle);
            this.store.createRecord('bg-img-libs', {
                imgTitle: imgTitle,
                imgUrl: urlArr.objectAt(0),  //图片地址
                imgThumb: urlArr.objectAt(1),  //缩略图图片地址
                imgThumb2x: urlArr.objectAt(2),  //2倍缩略图图片地址，
                imgUploadTime: new Date().getTime() //时间戳
            }).save().then(() => {
                Ember.$("#uploadLoading").hide();
            });

        },
        stopPropagation(ev) {
          ev.stopPropagation();
        }
    }

});
