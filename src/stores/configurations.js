import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  getCountries,
  getStates,
  getCourseOfStudies,
  getCertificationCourses,
  getIndustries,
  getJobTitles,
  getDegrees,
  getLanguages,
  getDomains,
  getCore,
  getSkills
} from '@/services/Configurations'
import dayjs from 'dayjs'

export const useConfig = defineStore('Configurations', () => {
  const countries = ref({})
  const states = ref({})
  const courseOfStudies = ref({})
  const certificationCourses = ref({})
  const industries = ref({})
  const jobTitles = ref({})
  const degrees = ref({})
  const languages = ref({})
  const domains = ref({})
  const core = ref({})
  const skills = ref({})

  const handleConfigDate = (date, formate)=>{
    return dayjs(date).format(formate)
  }

  const handleGetCountries = async () => {
    try {
      countries.value = await getCountries()
      return countries.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleGetState = async () => {
    try {
      states.value = await getStates()
      return states.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleGetCourseOfStudies = async () => {
    try {
      courseOfStudies.value = await getCourseOfStudies()
      return courseOfStudies.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleGetCertificationCourses = async () => {
    try {
      certificationCourses.value = await getCertificationCourses()
      return certificationCourses.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleGetIndustries = async () => {
    try {
      industries.value = await getIndustries()
      return industries.value   
    } catch (error) {
      console.error(error)
    }
  }
  const handleGetJobTitles = async () => {
    try {
      jobTitles.value = await getJobTitles()
      return jobTitles.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleGetDegrees = async () => {
    try {
      degrees.value = await getDegrees()
      return degrees.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleGetLanguages = async () => {
    try {
      languages.value = await getLanguages()
      return languages.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleGetDomains = async () => {
    try {
      domains.value = await getDomains()
      return domains.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleGetCore = async () => {
    try {
      core.value = await getCore()
      return core.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleGetSkills = async () => {
    try {
      skills.value = await getSkills()
      return skills.value
    } catch (error) {
      console.error(error)
    }
  }
  return {
    countries,
    states,
    courseOfStudies,
    certificationCourses,
    industries,
    jobTitles,
    degrees,
    languages,
    handleGetCountries,
    handleGetState,
    handleGetLanguages,
    handleGetDegrees,
    handleGetJobTitles,
    handleGetIndustries,
    handleGetCertificationCourses,
    handleGetCourseOfStudies,
    handleConfigDate,
    skills,
    handleGetSkills,
    handleGetCore,
    core,
    handleGetDomains,
    domains
  }
})
