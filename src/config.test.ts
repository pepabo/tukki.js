import Test from 'ava'
import {BuildByEnv, Defaults} from './config'
import * as Process from 'process'

Test('defaults returns default config', (t) => {
  const expect = {
    axios: {
      baseURL: 'https://muumuu-domain.com',
      timeout: 180000,
      headers: {
        'user-agent': 'tukki.js v0.1.0'
      }
    }
  }
  t.deepEqual(Defaults, expect)
})

Test('BuildByEnv returns config', (t) => {
  t.deepEqual(BuildByEnv(), { axios: {} })
})

Test('BuildByEnv returns config with env', (t) => {
  Process.env.MUU_API_ENDPOINT = 'https://foo.com'
  Process.env.MUU_TIMEOUT = '123'

  const expect = {
    axios: {
      baseURL: 'https://foo.com',
      timeout: 123
    }
  }
  t.deepEqual(BuildByEnv(), expect)
})
