import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_BASEURL
import { useRouter } from 'vue-router'

import { useToast } from 'vue-toastification'

const toast = useToast()

/*
 Axios Interceptor to log user out
*/

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error?.response?.status === 401) {
      toast.error(error?.response?.data?.message, {
        timeout: 4000
      })
      localStorage.clear()
      useRouter.push('/access-denied')
    }
    return Promise.reject(error)
  }
)
export default axios
