<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="name">Name :</label>
        <input type="text" name="name" value="" v-model="user.firstName" class="form-control">
      </div>
       <div class="form-group">
        <label for="name">Last Name :</label>
        <input type="text" name="name" value="" v-model="user.lastName" class="form-control">
      </div>
      <div class="form-group">
        <label for="email">Email :</label>
        <input type="email" name="email" value="" v-model="user.email" class="form-control">
      </div>
      <div class="form-group">
        <label for="password">Password :</label>
        <input type="password" name="password" value="" v-model="user.password" class="form-control">
      </div>
      <div class="form-group">
        <label for="password">Gender :</label>
        <input type="text" name="password" value="" v-model="user.gender" class="form-control">
      </div>
      <div class="form-group">
        <label for="mobile">Mobile :</label>
        <input type="number" name="mobile" value="" v-model="user.mobile" class="form-control">
      </div>
  <button type="submit" class="btn btn-primary" @click.prevent="signup">Signup</button>
  </form>
  </div>
</template>
<script>
//import axios from 'axios'
export default {
  name: 'signup',
  data () {
    return {
    user: {
      firstName: '',
      email: '',
      password: '',
      gender: '',
      lastName: '',
      mobile: ''
    },
    }
  },
//   methods: {
//     signup () {
//       axios.post('http://10.12.40.85:3000/users/register?', {
//         email: this.user.email,
//         password: this.user.password,
//         firstName: this.user.firstName,
//         lastName: this.user.lastName,
//         mobile: this.user.mobile,
//         gender: this.user.gender,
//       },{
//         headers: {'Content-Type': 'XMLHttpRequest'}
//       })
//       .then(
//         (response) => console.log(response)
//       )
//       .catch(
//         (error) => console.log(error)
//       )
//     }
//   }
methods: {
          signup: function() {
            let data = {
            firstName: this.user.firstName,
            email: this.user.email,
            password: this.user.password,
            lastName: this.user.lastName,
            mobile: this.user.mobile,
            gender:this.user.gender
          };
            this.$store.dispatch("signup", data)
              .then(() => {
                this.$router.push("/")
                alert("Success")
              } 
              )
              .catch(() => alert("Error"));
          }
        }
      } 
</script>
<style>

</style>
