const test = require('ava')
const { pack, unpack } = require('../../index')
const expectedb64 = 'eJyrVspOrVSyUipLzClNVaoFAChMBSE'
const data = {
  key: 'value'
}

test('it returns expected base64', t => {
  const b64 = pack(data)
  t.is(expectedb64, b64, 'base64 ok')
})

test('it returns expected json from v1', t => {
  const json = unpack(expectedb64)
  t.deepEqual(json, data, 'json ok')
})
