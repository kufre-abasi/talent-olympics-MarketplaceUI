import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  getGoals,
  createGoals,
  completGoals,
  unarchiveGoals,
  archiveGoals,
  getGoalsPerformance,
  getGoalsCalendar,
  getEmployeeGoals
} from '@/services/Goals'

export const useUserGoals= defineStore('goals', () => {
  const goals = ref({})
  const employeeGoals = ref({})
  const goalsPerformance = ref({})
  const goalsCalendar = ref({})


  const handleGetGoalsCalendar = async () => {
    try {
      goalsCalendar.value = await getGoalsCalendar()
      return goalsCalendar.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleGetGoalsPerformance = async () => {
    try {
      goalsPerformance.value = await getGoalsPerformance()
      return goalsPerformance.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleGetGoals = async () => {
    try {
      goals.value = await getGoals()
      return goals.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleGetEmployeeGoals = async (employee_code) => {
    try {
      employeeGoals.value = await getEmployeeGoals(employee_code)
      return employeeGoals.value
    } catch (error) {
      console.error(error)
    }
  }
  const handleCreateGoals = async (payload) => {
    try {
      let res = await createGoals(payload)
      return res
    } catch (error) {
      console.error(error)
    }
  }
  const handleCompletGoals = async (id, payload) => {
    try {
      let res = await completGoals(id, payload)
      return res
    } catch (error) {
      console.error(error)
    }
  }
  const handleUnarchiveGoals = async (id) => {
    try {
      let res = await unarchiveGoals(id)
      return res
    } catch (error) {
      console.error(error)
    }
  }
  const handleArchiveGoals = async (id) => {
    try {
      let res = await archiveGoals(id)
      return res
    } catch (error) {
      console.error(error)
    }
  }

  return {
    goals,
    handleGetGoals,
    handleCreateGoals,
    handleCompletGoals,
    handleArchiveGoals,
    handleUnarchiveGoals,
    goalsPerformance,
    handleGetGoalsPerformance,
    goalsCalendar,
    handleGetGoalsCalendar,
    employeeGoals,
    handleGetEmployeeGoals
  }
})
