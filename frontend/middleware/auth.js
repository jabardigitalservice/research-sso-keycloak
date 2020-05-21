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
        if (!auth) {
          store.dispatch('auth/clearToken')

          return redirect('/login')
        }

        setInterval(() => {
          app.$keycloak.updateToken(70).then((refreshed) => {
            if (refreshed) {
              // console.log('Token refreshed ' + refreshed)
            } else {
              // console.log('Token not refreshed, valid for ' + Math.round(app.$keycloak.tokenParsed.exp + app.$keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds')
            }
          }).catch(() => {
            // console.log('Failed to refresh token')
          })
        }, 60000)

        store.dispatch('auth/saveToken', {
          token: app.$keycloak.token
        })

        store.dispatch('auth/updateUserSSO')

        return resolve()
      })
      .catch(reject)
  })
}
