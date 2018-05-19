export interface TukkiDomainCategories {
  popular: TukkiDomainCategory
  recommend: TukkiDomainCategory
  new: TukkiDomainCategory
}

export interface TukkiDomainCategory {
  label: string
  tlds: string[]
}

export interface TukkiRecommendedDomains {
  for_corporates: string[]
  popular: string[]
  discount: string[]
  multi_year_discount: string[]
  most_recommended_domains: TukkiMostRecommendedDomains[]
}

export interface TukkiMostRecommendedDomains {
  tld: string
  price: number
}
