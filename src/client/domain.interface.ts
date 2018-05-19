export interface IDomainCategory {
  label: string
  tlds: string[]
}

export interface IDomainCategories {
  popular: IDomainCategory
  recommend: IDomainCategory
  new: IDomainCategory
}

export interface IDomainCategoriesResult {
  status: number
  data: IDomainCategories
}

export interface IRecommendedDomains {
  for_corporates: string[]
  popular: string[]
  discount: string[]
  multi_year_discount: string[]
  most_recommended_domains: IMostRecommendedDomains[]
}

export interface IMostRecommendedDomains {
  tld: string
  price: number
}

export interface IRecommendedDomainsResult {
  status: number
  data: IRecommendedDomains
}
