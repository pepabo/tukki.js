import { AxiosInstance, AxiosResponse } from 'axios'
import {
  TukkiInformationArgs,
  TukkiInformation
} from './information.interface'

export default class Infomation {
  public client: AxiosInstance

  public async informations(args: TukkiInformationArgs): Promise<AxiosResponse<TukkiInformation[]>> {
    return this.client.get('/informations', args)
  }
}
