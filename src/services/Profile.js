import axios from '../axios'
import { catchAxiosError, catchAxiosSuccess } from './Response'
import { getToken } from './Auth'

export const getTalentProfile = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`auth/user`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    // catchAxiosSuccess(res)
    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
