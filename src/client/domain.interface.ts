export interface IDomainCategory {
  label: string
  tlds: string[]
}

export interface IDomainCategoriesResult {
  status: number
  data: {
    popular: IDomainCategory;
    recommend: IDomainCategory;
    new: IDomainCategory;
  }
}

export interface IMostRecommendedDomains {
  tld: string
  price: number
}

export interface IRecommendedDomainsResult {
  status: number
  data: {
    for_corporates: string[];
    popular: string[];
    discount: string[];
    multi_year_discount: string[];
    most_recommended_domains: IMostRecommendedDomains[];
  }
}
