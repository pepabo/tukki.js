import { AxiosRequestConfig } from 'axios'
import * as Process from 'process'
import * as Package from '../package.json'

export interface IConfig {
  axios?: AxiosRequestConfig
}

const msec = 1000
const sec = 60
const min = 3

export const defaultConfig: IConfig = {
  axios: {
    timeout: min * sec * msec,
    baseURL: 'https://muumuu-domain.com/api/v1',
    headers: {
      'user-agent': `tukki.js v${(<any>Package).version}`
    }
  }
}

export function buildByEnv(): IConfig {
  const c: IConfig = {}
  c.axios = {}

  if (Process.env.TUKKI_API_ENDPOINT !== undefined) {
    c.axios.baseURL = Process.env.TUKKI_API_ENDPOINT
  }
  if (Process.env.TUKKI_TIMEOUT !== undefined) {
    c.axios.timeout = +`${Process.env.TUKKI_TIMEOUT}`
  }

  return c
}
