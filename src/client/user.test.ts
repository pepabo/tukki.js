import Test from 'ava'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Muu from '../muumuu'

const CREATED = 201
const UNAUTHORIZED = 401
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MjY0NTYwNTEsInN'  // dummy
const authenticateParams = {id: 'muumuu', passwords: 'xxxx'}

Test('succeed authenticate', async (t) => {
  const mock = new MockAdapter(axios)
  mock.onPost('/authenticate').reply(CREATED, {jwt: TOKEN})

  const muu = new Muu()
  const ret = await muu.authenticate(authenticateParams)

  t.is(ret.status, CREATED)
  t.is(ret.data.jwt, TOKEN)
})

Test('failed authenticate', async (t) => {
  const mock = new MockAdapter(axios)
  mock.onPost('/authenticate').reply(UNAUTHORIZED)

  const muu = new Muu()
  const ret = await t.throws(muu.authenticate(authenticateParams))
  t.is(ret.message, 'Request failed with status code 401')
})
