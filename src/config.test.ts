import Test from 'ava'
import { buildByEnv, defaultConfig } from './config'
import * as Process from 'process'

Test('defaults returns default config', (t) => {
  const expect = {
    axios: {
      baseURL: 'https://muumuu-domain.com/api/v1',
      timeout: 180000
    }
  }
  t.deepEqual(defaultConfig, expect)
})

Test('buildByEnv returns config', (t) => {
  t.deepEqual(buildByEnv(), { axios: {} })
})

Test('buildByEnv returns config with env', (t) => {
  Process.env.TUKKI_API_ENDPOINT = 'https://foo.com'
  Process.env.TUKKI_TIMEOUT = '123'

  const expect = {
    axios: {
      baseURL: 'https://foo.com',
      timeout: 123
    }
  }
  t.deepEqual(buildByEnv(), expect)
})
