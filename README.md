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
$ npm install muumuu --save
```

Usage
-----

### Node.js

```javascript
import Tukki from 'muumuu'

const tukki = new Tukki()

# authenticate
const res = await tukki.authenticate({id: 'muu-id', password: 'password'})
if (res.status == 201) {
  const token = res.data.jwt
}

# get prices
const res = await tukki.prices()
if (res.status == 200) {
  const prices = res.data
}

# get domain categories
const res = await tukki.domainCategories()
if (res.status == 200) {
  const categories = res.data
}

# get recomended domains
const res = await tukki.recomendedDomains()
if (res.status == 200) {
  const recomendedDomains = res.data
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
