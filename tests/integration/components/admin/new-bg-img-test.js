import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('admin/new-bg-img', 'Integration | Component | admin/new bg img', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{admin/new-bg-img}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#admin/new-bg-img}}
      template block text
    {{/admin/new-bg-img}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
