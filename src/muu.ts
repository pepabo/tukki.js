import Axios, {AxiosInstance} from 'axios'
import * as Merge from 'deepmerge'
import {BuildByEnv, IConfig, Defaults} from './config'

export default class Muu {
  public name: string = 'Muu'
  public config: IConfig
  public client: AxiosInstance
  public options: object

  public authenticate: (args: any) => any

  constructor(config?: IConfig) {
    this.config = config === undefined ? Defaults : Merge(Defaults, config)
    const configByEnv: IConfig = BuildByEnv()
    if (configByEnv !== {}) {
      this.config = Merge(this.config, configByEnv)
    }
    this.client = Axios.create(this.config.axios)
  }

  public static CREATE(config: IConfig): Muu {
    return new Muu(config)
  }
}
