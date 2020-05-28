<template>
  <div class="container">
    <div>
      <h1 class="title text-4xl">
        Dashboard {{ appName }}
      </h1>

      <div v-if="user" class="mt-4">
        Welcome, {{ user.firstName }}
      </div>

      <span class="inline-flex rounded-md shadow-sm mt-3">
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150" @click="logout">
          Logout
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',

  data () {
    return {
      appName: process.env.appName
    }
  },

  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },

  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>
