import axios from '../axios'
import { catchAxiosError, catchAxiosSuccess } from './Response'
import { getToken } from './Auth'

export const getGoals = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`goals`, {
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
export const getEmployeeGoals = async (employee_code) => {
  const token = await getToken()
  try {
    let res = await axios.get(`goals/employee/${employee_code}`, {
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
export const createGoals = async (payload) => {
  const token = await getToken()
  try {
    let res = await axios.post(`goals`,payload, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    catchAxiosSuccess(res)
    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
export const completGoals = async (id, payload) => {
  const token = await getToken()
  try {
    let res = await axios.put(`goals/${id}`, payload, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    catchAxiosSuccess(res)
    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
export const archiveGoals = async (id) => {
  const token = await getToken()
  try {
    let res = await axios.patch(`goals/${id}/archive`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    catchAxiosSuccess(res)
    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
export const unarchiveGoals = async (id) => {
  const token = await getToken()
  try {
    let res = await axios.patch(`goals/${id}/unarchive`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    catchAxiosSuccess(res)
    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
export const getGoalsPerformance = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`goals/overview/performance`, {
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
export const getGoalsCalendar = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`goals/overview/calendar`, {
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
