import { AxiosInstance } from 'axios'
import {
  IAuthenticateArgs,
  IAuthenticateResult
} from './user.interface'

export default class User {
  public client: AxiosInstance

  public async authenticate(args: IAuthenticateArgs): Promise<IAuthenticateResult> {
    return this.client.post('/authenticate', args)
  }
}
