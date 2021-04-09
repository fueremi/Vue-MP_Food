// Mutations Data of Foods
export function SET_FOODS(state, payload) {
    console.log('Mutations SET_FOODS is Working ...')
    state.foods = payload
    console.log('Mutations SET_FOODS is Done!')
}