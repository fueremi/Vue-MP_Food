import axios from "axios";

// Action Data of Foods
export async function fetchDataFoods( {commit} ) {
        console.log('Actions Fetch Data Foods is Working ...')
        try {
            const response = await axios.get('http://localhost:3000/foods')
            commit('SET_FOODS', response.data)
        } catch (err) {
            console.error(err);
        }
        console.log('Actions Fetch Data Foods is Done!')
}

export async function fetchSearchFoods({ commit }, payload) {
    console.log('Actions Fetch Search Foods is Working ...')
    try {
        const response = await axios.get(`http://localhost:3000/foods?q=${payload.search}`)
        commit('SET_FOODS', response.data)
    } catch (err) {
        console.error(err);
    }
    console.log('Actions Fetch Search Foods is Done!')
}

export async function fetchDetailFood({ commit }, payload) {
    console.log('Actions Fetch Detail Food is Working ...')
    try {
        const response = await axios.get(`http://localhost:3000/foods/${payload.id_food}`)
        commit('SET_FOODS', response.data)
    } catch (err) {
        console.error(err);
    }
    console.log('Actions Fetch Detail Food is Done!')
}