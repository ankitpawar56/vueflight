import Vue from 'vue';
import Vuex from 'vuex'
import auth from './login'
import bookflight from './bookflight'
Vue.use(Vuex);
const store = new Vuex.Store({
    modules : {
        auth,
        bookflight,
    }
});
export default store;