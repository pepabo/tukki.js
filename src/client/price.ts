import { AxiosInstance, AxiosResponse } from 'axios'

import {
  TukkiPrices
} from './price.interface'

export default class Price {
  public client: AxiosInstance

   public async prices(): Promise<AxiosResponse<TukkiPrices>> {
    return this.client.get('/prices')
  }
}
