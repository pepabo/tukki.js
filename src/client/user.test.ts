import Test from 'ava'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Tukki, { TukkiUser } from '../tukki'

const OK = 200
const CREATED = 201
const UNAUTHORIZED = 401
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MjY0NTYwNTEsInN'  // dummy
const authenticateParams = {id: 'muumuu', password: 'xxxx'}

Test('succeed authenticate', async (t) => {
  const mock = new MockAdapter(axios)
  mock.onPost('/authenticate').reply(CREATED, {jwt: TOKEN})

  const tukki = new Tukki()
  const ret = await tukki.authenticate(authenticateParams)

  t.is(ret.status, CREATED)
  t.is(ret.data.jwt, TOKEN)
})

Test('failed authenticate', async (t) => {
  const mock = new MockAdapter(axios)
  mock.onPost('/authenticate').reply(UNAUTHORIZED)

  const tukki = new Tukki()
  const ret = await t.throws(tukki.authenticate(authenticateParams))
  t.is(ret.message, 'Request failed with status code 401')
})

Test('about me', async (t) => {
  const me: TukkiUser = {
    user_id: 'MA12345678',
    muumuu_id: 'tukki@example.com',
    muumuu_mail_applied: true
  }
  const mock = new MockAdapter(axios)
  mock.onGet('/me').reply(OK, me)

  const tukki = new Tukki()
  const ret = await tukki.aboutMe()

  t.is(ret.status, OK)
  t.deepEqual(ret.data, me)
})
