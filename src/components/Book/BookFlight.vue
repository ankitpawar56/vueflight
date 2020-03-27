<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="fromPlace">Trip Type :</label>
      <div>
        <label class="form-check-label">
        <input type="radio" value="one-way" v-model="user.tripType" name="trip">One Way
        </label>
        <label class="form-check-label">
        <input type="radio" value="round" v-model="user.tripType" name="trip">Round Trip
        </label>
      </div>
      </div>
       <div class="form-group">
        <label for="fromPlace">From Place :</label>
        <input type="text" name="name" value="" v-model="user.fromPlace" class="form-control">
      </div>
      <div class="form-group">
        <label for="toPlace">To Place :</label>
        <input type="text" name="email" value="" v-model="user.toPlace" class="form-control">
      </div>
      <div class="form-group">
        <label for="travelDate">Travel Date :</label>
        <input type="date" name="password" value="" v-model="user.travelDate" class="form-control">
      </div>
      <div class="form-group">
        <label for="returnDate">Return Date :</label>
        <input type="date" name="password" value="" v-model="user.returnDate" class="form-control">
      </div>
      <div class="form-group">
        <label for="adultsCount">Adults :</label>
        <input type="number" name="mobile" value="" v-model="user.adultsCount" class="form-control">
      </div>
      <div class="form-group">
        <label for="childrenCount">Childrens :</label>
        <input type="number" name="childrenCount" value="" v-model="user.childrenCount" class="form-control">
      </div>
    <div class="form-group">
        <label for="infantsCount">Infants :</label>
        <input type="number" name="infantsCount" value="" v-model="user.infantsCount" class="form-control">
      </div>
      <div class="form-group">
        <label for="travelClass">Travel :</label>
                            <select class="browser-default custom-select">
                                <option value="economy">Economy</option>
                                <option value="business">Business</option>
                                <option value="first">First Class</option>
                            </select>
      </div>


      <button type="submit" class="btn btn-primary" @click.prevent="bookFlight">Book Flight</button>
    </form>
  </div>
</template>



<script>
import { mapActions,mapGetters } from 'vuex'
export default {
    name:'bookflight', 
 data () {
    return {      
     user: {
       tripType:'one-way',
       fromPlace:'',
       toPlace:'',
       travelDate: new Date().toISOString().substr(0, 10),
       returnDate:new Date().toISOString().substr(0, 10),
       adultsCount:'',
       childrenCount:'',
       infantsCount:'',
       travelClass:'Economy',
      },
      isAuthenticated: false
    }
},
computed: {
       ...mapGetters({
            authStatus: 'authStatus'
        }),
},
methods:{
  ...mapActions({
            bookflight: 'bookflight'
        }),
  validateFields() {
    return this.user.travelDate && this.user.fromPlace && this.user.toPlace && this.user.returnDate
          && this.user.adultsCount && this.user.childrenCount && this.user.infantsCount
  },
  bookFlight() {
      if(this.authStatus) {
        if(this.validateFields()) {
          this.user.travelDate = new Date(this.user.travelDate).toISOString();
          this.user.returnDate = new Date(this.user.returnDate).toISOString();
          this.bookflight(this.user)
           .then(() => {
             alert("Booking Succesful")
          })
          .catch(() => alert("Booking failed"))
        }
        else {
          alert("Enter Missing Fields")
        }
       
      } else {
        alert("Please Log in First")
         this.$router.push('/signin');
       }
 }
   }
}
</script>