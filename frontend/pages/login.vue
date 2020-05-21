<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div class="mt-6">
          <span class="block w-full rounded-md shadow-sm">
            <button type="button" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition duration-150 ease-in-out" @click="login">
              Login SSO
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Keycloak from 'keycloak-js'

const initOptions = {
  url: 'https://keycloak.digitalservice.id/auth', realm: 'jabarprov', clientId: 'tes-masif-web'
}

const keycloak = Keycloak(initOptions)

export default {
  layout: 'auth',

  methods: {
    login () {
      keycloak.init(initOptions)
      keycloak.login({ redirectUri: 'http://localhost:3000' })
    }
  }
}
</script>
