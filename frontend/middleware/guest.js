export default ({ app, redirect }) => {
  if (app.$keycloak.authenticated) {
    return redirect('/')
  }

  return new Promise((resolve, reject) => {
    app.$keycloak.init({
      onLoad: 'check-sso',
      checkLoginIframe: true
    })
      .then((auth) => {
        if (auth) {
          return redirect('/')
        }

        resolve()
      })
      .catch(reject)
  })
}
