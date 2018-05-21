import Test from 'ava'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Tukki from '../tukki'

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

  const tukki = new Tukki()
  const ret = await tukki.domainCategories()

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

  const tukki = new Tukki()
  const ret = await tukki.recommendedDomains()

  t.is(ret.status, OK)
  t.deepEqual(ret.data, expected)
})

Test('succeed get domain available', async (t) => {
  const expected = {
    domain_name: 'example.com',
    available: false,
    expired: '2018-05-21T15:32:42.319+09:00',
    messages: null
  }

  const mock = new MockAdapter(axios)
  mock.onGet(`/domains/${expected.domain_name}/available`).reply(OK, expected)

  const tukki = new Tukki()
  const ret = await tukki.isDomainAvailable(expected.domain_name)

  t.is(ret.status, OK)
  t.deepEqual(ret.data, expected)
})
