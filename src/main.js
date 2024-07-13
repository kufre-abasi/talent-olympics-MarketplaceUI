import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'animate.css'

import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css'
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { VueQueryPlugin } from 'vue-query'
import DashboardLayout from '@/components/Layouts/DashboardLayout.vue'

import VueApexCharts from 'vue3-apexcharts'

import PrimeVue from 'primevue/config'

import Editor from 'primevue/editor'
// import ToggleSwitch from 'primevue/toggleswitch'

import Calendar from 'primevue/calendar'

import Dialog from 'primevue/dialog'
import 'primevue/resources/themes/aura-light-green/theme.css'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dropdown from 'primevue/dropdown'
import Rating from 'primevue/rating'
import Chart from 'primevue/chart'
import { Form, Field, ErrorMessage } from 'vee-validate'
import Checkbox from 'primevue/checkbox'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)
app.use(VueTelInput)

// app.component('ToggleSwitch', ToggleSwitch)
app.component('Editor', Editor)
app.component('Calendar', Calendar)
app.component('Checkbox', Checkbox)
app.component('PrimeDialog', Dialog)
app.component('DataTable', DataTable)
app.component('TableColumn', Column)
app.component('Dropdown', Dropdown)
app.component('Rating', Rating)
app.component('Chart', Chart)

app.component('vForm', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

// Vee Validate
import { defineRule } from 'vee-validate'

defineRule('required', (value) => {
  if (!value || !value.length) {
    return `This field is required`
  }
  return true
})

defineRule('email', (value) => {
  // Field is empty, should not pass
  if (!value) {
    return 'This field is required'
  }
  // Check if email
  let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!regex.test(value)) {
    return 'This field must be a valid email'
  }
  return true
})

defineRule('minLength', (value, [limit]) => {
  // The field is empty so it should pass
  if (!value || !value.length) {
    return true
  }
  if (value.length < limit) {
    return `This field must be at least ${limit} characters`
  }
  return true
})

import request from '@/axios/index'
app.config.globalProperties.$request = request

app.use(PrimeVue)

app.component('DashboardLayout', DashboardLayout)
app.component('Apex-chart', VueApexCharts)
app.use(Toast, { position: POSITION.TOP_RIGHT })
app.use(VueQueryPlugin)

app.mount('#app')
