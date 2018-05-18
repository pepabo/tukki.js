export interface IAuthenticateArgs {
  id: string
  password: string
}

export interface IAuthenticateResult {
  status: number
  data: {
    jwt: string;
  }
}
