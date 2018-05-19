import { AxiosInstance, AxiosResponse } from 'axios'

import {
  TukkiDomainCategories,
  TukkiRecommendedDomains
} from './domain.interface'

export default class Domain {
  public client: AxiosInstance

   public async domainCategories(): Promise<AxiosResponse<TukkiDomainCategories>> {
    return this.client.get('/domain_categories')
  }

  public async recommendedDomains(): Promise<AxiosResponse<TukkiRecommendedDomains>> {
    return this.client.get('/recommended_domains')
  }
}
