/* eslint-disable @typescript-eslint/no-empty-function */
import { ref } from 'vue'
import useSupabase from '../boot/supabase'
import {
  ILogin,
  ILoginProvider,
  IRegister
} from './InterfaceUseAuthUser'


const user = ref(null)

export default async function useAuthUser () {

  const { supabase } = useSupabase()

  const login = () => async ({ email, password }: ILogin) => {

    const { user, error } = await supabase.auth.signIn({ email, password })
    if (error) throw error
    return user

  }

  const loginWithSocialProvider = async ({ email, password, provider }: ILoginProvider) => {
    const { user, error } = await supabase.auth.signIn({ email, password, provider })
    if (error) throw error
    return user

  }

  const logout = () => async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    return user
  }

  const isLoggedIn = async () => {
    return !!user.value
  }

  const register = async ({ email, password, ...meta }: IRegister) => {

    const { user, error } = await supabase.auth.signUp(
      { email, password },
      { data: meta, redirectTo: `${window.location.origin}/me?fromEmail=registrationConfirmation` })

    if (error) throw error
    return user
  }

  const update = async (data: any) => {
    const { user, error } = await supabase.auth.update(data)
    if (error) throw error
    return user
  }

  const sendPasswordRestEmail = async (email: string) => {
    const { data, error } = await supabase.auth.api.resetPasswordForEmail(email)
    if (error) throw error
    return data
  }

  return {
    login,
    loginWithSocialProvider,
    logout,
    isLoggedIn,
    register,
    update,
    sendPasswordRestEmail
  }
}
