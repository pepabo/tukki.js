import { AxiosInstance } from 'axios'

import {
  TukkiDomainCategoriesResult,
  TukkiRecommendedDomainsResult
} from './domain.interface'

export default class Domain {
  public client: AxiosInstance

  public async domainCategories(): Promise<TukkiDomainCategoriesResult> {
    return this.client.get('/domain_categories')
  }

  public async recommendedDomains(): Promise<TukkiRecommendedDomainsResult> {
    return this.client.get('/recommended_domains')
  }
}
