export interface TukkiAuthenticateArgs {
  id: string
  password: string
}

export interface TukkiAuthenticated {
  jwt: string
}

export interface TukkiUser {
  user_id: string
  muumuu_id: string
  muumuu_mail_applied: boolean
  domain_count: number
}
