import { decrypt } from '@/services/Encrypt'

const getUserFromLocalStorage = () => {
  const encryptedData = localStorage.getItem('_user_data')
  return encryptedData ? decrypt(encryptedData, import.meta.env.VITE_ENCRYPT_KEY).data : null
}

const redirectLogin = () => {
  const user = getUserFromLocalStorage()
  return user && user.access_token ? undefined : { name: 'access-denied' }
}

const redirectDashboard = () => {
  const user = getUserFromLocalStorage()
  return user && user.access_token ? { name: 'dashboard' } : undefined
}

const deleteSession = () => {
  if (localStorage.getItem('_user_data')) {
    localStorage.removeItem('_user_data')
    return { name: 'login' }
  }
  return undefined
}
export default {
  redirectLogin,
  redirectDashboard,
  deleteSession
}

