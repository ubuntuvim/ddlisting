import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pc-index-todo-item', 'Integration | Component | pc index todo item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pc-index-todo-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pc-index-todo-item}}
      template block text
    {{/pc-index-todo-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
