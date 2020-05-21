// state
export const state = () => ({
  user: null,
  token: null
})

// getters
export const getters = {
  user: state => state.user,
  token: state => state.token,
  check: state => state.user !== null
}

// mutations
export const mutations = {
  UPDATE_USER (state, { user }) {
    state.user = user
  }
}

// actions
export const actions = {
  //
}
