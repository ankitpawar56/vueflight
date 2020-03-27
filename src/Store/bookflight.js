import Vue from 'vue'
    import Vuex from 'vuex'
    import axios from 'axios'

    Vue.use(Vuex)
        const state = {
            myBookings : [],
            isBooked: false,
            msg: ''
      };
       const getters  = {
        getBookings(state) {
          return state.myBookings;
        },
        getMsg(state) {
          return state.msg;
        }
      };
      const mutations = {
        GET_BOOKINGS(state, mybookings) {
          state.myBookings = mybookings;         
        },
        UPDATE_MSG(msg) {
          state.msg = msg;          
        },
        
      };
      const actions = {
            bookflight({ commit }, user) {
                return new Promise((resolve, reject) => {
                  commit('auth_request')
                  const token = localStorage.getItem('token')
                  axios({ url: 'http://34.210.249.15:8443/flights/bookFlight', data: user, method: 'POST',headers: {'x-access-token':token} })
                    .then(resp => {
                      console.log("resp", resp)
                      const msg = "Booking Succesful"
                      commit('UPDATE_MSG', msg)
                      resolve(resp)  
                    })
                    .catch(err => {
                      console.log("err", err)
                      const msg = "Booking Failed"
                      commit('UPDATE_MSG', msg)
                      reject(err)
                    })
                })
          },
          getBookingData({ commit }) {
            return new Promise((resolve, reject) => {
              commit('auth_request')
              const token = localStorage.getItem('token')
              axios({ url: 'http://34.210.249.15:8443/flights/getBookingsData',method: 'POST', headers: {'x-access-token':token}} )
                .then(resp => {
                  console.log("resp.data",resp.data.data)
                  commit('GET_BOOKINGS', resp.data.data)
                  resolve(resp)  
                })
                .catch(err => {
                  reject(err)
                })
            })
      },
      cancelBooking({ commit, dispatch }, id) {
        return new Promise((resolve, reject) => {
          commit('auth_request')
          const token = localStorage.getItem('token')
          axios({ url: 'http://34.210.249.15:8443/flights/cancelFlight',data: id,method: 'POST', headers: {'x-access-token':token}} )
            .then(resp => {
              if(resp.data.success) {
                dispatch('getBookingData');
                commit('UPDATE_MSG', resp.data.data)
                console.log("resp.data",resp.data.data)
              }
              resolve(resp)  
            })
            .catch(err => {
              reject(err)
            })
        })
  },
    
        
    };
    export default{
      state,
      getters,
      mutations,
      actions,
  }  
