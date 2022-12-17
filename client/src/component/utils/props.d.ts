export  interface PropTypes {
  user: string,
  authTokens: string | number,
  refreshToken: string
}

export  interface PropTypesUser {
  exp: number,
  iat: number,
  user: string
}