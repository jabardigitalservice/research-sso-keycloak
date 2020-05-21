<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Dashboard
      </h1>
      <button type="button" @click="logout">
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import Keycloak from 'keycloak-js'
import Logo from '~/components/Logo.vue'

const initOptions = {
  url: 'https://keycloak.digitalservice.id/auth', realm: 'jabarprov', clientId: 'tes-masif-web'
}

const keycloak = Keycloak(initOptions)

export default {
  middleware: 'auth',

  components: {
    Logo
  },

  methods: {
    logout () {
      keycloak.init(initOptions)
      keycloak.logout()
    }
  }
}
</script>
