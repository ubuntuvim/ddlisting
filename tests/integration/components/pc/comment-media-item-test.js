import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pc/comment-media-item', 'Integration | Component | pc/comment media item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pc/comment-media-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pc/comment-media-item}}
      template block text
    {{/pc/comment-media-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
