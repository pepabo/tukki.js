import Test from 'ava'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Tukki from '../tukki'

const OK = 200

Test('succeed get prices', async (t) => {
  const prices = {
    domains: {
      com: {
        original_price: 1480,
        campaign_price: 1160
      },
      soccer: {
        original_price: 2980,
        campaign_price: null
      }
    }
  }

  const mock = new MockAdapter(axios)
  mock.onGet('/prices').reply(OK, prices)

  const tukki = new Tukki()
  const ret = await tukki.prices()

  t.is(ret.status, OK)
  t.deepEqual(ret.data, prices)
})
