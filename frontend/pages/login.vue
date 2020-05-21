<template>
  <div>
    <button type="button" @click="login">
      Login SSO
    </button>

    <nuxt-link to="/">
      Home
    </nuxt-link>
  </div>
</template>

<script>
import Keycloak from 'keycloak-js'

const initOptions = {
  url: 'https://keycloak.digitalservice.id/auth', realm: 'jabarprov', clientId: 'tes-masif-web'
}

const keycloak = Keycloak(initOptions)

export default {
  methods: {
    login () {
      keycloak.init(initOptions)
      keycloak.login({ redirectUri: 'http://localhost:3000' })
    }
  }
}
</script>
