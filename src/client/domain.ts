import { AxiosInstance } from 'axios'

import {
  IDomainCategoriesResult
} from './domain.interface'

export default class Domain {
  public client: AxiosInstance

  public async domainCategories(): Promise<IDomainCategoriesResult> {
    return this.client.get('/domain_categories')
  }
}
