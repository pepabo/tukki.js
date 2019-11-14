import Axios, { AxiosInstance, AxiosResponse } from 'axios'
import * as Merge from 'deepmerge'
import { buildByEnv, TukkiConfig, defaultConfig } from './config'

import User from './client/user'
import Price from './client/price'
import Infomation from './client/information'
import Domain from './client/domain'

import {
  TukkiAuthenticateArgs,
  TukkiAuthenticated,
  TukkiUser
} from './client/user.interface'
import {
  TukkiPrices,
  TukkiDomainPrice,
  TukkiDomainPrices
} from './client/price.interface'
import {
  TukkiDomainMasters,
  TukkiDomainMaster,
  TukkiDomainCategories,
  TukkiDomainCategory,
  TukkiRecommendedDomains,
  TukkiIsDomainAvailable,
  TukkiCheckTmch
} from './client/domain.interface'
import {
  TukkiInformationArgs,
  TukkiInformation,
  TukkiMaintenances,
  TukkiMaintenance
} from './client/information.interface'

export default class Tukki implements User, Domain, Price {
  public name: string = 'Muu'
  public config: TukkiConfig
  public client: AxiosInstance

  public authenticate: (args: TukkiAuthenticateArgs) => Promise<AxiosResponse<TukkiAuthenticated>>
  public domainMasters: () => Promise<AxiosResponse<TukkiDomainMasters>>
  public domainCategories: () => Promise<AxiosResponse<TukkiDomainCategories>>
  public recommendedDomains: () => Promise<AxiosResponse<TukkiRecommendedDomains>>
  public prices: () => Promise<AxiosResponse<TukkiPrices>>
  public informations: (args: TukkiInformationArgs) => Promise<AxiosResponse<TukkiInformation[]>>
  public campaigns: (args: TukkiInformationArgs) => Promise<AxiosResponse<TukkiInformation[]>>
  public maintenances: () => Promise<AxiosResponse<TukkiMaintenances>>
  public isDomainAvailable: (domain: string) => Promise<AxiosResponse<TukkiIsDomainAvailable>>
  public aboutMe: () => Promise<AxiosResponse<TukkiUser>>
  public checkTmch: (domain: string) => Promise<AxiosResponse<TukkiCheckTmch>>

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
Tukki.prototype.aboutMe = User.prototype.aboutMe
Tukki.prototype.prices = Price.prototype.prices
Tukki.prototype.domainMasters = Domain.prototype.domainMasters
Tukki.prototype.domainCategories = Domain.prototype.domainCategories
Tukki.prototype.recommendedDomains = Domain.prototype.recommendedDomains
Tukki.prototype.isDomainAvailable = Domain.prototype.isDomainAvailable
Tukki.prototype.checkTmch = Domain.prototype.checkTmch
Tukki.prototype.informations = Infomation.prototype.informations
Tukki.prototype.campaigns = Infomation.prototype.campaigns
Tukki.prototype.maintenances = Infomation.prototype.maintenances

export {
  TukkiConfig,
  TukkiAuthenticateArgs,
  TukkiAuthenticated,
  TukkiUser,
  TukkiPrices,
  TukkiDomainPrice,
  TukkiDomainPrices,
  TukkiDomainMasters,
  TukkiDomainMaster,
  TukkiDomainCategories,
  TukkiDomainCategory,
  TukkiRecommendedDomains,
  TukkiInformationArgs,
  TukkiInformation,
  TukkiMaintenances,
  TukkiMaintenance,
  TukkiIsDomainAvailable,
  TukkiCheckTmch
}
