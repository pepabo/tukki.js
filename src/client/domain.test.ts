import Test from 'ava'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Muu from '../muumuu'

const OK = 200

Test('succeed get domain categories', async (t) => {
  const expected = {
    popular: {
      label: '人気',
      tlds: ['com', 'net']
    },
    recommend: {
      label: 'おすすめ',
      tlds: ['com', 'net']
    },
    new: {
      label: 'NEW',
      tlds: ['com', 'net']
    }
  }

  const mock = new MockAdapter(axios)
  mock.onGet('/domain_categories').reply(OK, expected)

  const muu = new Muu()
  const ret = await muu.domainCategories()

  t.is(ret.status, OK)
  t.deepEqual(ret.data, expected)
})

Test('succeed get recommended domains', async (t) => {
  const expected = {
    for_corporates: ['co.jp', 'or.jp'],
    popular: ['shop'],
    discount: [],
    multi_year_discount: ['com', 'net', 'org', 'biz', 'info', 'work', 'club', 'tokyo', 'xyz', 'shop'],
    most_recommended_domains: [
      { tld: 'com', price: 1160 },
      { tld: 'net', price: 1260 }
    ]
  }

  const mock = new MockAdapter(axios)
  mock.onGet('/recommended_domains').reply(OK, expected)

  const muu = new Muu()
  const ret = await muu.recommendedDomains()

  t.is(ret.status, OK)
  t.deepEqual(ret.data, expected)
})
