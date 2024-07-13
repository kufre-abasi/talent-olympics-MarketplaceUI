import axios from '../axios'
import { catchAxiosError, catchAxiosSuccess } from './Response'
import { getToken } from './Auth'

export const getTalentJobs = async (query = {}) => {
  const token = await getToken()
  try {
    let res = await axios.get(`jobs`, {
      headers: {
        Authorization: 'Bearer ' + token
      },
      params: query
    })
    // catchAxiosSuccess(res)
    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
export const getCareerSuggestion = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`talent/career/suggestion`, {
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

export const getTalentJobDeatils = async (id) => {
  const token = await getToken()
  try {
    let res = await axios.get(`jobs/${id}`, {
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

export const getTalentJobRecommendations = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`jobs/recommendations`, {
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

export const getTopEmployers = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`top/employers`, {
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
export const applyForJob = async (payload) => {
  const token = await getToken()
  try {
    let res = await axios.post(`jobs/applied`, payload, {
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
export const savedJob = async (payload) => {
  const token = await getToken()
  try {
    let res = await axios.post(`jobs/saved`, payload, {
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
export const getMyjobApplied = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`myjob/applied`, {
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
export const getMyjobSaved = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`myjob/saved`, {
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
export const jobInvitations = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`job-invitations`, {
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
export const jobInvitationsDeatils = async (id) => {
  const token = await getToken()
  try {
    let res = await axios.get(`job-invitations/${id}`, {
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
export const acceptJobInvitations = async (id) => {
  const token = await getToken()
  try {
    let res = await axios.patch(`job-invitations/${id}/accept`, {
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
export const rejectJobInvitations = async (id) => {
  const token = await getToken()
  try {
    let res = await axios.patch(`job-invitations/${id}/reject`, {
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

