export interface TukkiAuthenticateArgs {
  id: string
  password: string
}

export interface TukkiAuthenticated {
  jwt: string
}

export interface TukkiUser {
  muumuu_id: string
  muumuu_mail_applied: boolean
}
