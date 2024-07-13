import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  getTalentJobs,
  getTalentJobDeatils,
  getTalentJobRecommendations,
  getTopEmployers,
  applyForJob,
  savedJob,
  getMyjobApplied,
  getMyjobSaved,
  jobInvitations,
  jobInvitationsDeatils,
  acceptJobInvitations,
  rejectJobInvitations,
  getCareerSuggestion
} from '@/services/Job'

export const useJob = defineStore('jobs', () => {
  const jobs = ref({})
  const jobDeatils = ref({})
  const jobRecommendations = ref({})
  const topEmployers = ref({})
  const myjobApplied = ref({})
  const jobInvitation = ref({})
  const jobInvitationDeatils = ref({})
  const savedJobs = ref({})
  const careerSuggestion = ref({})

    const handleGetCareerSuggestion = async () => {
      try {
        careerSuggestion.value = await getCareerSuggestion()
        return careerSuggestion.value
      } catch (error) {
        console.error(error)
      }
    }

  const handleGetTalentJobs = async (query) => {
    try {
      jobs.value = await getTalentJobs(query)
      return jobs.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleGetTalentJobDeatils = async (id) => {
    try {
      jobDeatils.value = await getTalentJobDeatils(id)
      return jobDeatils.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleGetTalentJobRecommendations = async () => {
    try {
      jobRecommendations.value = await getTalentJobRecommendations()
      return jobRecommendations.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleGetTopEmployers = async () => {
    try {
      topEmployers.value = await getTopEmployers()
      return topEmployers.value
    } catch (error) {
      console.error(error)
    }
  }

  const handleApplyForJob = async (id) => {
    let payload = {
      campaign_id:id
    }
    try {
      let res = await applyForJob(payload)
      return res
    } catch (error) {
      console.error(error)
    }
  }
  const handleSavedJob = async (id) => {
        let payload = {
          campaign_id: id
        }

    try {
      let res = await savedJob(payload)
      return res
    } catch (error) {
      console.error(error)
    }
  }
  const handleGetMyjobApplied = async () => {
    try {
      myjobApplied.value = await getMyjobApplied()
      return myjobApplied.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleJobInvitations = async () => {
    try {
      jobInvitation.value = await jobInvitations()
      return jobInvitation.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleJobInvitationDeatails = async (id) => {
    try {
      jobInvitationDeatils.value = await jobInvitationsDeatils(id)
      return jobInvitationDeatils.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleAcceptJobInvitations = async (id) => {
    try {
      let res = await acceptJobInvitations(id)
      return res
    } catch (error) {
      console.error(error)
    }
  }
    const handleRejectJobInvitations = async (id) => {
      try {
        let res = await rejectJobInvitations(id)
        return res
      } catch (error) {
        console.error(error)
      }
    }
    const handleGetMyjobSaved = async () => {
      try {
        savedJobs.value = await getMyjobSaved()
        return savedJobs.value
      } catch (error) {
        console.error(error)
      }
    }



  return {
    jobs,
    jobDeatils,
    jobRecommendations,
    topEmployers,
    handleGetTalentJobs,
    handleGetTalentJobDeatils,
    handleGetTalentJobRecommendations,
    handleGetTopEmployers,
    handleApplyForJob,
    handleSavedJob,
    handleGetMyjobApplied,
    handleJobInvitations,
    handleJobInvitationDeatails,
    handleAcceptJobInvitations,
    handleRejectJobInvitations,
    handleGetMyjobSaved,
    myjobApplied,
    jobInvitation,
    savedJobs,
    careerSuggestion,
    handleGetCareerSuggestion
  }
})
