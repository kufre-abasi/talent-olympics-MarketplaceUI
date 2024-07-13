import axios from '../axios'
import { catchAxiosError, catchAxiosSuccess } from './Response'
import { getToken } from './Auth'

export const updateTalentPhoto = async (payload) => {
  const token = await getToken()
  try {
    let res = await axios.post(`talent/resume/photo`, payload, {
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
export const getTalentProfile = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`auth/user`, {
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
export const getTalentResume = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`talent/resume`, {
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
export const postTalentResume = async (payload) => {
  const token = await getToken()
  try {
    let res = await axios.post(`talent/resume`,payload, {
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
export const postTalentContact = async (payload) => {
  const token = await getToken()
  try {
    let res = await axios.post(`talent/resume/contact`, payload, {
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
export const updateWorkExperience = async (id,payload) => {
  const token = await getToken()
  try {
    let res = await axios.put(`talent/resume/work-experiences/${id}`, payload, {
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
export const deleteWorkExperience = async (id) => {
  const token = await getToken()
  try {
    let res = await axios.delete(`talent/resume/work-experiences/${id}`, {
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
export const createWorkExperience = async (payload) => {
  const token = await getToken()
  try {
    let res = await axios.post(`talent/resume/work-experiences`, payload, {
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
export const updateEducation = async (id, payload) => {
  const token = await getToken()
  try {
    let res = await axios.put(`talent/resume/educations/${id}`, payload, {
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
export const deleteEducation = async (id) => {
  const token = await getToken()
  try {
    let res = await axios.delete(`talent/resume/educations/${id}`, {
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
export const createEducation = async (payload) => {
  const token = await getToken()
  try {
    let res = await axios.post(`talent/resume/educations`, payload, {
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
export const updateCertifications = async (id, payload) => {
  const token = await getToken()
  try {
    let res = await axios.put(`talent/resume/certifications/${id}`, payload, {
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
export const deleteCertifications = async (id) => {
  const token = await getToken()
  try {
    let res = await axios.delete(`talent/resume/certifications/${id}`, {
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
export const createCertifications = async (payload) => {
  const token = await getToken()
  try {
    let res = await axios.post(`talent/resume/certifications`, payload, {
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
export const updateReferences = async (id, payload) => {
  const token = await getToken()
  try {
    let res = await axios.put(`talent/resume/references/${id}`, payload, {
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
export const deleteReferences = async (id) => {
  const token = await getToken()
  try {
    let res = await axios.delete(`talent/resume/references/${id}`, {
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
export const createReferences = async (payload) => {
  const token = await getToken()
  try {
    let res = await axios.post(`talent/resume/references`, payload, {
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
export const createCompetence = async (payload) => {
  const token = await getToken()
  try {
    let res = await axios.post(`talent/resume/competence`, payload, {
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
export const getCompetences = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`talent/resume/competence`, {
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
export const editCompetences = async (id,payload) => {
  const token = await getToken()
  try {
    let res = await axios.put(`talent/resume/competence/${id}`,payload, {
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
export const deleteCompetences = async (id) => {
  const token = await getToken()
  try {
    let res = await axios.delete(`talent/resume/competence/${id}`, {
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
export const createAward = async (payload) => {
  const token = await getToken()
  try {
    let res = await axios.post(`talent/resume/awards`, payload, {
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
export const getAward = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`talent/resume/awards`, {
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
export const deleteAward = async (id) => {
  const token = await getToken()
  try {
    let res = await axios.delete(`talent/resume/awards/${id}`, {
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

export const updateAward = async (id, payload) => {
  const token = await getToken()
  try {
    let res = await axios.put(`talent/resume/awards/${id}`,payload, {
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
export const createHobbies = async (payload) => {
  const token = await getToken()
  try {
    let res = await axios.post(`talent/resume/hobbies`, payload, {
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
export const getHobbies = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`talent/resume/hobbies`, {
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
export const deleteHobbies = async (id) => {
  const token = await getToken()
  try {
    let res = await axios.delete(`talent/resume/hobbies/${id}`, {
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

export const updateHobbies = async (id, payload) => {
  const token = await getToken()
  try {
    let res = await axios.put(`talent/resume/hobbies/${id}`, payload, {
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
export const createlanguages = async (payload) => {
  const token = await getToken()
  try {
    let res = await axios.post(`talent/resume/languages`, payload, {
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
export const getlanguages = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`talent/resume/languages`, {
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
export const deletelanguages = async (id) => {
  const token = await getToken()
  try {
    let res = await axios.delete(`talent/resume/languages/${id}`, {
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

export const updatelanguages = async (id, payload) => {
  const token = await getToken()
  try {
    let res = await axios.put(`talent/resume/languages/${id}`, payload, {
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
