const pako = require('pako')
const Buffer = require('buffer/').Buffer

module.exports.pack = function (json) {
  const str = pako.deflate(JSON.stringify(json), {to: 'string'})
  const buf = Buffer.from(str)
  return buf.toString('base64')
}

module.exports.unpack = function (b64) {
  const buf = Buffer.from(b64.toString('base64'), 'base64')
  const json = JSON.parse(pako.inflate(buf.toString(), { to: 'string' }))
  return json
}
