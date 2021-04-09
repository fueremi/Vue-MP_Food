import Vue from 'vue'
import Vuex from 'vuex'
import foods from './modules/foods';
import carts from './modules/carts';
import bestSellers from './modules/bestSellers';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        foods,
        carts,
        bestSellers,
    },
})