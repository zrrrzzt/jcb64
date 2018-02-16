const test = require('ava')
const { pack, unpack } = require('../../index')
const expectedb64 = 'eMKcwqtWw4pOwq1UwrJSKkvDjClNVcKqBQAoTAUh'
const data = {
  key: 'value'
}

test('it returns expected base64', t => {
  const b64 = pack(data)
  t.is(expectedb64, b64, 'base64 ok')
})

test('it returns expected json', t => {
  const json = unpack(expectedb64)
  t.deepEqual(json, data, 'json ok')
})
