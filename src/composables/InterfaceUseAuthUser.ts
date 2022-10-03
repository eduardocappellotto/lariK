export interface ILogin {
  email: string,
  password: string
}

export interface IRegister extends ILogin {
  phone: string
}

export interface ILoginProvider extends ILogin {
  provider: Provider
}

export declare type Provider = 'apple' | 'azure' | 'bitbucket' | 'discord' | 'facebook' | 'github' | 'gitlab' | 'google' | 'keycloak' | 'linkedin' | 'notion' | 'slack' | 'spotify' | 'twitch' | 'twitter' | 'workos'
