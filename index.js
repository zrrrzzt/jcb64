const pako = require('pako')
const Buffer = require('buffer/').Buffer

module.exports.pack = json => {
  const str = pako.deflate(JSON.stringify(json), {to: 'string'})
  const buf = Buffer.from(str)
  return buf.toString('base64')
}

module.exports.unpack = b64 => {
  const buf = Buffer.from(b64.toString('base64'), 'base64')
  const json = JSON.parse(pako.inflate(buf.toString(), { to: 'string' }))
  return json
}
