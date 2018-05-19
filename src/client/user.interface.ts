export interface TukkiAuthenticateArgs {
  id: string
  password: string
}

export interface TukkiAuthenticated {
  jwt: string
}
