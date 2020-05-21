import Keycloak from 'keycloak-js'

const keycloak = Keycloak({
  url: process.env.keycloakUrl,
  realm: process.env.keycloakRealm,
  clientId: process.env.keycloakClientId
})

export default ({ app }, inject) => {
  inject('keycloak', keycloak)
}
