import Keycloak from 'keycloak-js'

const keycloak = Keycloak({
  url: 'https://keycloak.digitalservice.id/auth', realm: 'jabarprov', clientId: 'tes-masif-web'
})

export default ({ store, redirect }) => {
  if (keycloak.authenticated) {
    return true
  }

  return new Promise((resolve, reject) => {
    keycloak.init({
      onLoad: 'check-sso',
      checkLoginIframe: true,
      checkLoginIframeInterval: 5
    })
      .then((auth) => {
        if (auth) {
          store.commit('auth/UPDATE_USER', { user: { name: 'Yoga' } })

          return resolve()
        }

        redirect('/login')
      })
      .catch(reject)
  })
}
