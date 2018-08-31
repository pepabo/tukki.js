import Test from 'ava'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Tukki from '../tukki'

const OK = 200
const NoContent = 204
const NotFound = 404

Test('succeed get domain masters', async (t) => {
  const expected = {
    domain_masters: [
      {
        tld: 'com',
        contract_term_min: 1,
        contract_term_max: 10,
        whois_proxy_flag: true,
        registrar: 'onamae'
      },
      {
        tld: 'in',
        contract_term_min: 1,
        contract_term_max: 1,
        whois_proxy_flag: false,
        registrar: 'no_new_order'
      }
    ]
  }

  const mock = new MockAdapter(axios)
  mock.onGet('/domain_master').reply(OK, expected)

  const tukki = new Tukki()
  const ret = await tukki.domainMasters()

  t.is(ret.status, OK)
  t.deepEqual(ret.data, expected)
})

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
    most_recommended_domains: ['com', 'net']
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

Test('tmch registerd', async (t) => {
  const mock = new MockAdapter(axios)
  const expected = {
    domain_name: 'registerd.test'
  }

  mock.onGet(`/domains/${expected.domain_name}/tmch`).reply(NoContent, expected)

  const tukki = new Tukki()
  const ret = await tukki.checkTmch(expected.domain_name)

  t.is(ret.status, NoContent)
})

Test('tmch not found', async (t) => {
  const mock = new MockAdapter(axios)
  const expected = {
    domain_name: 'not-registerd.test'
  }

  mock.onGet(`/domains/${expected.domain_name}/tmch`).reply(NotFound, expected)

  const tukki = new Tukki()
  const ret = await tukki.checkTmch(expected.domain_name)

  t.is(ret.status, NotFound)
})
