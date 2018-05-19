export interface TukkiAuthenticateArgs {
  id: string
  password: string
}

export interface TukkiAuthenticateResult {
  status: number
  data: {
    jwt: string;
  }
}
