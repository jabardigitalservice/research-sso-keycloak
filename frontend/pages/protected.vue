<template>
  <div class="container">
    <div>
      <h1 class="title text-4xl">
        Protected Page
      </h1>
      <div class="mt-4">
        Response API: <span class="font-bold">{{ response }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',

  data () {
    return {
      response: 'N/A'
    }
  },

  async mounted () {
    const data = await this.$axios.$get('/protected')

    this.response = data.status
  }
}
</script>
