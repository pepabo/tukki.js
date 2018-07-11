import Test from 'ava'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Tukki, { TukkiPrices } from '../tukki'

const OK = 200

Test('succeed get prices', async (t) => {
  const prices: TukkiPrices = {
    domains: {
      com: {
        new_order: {
          original_price: 1480,
          campaign_price: 1160,
          jp_original_price: 1480,
          jp_campaign_price: 1160
        },
        continue: {
          original_price: 1480,
          campaign_price: null,
          jp_original_price: 1480,
          jp_campaign_price: null
        },
        transfer: {
          original_price: 1480,
          campaign_price: null,
          jp_original_price: 1480,
          jp_campaign_price: null
        }
      },
      soccer: {
        new_order: {
          original_price: 2980,
          campaign_price: null,
          jp_original_price: null,
          jp_campaign_price: null
        },
        continue: {
          original_price: 2980,
          campaign_price: null,
          jp_original_price: null,
          jp_campaign_price: null
        },
        transfer: {
          original_price: null,
          campaign_price: null,
          jp_original_price: null,
          jp_campaign_price: null
        }
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
