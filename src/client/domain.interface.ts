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
