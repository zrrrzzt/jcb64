const pako = require('pako')
const Buffer = require('buffer/').Buffer

function urlEncode (b64) {
  return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function urlDecode (encoded) {
  encoded = encoded.replace(/-/g, '+').replace(/_/g, '/')
  while (encoded.length % 4) {
    encoded += '='
  }
  return encoded
}

module.exports.pack = json => {
  const str = pako.deflate(JSON.stringify(json))
  const buf = Buffer.from(str)
  return urlEncode(buf.toString('base64'))
}

module.exports.unpack = b64 => {
  const buf = Buffer.from(urlDecode(b64).toString('base64'), 'base64')
  const json = JSON.parse(pako.inflate(buf, { to: 'string' }))
  return json
}
