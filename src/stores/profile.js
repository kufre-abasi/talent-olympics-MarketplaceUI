import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getTalentProfile } from '@/services/Profile'

export const useUserProfile = defineStore('profile', () => {
  const user = ref({})
  const loading = ref(false)


  const userProfile = async () => {
    try {
      user.value = await getTalentProfile()
      return user.value
    } catch (error) {
      console.error(error)
    }
  }

  return {
    user,
    userProfile,
    loading
  }
})
