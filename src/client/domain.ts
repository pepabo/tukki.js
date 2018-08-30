import { AxiosInstance, AxiosResponse } from 'axios'

import {
  TukkiDomainMasters,
  TukkiDomainCategories,
  TukkiRecommendedDomains,
  TukkiIsDomainAvailable,
  TukkiCheckTmch
} from './domain.interface'

export default class Domain {
  public client: AxiosInstance

  public async domainMasters(): Promise<AxiosResponse<TukkiDomainMasters>> {
    return this.client.get('/domain_master')
  }

  public async domainCategories(): Promise<AxiosResponse<TukkiDomainCategories>> {
    return this.client.get('/domain_categories')
  }

  public async recommendedDomains(): Promise<AxiosResponse<TukkiRecommendedDomains>> {
    return this.client.get('/recommended_domains')
  }

  public async isDomainAvailable(domain: string): Promise<AxiosResponse<TukkiIsDomainAvailable>> {
    return this.client.get(`domains/${domain}/available`)
  }

  public async checkTmch(domain: string): Promise<AxiosResponse<TukkiCheckTmch>> {
    const internalServerError = 500

    return this.client.get(`domains/${domain}/tmch`, {
      validateStatus: (status) => {
        return status < internalServerError
      }
    })
  }
}
