import Axios, {AxiosInstance} from 'axios'
import * as Merge from 'deepmerge'
import {buildByEnv, IConfig, defaultConfig} from './config'

import User from './client/user'
import Domain from './client/domain'

import {
  IDomainCategoriesResult,
  IRecommendedDomainsResult
} from './client/domain.interface'

export default class Muu implements User, Domain {
  public name: string = 'Muu'
  public config: IConfig
  public client: AxiosInstance

  public authenticate: (args: any) => any
  public domainCategories: () => Promise<IDomainCategoriesResult>
  public recommendedDomains: () => Promise<IRecommendedDomainsResult>

  constructor(config?: IConfig) {
    this.config = config === undefined ? defaultConfig : Merge(defaultConfig, config)
    const configByEnv: IConfig = buildByEnv()
    if (configByEnv !== {}) {
      this.config = Merge(this.config, configByEnv)
    }
    this.client = Axios.create(this.config.axios)
  }

  public static CREATE(config: IConfig): Muu {
    return new Muu(config)
  }
}

Muu.prototype.authenticate = User.prototype.authenticate
Muu.prototype.domainCategories = Domain.prototype.domainCategories
Muu.prototype.recommendedDomains = Domain.prototype.recommendedDomains
