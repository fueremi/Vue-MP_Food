import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        bestSellers: [], // Data of Best Seller Foods and Drinks
        foods: [], // Data of Foods
        drinks: [], // Data of Drinks
        carts: [] // Data of Carts
    },
    actions: {
        // Actions Best Sellers Foods and Drinks 
        fetchDataBestSellers: async ({ commit }) => {
            console.log('Actions: Fetch Data Best Sellers is working ...');
            try {
                const response = await axios.get(`http://localhost:3000/best-sellers`)
                commit('SET_BEST_SELLERS', response.data)
            } catch (err) {
                console.error(err);
            }
            console.log('Actions: Fetch Data Best Sellers is Done!');
        },

        // Action Data of Foods
        fetchDataFoods: async ({ commit }) => {
            console.log('Actions Fetch Data Foods is Working ...')
            try {
                const response = await axios.get('http://localhost:3000/foods')
                commit('SET_FOODS', response.data)
            } catch (err) {
                console.error(err);
            }
            console.log('Actions Fetch Data Foods is Done!')
        },
        fetchSearchFoods: async ({ commit }, payload) => {
            console.log('Actions Fetch Search Foods is Working ...')
            try {
                const response = await axios.get(`http://localhost:3000/foods?q=${payload.search}`)
                commit('SET_FOODS', response.data)
            } catch (err) {
                console.error(err);
            }
            console.log('Actions Fetch Search Foods is Done!')
        },
        fetchDetailFood: async ({ commit }, payload) => {
            console.log('Actions Fetch Detail Food is Working ...')
            try {
                const response = await axios.get(`http://localhost:3000/foods/${payload.id_food}`)
                commit('SET_FOODS', response.data)
            } catch (err) {
                console.error(err);
            }
            console.log('Actions Fetch Detail Food is Done!')
        },

        // Action Data of Carts
        fetchDataCarts: async ({ commit }) => {
            console.log('Actions Fetch Data Carts is Working ...')
            try {
                const response = await axios.get('http://localhost:3000/carts')
                commit('SET_CARTS', response.data)
            } catch (err) {
                console.error(err);
            }
            console.log('Actions Fetch Data Carts is Done!')
        },
        postDataCarts: async ({ commit }, payload) => {
            console.log('Actions Post Data Carts is Working ...')
            try {
                const response = await axios.post('http://localhost:3000/carts', payload)
                commit('ADD_CARTS', response.data)
            } catch (err) {
                console.error(err);
            }
            console.log('Actions Post Data Carts is Done!')
        },
        deleteDataCart: async ({ commit }, payload) => {
            console.log('Actions Delete Data Cart is Working ...')
            try {
                await axios.delete(`http://localhost:3000/carts/${payload.cart_id}`)
                commit('DELETE_CARTS', payload)
            } catch (err) {
                console.error(err);
            }
            console.log('Actions Delete Data Cart is Done!')
        }
    },
    mutations: {
        // Mutations Best Seller Foods and Drinks 
        SET_BEST_SELLERS: (state, payload) => {
            
            console.log('Mutations SET_BEST_SELLERS is working ...');
            state.bestSellers = payload
            console.log('Mutations SET_BEST_SELLERS is Done!');
        },

        // Mutations Data of Foods
        SET_FOODS: (state, payload) => {
            console.log('Mutations SET_FOODS is Working ...')
            state.foods = payload
            console.log('Mutations SET_FOODS is Done!')
        },

        // Mutations Data of Carts
        SET_CARTS: (state, payload) => {
            console.log('Mutations SET_CARTS is Working ...')
            state.carts = payload
            console.log('Mutations SET_CARTS is Done!')
        },
        ADD_CARTS: (state, payload) => {
            console.log('Mutations ADD_CARTS is Working ...')
            state.carts.push(payload)
            console.log('Mutations ADD_CARTS is Done!')
        },
        DELETE_CARTS: (state, payload) => {
            console.log('Mutations DELETE_CARTS is Working ...')
            state.carts.splice((payload.id -1), 1)
            console.log('Mutations DELETE_CARTS is Done!')
        }
    },
    getters: {
        // Getters Best Seller Foods and Drinks
        getDataBestSellers: state => {
            console.log('Getters Get Data Best Sellers is working ...');
            return state.bestSellers;
        },

        // Getters Data of Foods
        getDataFoods: state => {
            console.log('Getters Get Data Foods is working ...')
            return state.foods;
        },

        // Getters Data of Carts
        getDataCartsLength: state => {
            console.log('Getters Get Data Carts Length is working ...')
            return state.carts.length
        },
        getDataCarts: state => {
            console.log('Getters Get Data Carts is working ...')
            return state.carts
        }
    }
})