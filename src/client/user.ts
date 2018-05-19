import { AxiosInstance, AxiosResponse } from 'axios'
import {
  TukkiAuthenticateArgs,
  TukkiAuthenticated
} from './user.interface'

export default class User {
  public client: AxiosInstance

  public async authenticate(args: TukkiAuthenticateArgs): Promise<AxiosResponse<TukkiAuthenticated>> {
    return this.client.post('/authenticate', args)
  }
}
