import { AxiosInstance } from 'axios'
import {
  TukkiAuthenticateArgs,
  TukkiAuthenticateResult
} from './user.interface'

export default class User {
  public client: AxiosInstance

  public async authenticate(args: TukkiAuthenticateArgs): Promise<TukkiAuthenticateResult> {
    return this.client.post('/authenticate', args)
  }
}
