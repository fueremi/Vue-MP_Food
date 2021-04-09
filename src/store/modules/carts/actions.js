// Action Data of Carts
import axios from 'axios'

export async function fetchDataCarts({ commit }) {
    console.log('Actions Fetch Data Carts is Working ...')
    try {
        const response = await axios.get('http://localhost:3000/carts')
        commit('SET_CARTS', response.data)
    } catch (err) {
        console.error(err);
    }
    console.log('Actions Fetch Data Carts is Done!')
}

export async function postDataCarts({ commit }, payload) {
    console.log('Actions Post Data Carts is Working ...')
    try {
        const response = await axios.post('http://localhost:3000/carts', payload)
        commit('ADD_CARTS', response.data)
    } catch (err) {
        console.error(err);
    }
    console.log('Actions Post Data Carts is Done!')
}

export async function deleteDataCart({ commit }, payload) {
    console.log('Actions Delete Data Cart is Working ...')
    try {
        await axios.delete(`http://localhost:3000/carts/${payload.cart_id}`)
        commit('DELETE_CARTS', payload)
    } catch (err) {
        console.error(err);
    }
    console.log('Actions Delete Data Cart is Done!')
}