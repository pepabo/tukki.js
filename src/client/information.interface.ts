export interface TukkiInformationArgs {
}

export interface TukkiInformation {
  info_id: number
  type: string
  importance: string
  posted_at: string
  title: string
  body: string
  solved: boolean
}

export interface TukkiMaintenances {
  registry?: TukkiMaintenance[]
  muu_db?: TukkiMaintenance
  muu_dns?: TukkiMaintenance
  inq?: TukkiMaintenance
  osaipo?: TukkiMaintenance
  densan?: TukkiMaintenance
  bank?: TukkiMaintenance
  server_api?: TukkiMaintenance
  lolipop?: TukkiMaintenance
  colorme?: TukkiMaintenance
  heteml?: TukkiMaintenance
  bulk?: TukkiMaintenance
  creditcard?: TukkiMaintenance
  amazon_pay?: TukkiMaintenance
  managed_cloud?: TukkiMaintenance
}

export interface TukkiMaintenance {
  begin_at: string
  end_at: string
  info_id: number | null
  tlds?: string[]
}
