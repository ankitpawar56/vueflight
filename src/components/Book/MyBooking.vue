<template>
    <div>
        <card>
            <template slot="header">
                <table class="table" >
                    <tr>
                        <th v-for=" (h, index) in headers"
                            :key=index
                            >{{ h }}</th>
                    </tr>
                </table>
            </template>
            <template slot="result">
                <table class="table table-hover">
                    <tr v-for=" (h, index) in result" :key=index>
                            <td>{{ h.fromPlace }}</td>
                            <td>{{ h.toPlace}}</td>
                            <td>{{h.travelDate.substring(0, 10)}}</td>
                            <td>{{h.status}}</td>
                          <button v-if="h.status === 'booked'" class="btn btn-danger btn-sm" @click="cancelBooking(h._id)" >Cancel</button>	
                    </tr>
                </table>
            </template>
        </card>
    </div>
</template>
<script>
import Card from '../Card/Card';
import { mapActions } from 'vuex';  
export default {
    components:{
        Card
    },
    methods : {
        ...mapActions({
            cancel: 'cancelBooking' // map `this.cancel()` to `this.$store.dispatch('cancelBooking',idObj)`
        }),
        cancelBooking(id) {
            const idObj = {
                "bookingId" : id
            }
            //this.$store.dispatch('cancelBooking',idObj)
            this.cancel(idObj)
    },
    },
    props:["headers","result"]
}
</script>