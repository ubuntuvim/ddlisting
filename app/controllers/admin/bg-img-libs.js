import Ember from 'ember';

export default Ember.Controller.extend({
    noFileUploading: Ember.computed.not('fileUploading'),
    hideControls: Ember.computed.or('fileUploading', 'fileUploaded'),

    actions: {
        addUpload() {
          this.set('fileUploading', true);
        },

        doneUpload() {
          this.set('fileUploaded', true);
          this.set('fileUploading', false);
        }
    }
});
