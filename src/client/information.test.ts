import Test from 'ava'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Tukki from '../tukki'

const OK = 200

import {
  TukkiInformation,
  TukkiMaintenances
} from './information.interface'

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

Test('succeed get campaign', async (t) => {
  const informations: TukkiInformation[] = [
    {
      info_id: 1,
      type: 'campaign',
      importance: 'normal',
      posted_at: '2020-07-01',
      title: 'I am Tukki!',
      body: 'hello',
      solved: true
    }
  ]

  const mock = new MockAdapter(axios)
  mock.onGet('/informations/campaign').reply(OK, informations)

  const tukki = new Tukki()
  const ret = await tukki.campaigns({})

  t.is(ret.status, OK)
  t.deepEqual(ret.data, informations)
})

Test('succeed get maintenances', async (t) => {
  // exist maintenances
  const maintenances: TukkiMaintenances = {
    registrar: [
      {
        begin_at: '2018-08-01 00:00:00',
        end_at: '2018-08-31 23:59:59',
        name: 'jprs'
      }
    ],
    registry: [
      {
        info_id: 1,
        begin_at: '2018-08-01 00:00:00',
        end_at: '2018-08-31 23:59:59',
        tlds: ['com', 'net']
      }
    ],
    osaipo: {
      info_id: 1,
      begin_at: '2018-08-01 00:00:00',
      end_at: '2018-08-31 23:59:59',
      tlds: ['com', 'net']
    }
  }

  const mock = new MockAdapter(axios)
  mock.onGet('/maintenances').reply(OK, maintenances)

  const tukki = new Tukki()
  let ret = await tukki.maintenances()

  t.is(ret.status, OK)
  t.deepEqual(ret.data, maintenances)

  // not exists maintenances
  mock.onGet('/maintenances').reply(OK, {})
  ret = await tukki.maintenances()

  t.is(ret.status, OK)
  t.deepEqual(ret.data, {})
})
