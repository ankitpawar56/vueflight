<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Flight Booking</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active" v-if="!isLoggedIn">
      <a class="nav-link"><router-link to='/signin'>Login</router-link><span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item" v-if="!isLoggedIn">
      <a class="nav-link" ><router-link to='/signup'>Register</router-link></a>
    </li>
  <li class="nav-item">
    <a class="nav-link" ><router-link to='/bookflight'>Book Flight</router-link></a>
  </li>
  <li class="nav-item" v-if="isLoggedIn">
    <a class="nav-link" ><router-link to='/booking'>My bookings</router-link></a>
  <li class="nav-item" v-if="isLoggedIn">
    <button class="nav-link btn" @click="onLogout" >Logout</button>
  </li>
  </ul>
</div>
</nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
       computed: {
           ...mapGetters({
            authStatus: 'authStatus'
        }),
        isLoggedIn() {
          return this.authStatus;
        }
      },
        methods: {
        ...mapActions({
            logout: 'logout' // map `this.logout()` to `this.$store.dispatch('logout')`
        }),
        onLogout() {
        //this.$store.dispatch('logout')
        this.logout()
        this.$router.replace('/signin');
        }
        }
}
</script>