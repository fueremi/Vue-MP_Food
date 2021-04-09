import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import state from './state'



export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};