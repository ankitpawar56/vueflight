<template>
  <div>
    <div v-if="values.length > 0">
      <my-booking
        :headers="heading"
        :result="values">
    </my-booking>
    </div> 
    <div class="text-center" v-if="!values.length">
     <div class="spinner-grow" style="width: 5rem; height: 5rem;" role="status">
    <span class="sr-only">Loading...</span>
    </div>
    </div>   
  </div>
  
</template>

<script>
import MyBooking from './MyBooking'; 
export default {
  mounted(){
        this.$store.dispatch('getBookingData')
        .then(() => this.getBookings())
  },
  data: () => {
    return{
      heading:{ 
      "fromPlace":"From",
      "toPlace":"To",
      "travelDate":"Date Of Travel",
      "status":"Status",
      "cancel" : "Cancel"
      },
      values:[]
    }
  },
   methods : {
    getBookings() {
      this.values = this.$store.getters.getBookings
    },
  },
  components: {
    MyBooking
  }
}
</script>