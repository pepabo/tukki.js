tukki.js
========

Simple Nodejs wrapper for MuumuuDomain API

<a href="https://www.npmjs.com/package/muumuu" title="npm"><img src="http://img.shields.io/npm/v/muumuu.svg?style=flat-square"></a>
<a href="https://travis-ci.org/pepabo/tukki.js" title="travis"><img src="https://img.shields.io/travis/pepabo/tukki.js.svg?style=flat-square"></a>
<a href="https://coveralls.io/github/pepabo/tukki.js" title="coveralls"><img src="https://img.shields.io/coveralls/pepabo/tukki.js.svg?style=flat-square"></a>
<a href="https://github.com/pepabo/tukki.js/blob/master/MIT-LICENSE" title="MIT License"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square"></a>

Installation
------------

```sh
$ npm install muu --save
```

Usage
-----

### Node.js

```javascript
import Muu from 'muumuu'

# authenticate
const res = await Muu.authenticate({id: 'muu-id', password: 'password'})
if (res.status == 201) {
  const token = res.data.jwt
}
```

Contribution
------------

1. Fork (https://github.com/pepabo/tukki.js/fork)
1. Create a feature branch
1. Commit your changes
1. Rebase your local changes against the master branch
1. Run test suite with the `npm ci` command and confirm that it passes
1. Create a new Pull Request

Author
------

[kimromi](https://github.com/kimromi)
