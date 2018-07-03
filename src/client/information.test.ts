import Test from 'ava'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Tukki from '../tukki'

const OK = 200

import { TukkiInformation } from './information.interface'

Test('succeed get informations', async (t) => {
  const informations: TukkiInformation[] = [
    {
      info_id: 1,
      type: 'new_arrivals',
      importance: 'normal',
      posted_at: '2020-07-01',
      title: 'I am Tukki!',
      body: 'hello',
      solved: true
    }
  ]

  const mock = new MockAdapter(axios)
  mock.onGet('/informations').reply(OK, informations)

  const tukki = new Tukki()
  const ret = await tukki.informations({})

  t.is(ret.status, OK)
  t.deepEqual(ret.data, informations)
})
