
import axios from '../axios'
import { catchAxiosError, catchAxiosSuccess } from './Response'
import { getToken } from './Auth'

export const getCompanyProfile = async () => {
  const token = await getToken()
  try {
    let res = await axios.get(`talent/company`, {
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
export const changeCompanyProfile = async (index) => {
  const token = await getToken()
  try {
    let res = await axios.get(`talent/company?employer=${index}`, {
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
export const supervisorOverview = async (index) => {
  const token = await getToken()
  try {
    let res = await axios.get(`talent/company/supervisor?employer=${index}`, {
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
export const employeeInformation = async (code, employer_id) => {
  const token = await getToken()
  try {
    let res = await axios.get(`talent/company/employee/${code}?employer=${employer_id}`, {
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
export const teamPerformance = async ( employer_id) => {
  const token = await getToken()
  try {
    let res = await axios.get(`talent/company/team/performance?employer=${employer_id}`, {
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

//========================================================== Employee Assessment ===============================================================
export const employeeAssessment = async (employee_code) => {
  const token = await getToken()
  try {
    let res = await axios.get(`assessments/employee/${employee_code}`, {
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
export const supervisorAssessment = async (employee_code) => {
  const token = await getToken()
  try {
    let res = await axios.get(`assessments/employee/${employee_code}?show=supervisor`, {
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
export const employeeAssessmentFeedback = async (employee_code) => {
  const token = await getToken()
  try {
    let res = await axios.get(`assessments/feedbacks/${employee_code}`, {
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
export const supervisorAssessmentFeedback = async (employee_code) => {
  const token = await getToken()
  try {
    let res = await axios.get(`assessments/feedbacks/${employee_code}?show=supervisor`, {
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

export const getAssessment = async (employee_code) => {
  const token = await getToken()
  try {
    let res = await axios.get(`assessments/${employee_code}`, {
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
export const talentAssessmentAnswer = async (payload) => {
  const token = await getToken()
  try {
    let res = await axios.post(`assessments/talent/answer`, payload, {
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
export const publishAssessmentAnswer = async (payload, id) => {
  const token = await getToken()
  try {
    let res = await axios.patch(`assessments/${id}/talent/publish`, payload, {
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
export const assessmentsFeedbacks = async (employee_code) => {
  const token = await getToken()
  try {
    let res = await axios.get(`assessments/feedbacks/${employee_code}`, {
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
//========================================================== Manage Assessment ===============================================================
export const assignedAssessment = async (employee_code) => {
  const token = await getToken()
  try {
    let res = await axios.get(`assessments/${employee_code}/assigned/employees`, {
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

export const viewEmployeeResult = async (assessment_code, talent) => {
  const token = await getToken()
  try {
    let res = await axios.get(`assessments/${assessment_code}/result/${talent}`, {
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
export const viewAssessmentFeedback = async (assessment_code, talent) => {
  const token = await getToken()
  try {
    let res = await axios.get(`assessments/${assessment_code}/feedback/${talent}`, {
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
export const assessmentGrading = async (payload,id) => {
  const token = await getToken()
  try {
    let res = await axios.post(`assessments/${id}/supervisor/scoresheet`,payload, {
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
export const managementRecordAssesment = async (payload, id) => {
  const token = await getToken()
  try {
    let res = await axios.patch(`assessments/${id}/supervisor/feedback`, payload, {
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
