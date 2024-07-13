import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import {
  getTalentResume,
  postTalentResume,
  postTalentContact,
  updateWorkExperience,
  createWorkExperience,
  updateEducation,
  createEducation,
  updateCertifications,
  createCertifications,
  updateReferences,
  createReferences,
  deleteReferences,
  deleteCertifications,
  deleteEducation,
  deleteWorkExperience,
  createAward,
  getAward,
  deleteAward,
  updateAward,
  createHobbies,
  getHobbies,
  deleteHobbies,
  updateHobbies,
  createlanguages,
  getlanguages,
  deletelanguages,
  updatelanguages,
  createCompetence,
  getCompetences,
  updateTalentPhoto,
  editCompetences,
  deleteCompetences
} from '@/services/Cv'

export const useUserCv = defineStore('Cv', () => {
  const UserCvData = reactive({
    first_name: '',
    last_name: '',
    gender: '',
    dabe_of_birth: '',
    industry_id: '',
    job_title: '',
    career_summary: '',
    phone: '',
    email: '',
    country_code: '',
    state_id: '',
    city: '',
    postal_code: '',
    address: '',
    industry_name: '',
    imageUrl: '',
    country_name: '',
    state_name: '',
    work_experiences: [],
    educations: [],
    certifications: [],
    references: [],
    awards: [],
    languages:[],
    hobbies:[]
  })
  const talentResume = ref({})
  const talentAward = ref({})
  const competencesList = ref({})

const handleGetCompetences = async () => {
  try {
    competencesList.value = await getCompetences()
    return competencesList.value
  } catch (error) {
    console.error(error)
  }
}
const handleDeleteCompetences = async (id) => {
  try {
    let res = await deleteCompetences(id)
    return res
  } catch (error) {
    console.error(error)
  }
}
const handleEditCompetences = async (id,payload) => {
  try {
    let res = await editCompetences(id,payload)
    return res
  } catch (error) {
    console.error(error)
  }
}
    const handleGetTalentResume = async () => {
      try {
        talentResume.value = await getTalentResume()
        return talentResume.value
      } catch (error) {
        console.error(error)
      }
    }
    const handleUpdateTalentPhoto = async (payload) => {
      try {
        let res = await updateTalentPhoto(payload)
        return res
      } catch (error) {
        console.error(error)
      }
    } 
       const handlePostTalentResume = async (payload) => {
      try {
        let res = await postTalentResume(payload)
        return res
      } catch (error) {
        console.error(error)
      }
    }

    const handleCreateCompetence = async (payload) => {
      try {
        let res = await createCompetence(payload)
        return res
      } catch (error) {
        console.error(error)
      }
    }
    const handlePostTalentContact = async (payload) => {
      try {
        let res = await postTalentContact(payload)
        return res
      } catch (error) {
        console.error(error)
      }
    }
    const handleUpdateWorkExperience = async (id,payload) => {
      try {
        let res = await updateWorkExperience(id,payload)
        return res
      } catch (error) {
        console.error(error)
      }
    }
        const handleDeleteWorkExperience = async (id) => {
          try {
            let res = await deleteWorkExperience(id)
            return res
          } catch (error) {
            console.error(error)
          }
        }

    const handleAddWorkExperience = async (payload) => {
      try {
        let res = await createWorkExperience(payload)
        return res
      } catch (error) {
        console.error(error)
      }
    }

    const handleUpdateEducation = async (id, payload) => {
      try {
        let res = await updateEducation(id, payload)
        return res
      } catch (error) {
        console.error(error)
      }
    }
            const handleDeleteEducation = async (id) => {
              try {
                let res = await deleteEducation(id)
                return res
              } catch (error) {
                console.error(error)
              }
            }

    const handleAddEducation = async (payload) => {
      try {
        let res = await createEducation(payload)
        return res
      } catch (error) {
        console.error(error)
      }
    }
    const handleUpdateCertifications = async (id, payload) => {
      try {
        let res = await updateCertifications(id, payload)
        return res
      } catch (error) {
        console.error(error)
      }
    }
                const handleDeleteCertifications = async (id) => {
                  try {
                    let res = await deleteCertifications(id)
                    return res
                  } catch (error) {
                    console.error(error)
                  }
                }

    const handleAddCertifications = async (payload) => {
      try {
        let res = await createCertifications(payload)
        return res
      } catch (error) {
        console.error(error)
      }
    }
    const handleUpdateReferences = async (id, payload) => {
      try {
        let res = await updateReferences(id, payload)
        return res
      } catch (error) {
        console.error(error)
      }
    }
                    const handleDeleteReferences = async (id) => {
                      try {
                        let res = await deleteReferences(id)
                        return res
                      } catch (error) {
                        console.error(error)
                      }
                    }

    const handleAddReferences = async (payload) => {
      try {
        let res = await createReferences(payload)
        return res
      } catch (error) {
        console.error(error)
      }
    }

    const handleAddAward = async (payload) => {
      try {
        let res = await createAward(payload)
        return res
      } catch (error) {
        console.error(error)
      }
    }
const handleGetTalentAward = async () => {
  try {
    talentAward.value = await getAward()
    return talentAward.value
  } catch (error) {
    console.error(error)
  }
}
    const handleUpdateTalentAward = async (id, payload) => {
      try {
        let res = await updateAward(id, payload)
        return res
      } catch (error) {
        console.error(error)
      }
    }
    const handleDeleteTalentAward = async (id) => {
      try {
        let res = await deleteAward(id)
        return res
      } catch (error) {
        console.error(error)
      }
    }
        const handleAddHobby = async (payload) => {
          try {
            let res = await createHobbies(payload)
            return res
          } catch (error) {
            console.error(error)
          }
        }
        const handleGetTalentHobby = async () => {
          try {
            let res = await getHobbies()
            return res
          } catch (error) {
            console.error(error)
          }
        }
        const handleUpdateTalentHobby = async (id, payload) => {
          try {
            let res = await updateHobbies(id, payload)
            return res
          } catch (error) {
            console.error(error)
          }
        }
        const handleDeleteTalentHobby = async (id) => {
          try {
            let res = await deleteHobbies(id)
            return res
          } catch (error) {
            console.error(error)
          }
        }
        const handleAddlanguages = async (payload) => {
          try {
            let res = await createlanguages(payload)
            return res
          } catch (error) {
            console.error(error)
          }
        }
        const handleGetTalentlanguages = async () => {
          try {
            let res = await getlanguages()
            return res
          } catch (error) {
            console.error(error)
          }
        }
        const handleUpdateTalentlanguages = async (id, payload) => {
          try {
            let res = await updatelanguages(id, payload)
            return res
          } catch (error) {
            console.error(error)
          }
        }
        const handleDeleteTalentlanguages = async (id) => {
          try {
            let res = await deletelanguages(id)
            return res
          } catch (error) {
            console.error(error)
          }
        }


  return {
    UserCvData,
    talentResume,
    handleGetTalentResume,
    handlePostTalentResume,
    handlePostTalentContact,
    handleUpdateWorkExperience,
    handleAddWorkExperience,
    handleUpdateEducation,
    handleAddEducation,
    handleUpdateCertifications,
    handleAddCertifications,
    handleUpdateReferences,
    handleAddReferences,
    handleDeleteReferences,
    handleDeleteCertifications,
    handleDeleteEducation,
    handleDeleteWorkExperience,
    handleAddAward,
    talentAward,
    handleGetTalentAward,
    handleUpdateTalentAward,
    handleDeleteTalentAward,
    handleAddHobby,
    handleGetTalentHobby,
    handleUpdateTalentHobby,
    handleDeleteTalentHobby,
    handleAddlanguages,
    handleGetTalentlanguages,
    handleUpdateTalentlanguages,
    handleDeleteTalentlanguages,
    handleCreateCompetence,
    competencesList,
    handleGetCompetences,
    handleUpdateTalentPhoto,
    handleEditCompetences,
    handleDeleteCompetences
  }
})
