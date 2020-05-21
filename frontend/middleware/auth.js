export default ({ app, store, redirect }) => {
  if (app.$keycloak.authenticated) {
    return true
  }

  return new Promise((resolve, reject) => {
    app.$keycloak.init({
      onLoad: 'check-sso',
      checkLoginIframe: true
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
