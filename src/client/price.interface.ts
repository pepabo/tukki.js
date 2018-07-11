export interface TukkiPrices {
  domains: TukkiDomainPrices
}

export interface TukkiDomainPrice {
  original_price: number | null
  campaign_price: number | null
  jp_original_price: number | null
  jp_campaign_price: number | null
}

export interface TukkiDomainPrices {
  [tld: string]: {
    new_order: TukkiDomainPrice;
    continue: TukkiDomainPrice;
    transfer: TukkiDomainPrice;
  }
}
