import axios from '../axios'
import { catchAxiosError, catchAxiosSuccess } from './Response'
import { getToken } from './Auth'

export const getCountries = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`settings/countries`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })

    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
export const getStates = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`settings/states`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })

    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
export const getCourseOfStudies = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`settings/course-of-studies`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })

    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
export const getCertificationCourses = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`settings/certification-courses`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })

    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
export const getIndustries = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`settings/industries`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })

    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
export const getJobTitles = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`settings/job-titles`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })

    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
export const getDegrees = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`settings/degrees`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })

    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
export const getLanguages = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`settings/languages`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })

    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
export const getDomains = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`settings/competence`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })

    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
export const getCore = async (domain) => {
  const token = await getToken()
  try {
    let res = await axios.get(`settings/competence/core/${domain}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })

    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
export const getSkills = async (core) => {
  const token = await getToken()
  try {
    let res = await axios.get(`settings/competence/skill/${core}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })

    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
