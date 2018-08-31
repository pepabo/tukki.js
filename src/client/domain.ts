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

    // Handling under 500 status code to return.
    // Because test fails when status code is out of the range of 2xx.
    // https://github.com/axios/axios#handling-errors
    return this.client.get(`domains/${domain}/tmch`, {
      validateStatus: (status) => {
        return status < internalServerError
      }
    })
  }
}
