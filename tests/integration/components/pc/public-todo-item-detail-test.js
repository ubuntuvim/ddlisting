import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pc/public-todo-item-detail', 'Integration | Component | pc/public todo item detail', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pc/public-todo-item-detail}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pc/public-todo-item-detail}}
      template block text
    {{/pc/public-todo-item-detail}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
