import axios from '@/axios/index'
import { catchAxiosError, catchAxiosSuccess } from './Response'
import { encrypt, decrypt } from './Encrypt'
import { auth } from '../firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

export const login = async (login, password) => {
  let data = {
    login,
    password
  }
  try {
    let res = await axios.post('auth/login', data)
    catchAxiosSuccess(res)
    return res
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}

export const RsendVerifyCode = async (email) => {
  let data = {
    email
  }
  try {
    let res = await axios.post('resend-code', data)
    catchAxiosSuccess(res)
    return res
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}

// login with Google
export const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider()
    const userCredential = await signInWithPopup(auth, provider)
    const user = userCredential.user
    let res = await axios.post('auth/login', {
      password: user.uid,
      login: user.email
    })
    catchAxiosSuccess(res)
    return res
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}

export const registerTalent = async (payload) => {
  try {
    let res = await axios.post('auth/register', payload)
    let ciphertext = encrypt(JSON.stringify(payload), import.meta.env.VITE_ENCRYPT_KEY)
    localStorage.setItem('_register_data', ciphertext)
    catchAxiosSuccess(res)
    return res
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
// forgot password
export const forgottenPassword = async (email) => {
  let data = {
    email
  }

  try {
    let res = await axios.post('auth/forgot-passwword', data)
    catchAxiosSuccess(res)
    return res
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
// reset password
export const resetPassword = async (email, password_reset_code, new_password) => {
  let data = {
    email,
    password_reset_code,
    new_password
  }

  try {
    let res = await axios.post('auth/reset-password', data)
    catchAxiosSuccess(res)
    return res
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
// resend email
export const resendEmail = async (email) => {
  let data = {
    email
  }

  try {
    let res = await axios.post('resend', data)
    catchAxiosSuccess(res)
    return res
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
export const confirmOTP = async (email, code) => {
  try {
    let res = await axios.get(`auth/confirm-code?email=${email}&code=${code}`)
    catchAxiosSuccess(res)
    return res
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}

export const getToken = () => {
  let encryptedData = localStorage.getItem('_user_data')
  if (encryptedData) {
    let user = decrypt(encryptedData, import.meta.env.VITE_ENCRYPT_KEY)
    return user.data.access_token
  }
  return null
}
export const getUser = () => {
  let encryptedData = localStorage.getItem('_user_data')
  if (encryptedData) {
    let user = decrypt(encryptedData, import.meta.env.VITE_ENCRYPT_KEY)
    return user
  }
  return null
}
