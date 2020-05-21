import Cookies from 'js-cookie'

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
  SET_TOKEN (state, token) {
    state.token = token
  },

  UPDATE_USER (state, payload) {
    state.user = payload
  },

  LOGOUT (state) {
    state.user = null
    state.token = null
  }
}

// actions
export const actions = {
  updateUser ({ commit }, payload) {
    commit('UPDATE_USER', payload)
  },

  async updateUserSSO ({ commit }) {
    const userProfile = await this.$keycloak.loadUserProfile()

    commit('UPDATE_USER', userProfile)
  },

  saveToken ({ commit, dispatch }, { token }) {
    commit('SET_TOKEN', token)

    Cookies.set('token', token)
  },

  clearToken ({ commit }) {
    Cookies.remove('token')
  },

  async logout ({ commit }) {
    await this.$keycloak.logout()

    Cookies.remove('token')

    commit('LOGOUT')
  }
}
