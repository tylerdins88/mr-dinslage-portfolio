<template>
  <div>
    <h2 v-if="isLoading">Loading...</h2>
    <h2 class="quoteapi" v-else>{{ quote.content }}</h2>
    <p class="quoteapi" v-if="!isLoading">- {{ quote.originator.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'QuoteAPI',
  data() {
    return {
      quote: {
        content: '',
        originator: {
          name: ''
        }
      },
      isLoading: true
    }
  },
  created() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_APP_RANDOM_QUOTE_API_KEY,
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
      }
    }

    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        this.quote.content = data.content
        this.quote.originator.name = data.originator.name
        this.isLoading = false
      })
      .catch((error) => {
        console.error(error)
        // handle errors
      })
  }
}
</script>

<style>
.quoteapi {
  text-align: center;
}
</style>
