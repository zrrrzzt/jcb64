[![Build Status](https://travis-ci.org/zrrrzzt/jcb64.svg?branch=master)](https://travis-ci.org/zrrrzzt/jcb64)
[![Coverage Status](https://coveralls.io/repos/zrrrzzt/jcb64/badge.svg?branch=master&service=github)](https://coveralls.io/github/zrrrzzt/jcb64?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# jcb64

Convert json to string, compress it and return a urlsafe base64 encoded string.

And the other way around.

## Usage

```JavaScript
const { pack, unpack } = require('jcb64')
const data = {
  "key": "value"
}
const b64 = pack(data)

console.log('b64') //=> eMKcwqtWw4pOwq1UwrJSKkvDjClNVcKqBQAoTAUh

const json = unpack(b64)

console.log(json) //=> {key: 'value'}

```

## License
[MIT](LICENSE)
