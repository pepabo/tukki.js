import { AxiosInstance, AxiosResponse } from 'axios'
import {
  TukkiInformationArgs,
  TukkiInformation,
  TukkiMaintenances
} from './information.interface'

export default class Infomation {
  public client: AxiosInstance

  public async informations(args: TukkiInformationArgs): Promise<AxiosResponse<TukkiInformation[]>> {
    return this.client.get('/informations', args)
  }

  public async campaigns(args: TukkiInformationArgs): Promise<AxiosResponse<TukkiInformation[]>> {
    return this.client.get('/informations/campaign', args)
  }

  public async maintenances(): Promise<AxiosResponse<TukkiMaintenances>> {
    return this.client.get('/maintenances')
  }
}
