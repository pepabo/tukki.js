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
