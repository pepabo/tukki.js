export interface TukkiPrices {
  domains: TukkiDomainPrices
}

export interface TukkiDomainPrices {
  [tld: string]: {
    original_price: number;
    campaign_price: number | null;
  }
}
