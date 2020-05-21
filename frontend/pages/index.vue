<template>
  <div class="container">
    <div>
      <h1 class="title">
        Dashboard
      </h1>

      <span class="inline-flex rounded-md shadow-sm mt-3">
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150" @click="logout">
          Logout
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',

  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>
