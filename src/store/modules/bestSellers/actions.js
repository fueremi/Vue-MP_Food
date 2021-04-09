import axios from "axios";

// Actions Best Sellers Foods and Drinks 
export async function fetchDataBestSellers({ commit }) {
    console.log('Actions: Fetch Data Best Sellers is working ...');
    try {
        const response = await axios.get(`http://localhost:3000/best-sellers`)
        commit('SET_BEST_SELLERS', response.data)
    } catch (err) {
        console.error(err);
    }
    console.log('Actions: Fetch Data Best Sellers is Done!');
}