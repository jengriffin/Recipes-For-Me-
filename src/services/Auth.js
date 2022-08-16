import { BASE_URL } from '../globals'
import Client from './api'

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post(`${BASE_URL}/api/users/create`, data)
    return res.data
  } catch (error) {
    throw error
  }
}
export const SignInUser = async (data) => {
  try {
    const res = await Client.post(`${BASE_URL}/api/auth/login`, data)
    return res.data.user
  } catch (error) {
    throw error
  }
}
export const CheckSession = async () => {
  try {
    const res = await Client.get('/auth/session')
    return res.data
  } catch (error) {
    throw error
  }
}
