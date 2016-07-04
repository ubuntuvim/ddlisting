// app/components/button-with-confirmation.js

import Ember from 'ember';

// 击按钮会弹出确认框
export default Ember.Component.extend({
    tagName: 'button',
    click() {
        if (confirm(this.get('text'))) {
          // trigger action on parent component
          this.get('onConfirm')();
        }
    }
});
