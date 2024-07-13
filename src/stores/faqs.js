import { defineStore } from 'pinia'
// import SampleThree from '@/assets/img/sampleThree.webp'

const useFaqStore = defineStore('help', {
  state: () => {
    return {
      faqs: [
        {
          name: 'What is talent-olympics-marketplace, and what services do you offer?',
          content: `<p>talent-olympics-marketplace is a talent management and competence vetting platform that connects qualified talent with top employers in the industry. We offer a range of services, including job postings, talent management tools, CV builder, and a competent vetting system.</p>`,
          showContent: false,
          fags_category: 'user-accounts'
        },
        {
          name: 'How do I create an account with talent-olympics-marketplace?',
          content: `<p>Creating an account with talent-olympics-marketplace is easy. Simply visit our website and click on the "Sign Up" button in the top right corner of the page. Follow the instructions to complete the registration process.

</p>`,
          showContent: false,
          fags_category: 'user-accounts'
        },
        {
          name: 'Is talent-olympics-marketplace free to use?',
          content: `<p>Creating an account with talent-olympics-marketplace is free. However, some of our services, such as our competent vetting system, may require payment

</p>`,
          showContent: false,
          fags_category: 'user-accounts'
        },
        {
          name: 'How does the competent vetting system work?',
          content: `<p>Our competent vetting system evaluates a candidate's skills and experience to ensure they meet the requirements for a specific job. Candidates are assessed using a range of tests and assessments, and the results are used to determine their suitability for the job.

</p>`,
          showContent: false,
          fags_category: 'user-accounts'
        },
        {
          name: 'How do I post a job on talent-olympics-marketplace?',
          content: `<p>Posting a job on talent-olympics-marketplace is easy. Simply log in to your account as an employer, click on the "Campaign" button in the left side menu, and follow the instructions to complete the job posting process.

</p>`,
          showContent: false,
          fags_category: 'user-accounts'
        },
        {
          name: 'How do I search for candidate on talent-olympics-marketplace?',
          content: `<p>Searching for candidates on talent-olympics-marketplace is easy. Simply log in to your account, click on the "Search Candidates" button, and use our advanced search filters to find the best candidates for your job.
</p>`,
          showContent: false,
          fags_category: 'user-accounts'
        },
        {
          name: 'How do I contact a candidate on talent-olympics-marketplace?',
          content: `<p>Once you've found a candidate you're interested in, you can contact them directly through our messaging system

</p>`,
          showContent: false,
          fags_category: 'user-accounts'
        },
        {
          name: 'How do I use the CV builder on talent-olympics-marketplace?',
          content: `<p>Using our CV builder is easy. Simply visit our Build Your CV page, enter your details, choose a template, and customize your CV to suit your needs.

</p>`,
          showContent: false,
          fags_category: 'user-accounts'
        },
        {
          name: 'How can I contact talent-olympics-marketplace if I have any questions or concerns?',
          content: `<p>If you have any questions or concerns, you can contact us through our contact form, and one of our dedicated customer service representatives will get back to you as soon as possible.</p>
<p>
At talent-olympics-marketplace, we're committed to providing our users with the best possible service. If you have any additional questions or concerns, please don't hesitate to contact us.

</p>`,
          showContent: false,
          fags_category: 'user-accounts'
        },
      ]
    }
  },
  getters: {
  },
  actions: {
    toogleFaq(index) {
      this.faqs.map((item) => {
        item.showContent = false
      })

      this.faqs[index].showContent = !this.faqs[index].showContent
    }
  }
})

export default useFaqStore
