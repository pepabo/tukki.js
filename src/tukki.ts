import Axios, { AxiosInstance } from 'axios'
import * as Merge from 'deepmerge'
import { buildByEnv, TukkiConfig, defaultConfig } from './config'

import User from './client/user'
import Domain from './client/domain'

import {
  IAuthenticateArgs,
  IAuthenticateResult
} from './client/user.interface'
import {
  IDomainCategory,
  IDomainCategoriesResult,
  IMostRecommendedDomains,
  IRecommendedDomainsResult
} from './client/domain.interface'

export default class Tukki implements User, Domain {
  public name: string = 'Muu'
  public config: TukkiConfig
  public client: AxiosInstance

  public authenticate: (args: IAuthenticateArgs) => Promise<IAuthenticateResult>
  public domainCategories: () => Promise<IDomainCategoriesResult>
  public recommendedDomains: () => Promise<IRecommendedDomainsResult>

  constructor(config?: TukkiConfig) {
    this.config = config === undefined ? defaultConfig : Merge(defaultConfig, config)
    const configByEnv: TukkiConfig = buildByEnv()
    if (configByEnv !== {}) {
      this.config = Merge(this.config, configByEnv)
    }
    this.client = Axios.create(this.config.axios)
  }
}
Tukki.prototype.authenticate = User.prototype.authenticate
Tukki.prototype.domainCategories = Domain.prototype.domainCategories
Tukki.prototype.recommendedDomains = Domain.prototype.recommendedDomains

export {
  TukkiConfig,
  IAuthenticateArgs,
  IAuthenticateResult,
  IDomainCategory,
  IDomainCategoriesResult,
  IMostRecommendedDomains,
  IRecommendedDomainsResult
}
