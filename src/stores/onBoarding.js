import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useOnboardingStore = defineStore('onBoardingStore', () => {
    const step =ref(1);
    const cvDetails = ref({
      school_name: '',
      degree: '',
      field_of_study: '',
      start_date: '',
      end_date: '',
      description: '',
    })

    return {
      step,
      cvDetails
    }
})