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

              store.dispatch('auth/saveToken', {
                token: app.$keycloak.token
              })

              app.$axios.setToken(app.$keycloak.token, 'Bearer')
            } else {
              // console.log('Token not refreshed, valid for ' + Math.round(app.$keycloak.tokenParsed.exp + app.$keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds')
            }
          }).catch(() => {
            // console.log('Failed to refresh token')
          })
        }, 60000)

        store.dispatch('auth/updateUserSSO')

        store.dispatch('auth/saveToken', {
          token: app.$keycloak.token
        })

        app.$axios.setToken(app.$keycloak.token, 'Bearer')

        return resolve()
      })
      .catch(reject)
  })
}
