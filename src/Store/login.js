import Vue from 'vue'
    import Vuex from 'vuex'
    import axios from 'axios'
   import {router} from '../main'
    Vue.use(Vuex)

      const state = {
      status: '',
        token:  '',
        user: {}
      };
      const getters = {
        isLoggedIn: state => state.token,
        authStatus: state => state.status,
      };
     const mutations = {
        auth_request(state) {
            state.status = 'loading'
          },
          auth_success(state, token, user) {
            state.status = true
            state.token = token
            state.user = user
          },
          auth_error(state) {
            state.status = false
          },
          logout(state) {
            state.status = ''
            state.token = ''
          },
      };
      const actions = {
        signin({ commit }, user) {
            return new Promise((resolve, reject) => {
              commit('auth_request')
              axios({ url: 'http://34.210.249.15:8443/users/login?', data: user, method: 'POST' })
              .then(resp => {
                console.log("resp",resp)
                localStorage.setItem('token', resp.data.data.token)
                  const token = resp.data.token
                  const user = resp.data.user
                  if(resp.data.token) {
                    router.push('/bookflight')
                  }
                  commit('auth_success', token, user)
                  resolve(resp)
                })
                .catch(err => {
                  commit('auth_error')
                  localStorage.removeItem('token')
                  reject(err)
                })
               
                })
          },

      signup({ commit }, user) {
        return new Promise((resolve, reject) => {
          commit('auth_request')
            console.log("user", user)
             axios({ url: 'http://34.210.249.15:8443/users/register?', data: user, method: 'POST' })
            .then(resp => {
              const token = resp.data.token
              const user = resp.data.user
              localStorage.setItem('token', token)
            
              axios.defaults.headers.common['Authorization'] = token
              commit('auth_success', token, user)
              resolve(resp)
            })
            .catch(err => {
              commit('auth_error', err)
              localStorage.removeItem('token')
              reject(err)
            })
        })
      },
      logout ({commit}) {
        commit('logout')
        localStorage.clear()
      },
    
    };
      
      export default{
        state,
        getters,
        mutations,
        actions,
    }   

   