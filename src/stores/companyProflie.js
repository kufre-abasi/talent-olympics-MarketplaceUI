import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  getCompanyProfile,
  changeCompanyProfile,
  supervisorOverview,
  employeeInformation,
  teamPerformance,
  employeeAssessment,
  assignedAssessment,
  getAssessment,
  talentAssessmentAnswer,
  publishAssessmentAnswer,
  assessmentsFeedbacks,
  supervisorAssessment,
  viewEmployeeResult,
  supervisorAssessmentFeedback,
  assessmentGrading,
  managementRecordAssesment
} from '@/services/CompanyProfile'

export const useCompanyProfile = defineStore('company profile', () => {
  const company_profile = ref(null)
  const selected_company_profile = ref(null)
  const supervisorOverviewList = ref(null)
 const employeeInfo = ref(null)
 const teamPerformanceData = ref(null)
const employeeAssessmentsList = ref(null)
const assignedAssessmentList = ref(null)
const assessmentList = ref(null)
const assessmentsFeedbacksList = ref(null)  
const supervisorAssessmentFeedbackList = ref(null)  
const supervisorAssessmentList = ref(null) 
const viewEmployeeResultData = ref(null) 


  const handleManagementRecordAssesment = async (payload, id) => {
    try {
      let res = await managementRecordAssesment(payload, id)
      return res
    } catch (error) {
      console.error(error)
    }
  }
  const handleAssessmentGrading = async (payload, id) => {
    try {
      let res = await assessmentGrading(payload, id)
      return res
    } catch (error) {
      console.error(error)
    }
  }

  const handleViewEmployeeResult = async (assessment_code, talent) => {
    try {
      viewEmployeeResultData.value = await viewEmployeeResult(assessment_code, talent)
      return viewEmployeeResultData.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleSupervisorAssessment = async (employee_code) => {
    try {
      supervisorAssessmentList.value = await supervisorAssessment(employee_code)
      return supervisorAssessmentList.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleAssessmentsFeedbacks = async (employee_code) => {
    try {
      assessmentsFeedbacksList.value = await assessmentsFeedbacks(employee_code)
      return assessmentsFeedbacksList.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleSupervisorAssessmentFeedback = async (employee_code) => {
    try {
      supervisorAssessmentFeedbackList.value = await supervisorAssessmentFeedback(employee_code)
      return supervisorAssessmentFeedbackList.value
    } catch (error) {
      console.error(error)
    }
  }
  const handlePublishAssessmentAnswer = async (payload, id) => {
    try {
      let res = await publishAssessmentAnswer(payload, id)
      return res
    } catch (error) {
      console.error(error)
    }
  }
    const handleTalentAssessmentAnswer = async (payload) => {
      try {
        let res = await talentAssessmentAnswer(payload)
        return res
      } catch (error) {
        console.error(error)
      }
    }

  const handleGetAssessment = async (employee_code) => {
    try {
      assessmentList.value = await getAssessment(employee_code)
      return assessmentList.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleAssignedAssessment = async (employee_code) => {
    try {
      assignedAssessmentList.value = await assignedAssessment(employee_code)
      return assignedAssessmentList.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleEmployeeAssessment = async (employee_code) => {
    try {
      employeeAssessmentsList.value = await employeeAssessment(employee_code)
      return employeeAssessmentsList.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleTeamPerformance = async (employer_id) => {
    try {
      teamPerformanceData.value = await teamPerformance(employer_id)
      return teamPerformanceData.value
    } catch (error) {
      console.error(error)
    }
  }
    const handleEmployeeInformation = async (code, employer_id) => {
      try {
        employeeInfo.value = await employeeInformation(code, employer_id)
        return employeeInfo.value
      } catch (error) {
        console.error(error)
      }
    }

  const handleCompanyProfile = async () => {
    try {
      company_profile.value = await getCompanyProfile()
      return company_profile.value
    } catch (error) {
      console.error(error)
    }
  }

  const handleChangeCompanyProfile = async (id) => {
    try {
      selected_company_profile.value = await changeCompanyProfile(id)
      return selected_company_profile.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleSupervisorOverview = async (id) => {
    try {
      supervisorOverviewList.value = await supervisorOverview(id)
      return supervisorOverviewList.value
    } catch (error) {
      console.error(error)
    }
  }

  return {
    company_profile,
    handleCompanyProfile,
    selected_company_profile,
    handleChangeCompanyProfile,
    supervisorOverviewList,
    handleSupervisorOverview,
    employeeInfo,
    handleEmployeeInformation,
    handleTeamPerformance,
    teamPerformanceData,
    employeeAssessmentsList,
    handleEmployeeAssessment,
    assignedAssessmentList,
    handleAssignedAssessment,
    assessmentList,
    handleGetAssessment,
    handleTalentAssessmentAnswer,
    handlePublishAssessmentAnswer,
    assessmentsFeedbacksList,
    handleAssessmentsFeedbacks,
    supervisorAssessmentList,
    handleSupervisorAssessment,
    viewEmployeeResultData,
    handleViewEmployeeResult,
    handleAssessmentGrading,
    supervisorAssessmentFeedbackList,
    handleSupervisorAssessmentFeedback,
    handleManagementRecordAssesment
  }
})
