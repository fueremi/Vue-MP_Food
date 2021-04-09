
// Mutations Best Seller Foods and Drinks 
export function SET_BEST_SELLERS(state, payload) {
    console.log('Mutations SET_BEST_SELLERS is working ...');
    state.bestSellers = payload
    console.log('Mutations SET_BEST_SELLERS is Done!');
}