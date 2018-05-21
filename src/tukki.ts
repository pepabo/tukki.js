import Axios, { AxiosInstance, AxiosResponse } from 'axios'
import * as Merge from 'deepmerge'
import { buildByEnv, TukkiConfig, defaultConfig } from './config'

import User from './client/user'
import Domain from './client/domain'

import {
  TukkiAuthenticateArgs,
  TukkiAuthenticated
} from './client/user.interface'
import {
  TukkiDomainCategories,
  TukkiDomainCategory,
  TukkiRecommendedDomains,
  TukkiMostRecommendedDomains,
  TukkiIsDomainAvailable
} from './client/domain.interface'

export default class Tukki implements User, Domain {
  public name: string = 'Muu'
  public config: TukkiConfig
  public client: AxiosInstance

  public authenticate: (args: TukkiAuthenticateArgs) => Promise<AxiosResponse<TukkiAuthenticated>>
  public domainCategories: () => Promise<AxiosResponse<TukkiDomainCategories>>
  public recommendedDomains: () => Promise<AxiosResponse<TukkiRecommendedDomains>>
  public isDomainAvailable: (domain: string) => Promise<AxiosResponse<TukkiIsDomainAvailable>>

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
Tukki.prototype.isDomainAvailable = Domain.prototype.isDomainAvailable

export {
  TukkiConfig,
  TukkiAuthenticateArgs,
  TukkiAuthenticated,
  TukkiDomainCategories,
  TukkiDomainCategory,
  TukkiRecommendedDomains,
  TukkiMostRecommendedDomains,
  TukkiIsDomainAvailable
}
