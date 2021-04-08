import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        datas: [],
    },
    actions: {
        fetchData: async ( {commit}, payload ) => {
            try {
                const res = await axios.get(`http://localhost:3000/${payload.endpoints}`)
                commit('SET_DATA', res.data)
            } catch (err) {
                console.error(err);
            }
        },
        fetchSearchData: async ( {commit}, payload ) => {
            try {
                const res = await axios.get(`http://localhost:3000/${payload.endpoints}?q=${payload.search}`)
                commit('SET_DATA', res.data)
            } catch (err) {
                console.error(err);
            }
        }
    },
    mutations: {
        SET_DATA: (state, payload) => {
            if(payload.length){
                state.datas = payload
            } else{
                state.datas = [payload]
            }
        }
    },
    getters: {
        getData: state => {
            return state.datas.filter(data => data.harga = Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "IDR",
        
                // These options are needed to round to whole numbers if that's what you want.
                //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
                maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
            }).format(data.harga))
        }
    },
})