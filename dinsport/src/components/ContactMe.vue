<template>
  <div class="formcontainer">
    <div class="emailform max-w-lg mx-auto shadow-lg rounded-lg overflow-hidden">
      <form @submit.prevent="submitForm" ref="formRef" class="p-6">
        <div class="mb-5">
          <label for="user_name" class="nameLabel text-sm">Name:</label>
          <input
            v-model="formData.user_name"
            type="text"
            id="user_name"
            name="user_name"
            class="personsName block w-full mt-1 px-4 py-2.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-600"
            required
          />
        </div>

        <div class="mb-5">
          <label for="user_email" class="emailLabel text-sm">Email:</label>
          <input
            v-model="formData.user_email"
            type="email"
            id="user_email"
            name="user_email"
            class="personsEmail block w-full mt-1 px-4 py-2.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-600"
            required
          />
        </div>

        <div class="mb-5">
          <label for="message" class="messageLabel text-sm">Message:</label>
          <textarea
            v-model="formData.message"
            id="message"
            name="message"
            rows="4"
            class="personsMessage block w-full mt-1 px-4 py-2.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-600"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-300 ease-in-out"
        >
          Send
        </button>

        <span v-if="isSubmitting" class="block mt-2 text-gray-600 dark:text-gray-400"
          >Sending...</span
        >
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const userId = import.meta.env.VITE_EMAILJS_USER_ID

export default {
  data() {
    return {
      formData: {
        user_name: '',
        user_email: '',
        message: ''
      },
      isSubmitting: false
    }
  },
  methods: {
    async submitForm(event) {
      event.preventDefault()

      const form = this.$refs.formRef

      if (form.checkValidity()) {
        this.isSubmitting = true

        try {
          await this.sendEmail(form)
          console.log('Email sent successfully!')

          // Reset the form fields
          this.formData.user_name = ''
          this.formData.user_email = ''
          this.formData.message = ''
        } catch (error) {
          console.error('Failed to send email:', error)
        } finally {
          this.isSubmitting = false
        }
      } else {
        console.warn('Form is not valid')
      }
    },
    sendEmail(form) {
      return emailjs
        .sendForm(serviceId, templateId, form, userId)
        .then((result) => {
          console.log('SUCCESS!', result.text)
        })
        .catch((error) => {
          console.log('FAILED...', error.text)
          throw error // Re-throw the error for further handling
        })
    }
  }
}
</script>

<style scoped>
/* Add any additional styling or overrides here */

.formcontainer {
  margin-top: 3em;
}

.emailform {
  margin-top: 40px;
  background-color: #006db0;
}

.nameLabel,
.emailLabel,
.messageLabel {
  color: black;
  margin-left: 20px;
}

.personsName,
.personsEmail,
.personsMessage {
  color: black;
  background-color: silver;
}

button {
  color: black;
  background-color: silver;
}

button:hover {
  background-color: #006db0;
  border: 1px solid black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

@media (max-width: 640px) {
  .emailform {
    margin-top: 200px;
    max-width: 90%;
  }
}
</style>
