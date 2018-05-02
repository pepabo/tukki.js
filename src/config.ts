import {AxiosRequestConfig} from 'axios'
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
    baseURL: 'https://muumuu-domain.com',
    headers: {
      'user-agent': `tukki.js v${(<any>Package).version}`
    }
  }
}

export function buildByEnv(): IConfig {
  const c: IConfig = {}
  c.axios = {}

  if (Process.env.MUU_API_ENDPOINT !== undefined) {
    c.axios.baseURL = Process.env.MUU_API_ENDPOINT
  }
  if (Process.env.MUU_TIMEOUT !== undefined) {
    c.axios.timeout = +`${Process.env.MUU_TIMEOUT}`
  }

  return c
}
