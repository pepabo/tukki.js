export interface TukkiDomainMasters {
  domain_masters: TukkiDomainMaster[]
}

export interface TukkiDomainMaster {
  tld: string
  contract_term_min: number
  contract_term_max: number
  whois_proxy_flag: boolean
  registrar: string
}

export interface TukkiDomainCategories {
  popular: TukkiDomainCategory
  recommend: TukkiDomainCategory
  new: TukkiDomainCategory
  business: TukkiDomainCategory
  technology: TukkiDomainCategory
  color: TukkiDomainCategory
  region: TukkiDomainCategory
  art: TukkiDomainCategory
  fasion: TukkiDomainCategory
  media: TukkiDomainCategory
  food: TukkiDomainCategory
  life: TukkiDomainCategory
  other: TukkiDomainCategory
}

export interface TukkiDomainCategory {
  label: string
  order: number
  tlds: string[]
}

export interface TukkiRecommendedDomains {
  for_corporates: string[]
  popular: string[]
  discount: string[]
  multi_year_discount: string[]
  most_recommended_domains: string[]
}

export interface TukkiIsDomainAvailable {
  domain_name: string
  available: boolean
  expired: string
  messages: string | null
}
