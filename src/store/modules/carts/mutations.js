// Mutations Data of Carts

export function SET_CARTS(state, payload) {
    console.log('Mutations SET_CARTS is Working ...')
    state.carts = payload
    console.log('Mutations SET_CARTS is Done!')
}

export function ADD_CARTS(state, payload) {
    console.log('Mutations ADD_CARTS is Working ...')
    state.carts.push(payload)
    console.log('Mutations ADD_CARTS is Done!')
}

export function DELETE_CARTS(state, payload) {
    console.log('Mutations DELETE_CARTS is Working ...')
    state.carts.splice(payload.index, 1);
    console.log('Mutations DELETE_CARTS is Done!')
}