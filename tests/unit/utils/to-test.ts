import { to } from '@triptyk/ember-utils/utils/to';
import { module, test } from 'qunit';

module('Unit | Utility | to', function () {
  async function thatThrows(throws: boolean): Promise<string> {
    if (throws) throw new Error('foo');
    return 'bar';
  }

  test('it returns error result when error is catched', async function (assert) {
    let { ok, result } = await to(thatThrows(true), Error);
    assert.false(ok);
    assert.deepEqual(result, new Error('foo'));
  });

  test('it return success result when no error happens', async function (assert) {
    let { ok, result } = await to(thatThrows(false), Error);
    assert.true(ok);
    assert.deepEqual(result, 'bar');
  });

  test('accepts function as callback', async function (assert) {
    let { ok, result } = await to(() => thatThrows(false), Error);
    assert.true(ok);
    assert.deepEqual(result, 'bar');
  });

  test('unknown errors are still thrown', async function (assert) {
    await assert.rejects(to(thatThrows(true), undefined as never));
  });
});
