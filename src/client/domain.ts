import { AxiosInstance } from 'axios'

import {
  IDomainCategoriesResult,
  IRecommendedDomainsResult
} from './domain.interface'

export default class Domain {
  public client: AxiosInstance

  public async domainCategories(): Promise<IDomainCategoriesResult> {
    return this.client.get('/domain_categories')
  }

  public async recommendedDomains(): Promise<IRecommendedDomainsResult> {
    return this.client.get('/recommended_domains')
  }
}
