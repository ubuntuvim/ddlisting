import { moduleForModel, test } from 'ember-qunit';

moduleForModel('pc/pc-category/pc-todos/pc-todoitem', 'Unit | Model | pc/pc category/pc todos/pc todoitem', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
