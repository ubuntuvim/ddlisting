// import Ember from 'ember';
//
// export default Ember.Service.extend({
// });

import CloudinaryProfileUpload from 'ember-profile-upload/services/cloudinary-profile-upload';

export default CloudinaryProfileUpload.extend({

    // store: Ember.inject.service('store'),
    //
    // deserializeResponse(response) {
    //     // const data = response.result.files.value[0];
    //     // let url = `${config.apiHost}/api/containers/${data.container}/download/${data.name}`;
    //     var url = response.url;
    //     var public_id = response.public_id;
    //     var created_at = response.created_at;
    //     console.log("url === " + url);
    //     console.log("public_id === " + public_id);
    //     console.log("created_at === " + created_at);
    //     // 新增背景图片
    //
    //     return url;
    // }
});
