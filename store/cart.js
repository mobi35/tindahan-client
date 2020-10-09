export const state = () => ({

    products : [],
    empty:true,
    total: null,
    subtotal: null,
    changed: false

})

export const getters = {
    products(state){
        return state.products
    },

    empty(state){
        return state.empty
    },
    total(state){
        return state.total
    },
    subtotal(state){
        return state.subtotal
    },changed(state){
        return state.changed
    },

cartCount(state){
    return state.products.length
}
}

export const mutations = {
    SET_PRODUCTS(state, products) {
        state.products = products
    },
    SET_EMPTY(state,empty){
        state.empty = empty
    }
    ,
    SET_TOTAL(state,total){
        state.total = total
    }
    ,
    SET_SUBTOTAL(state,subtotal){
        state.subtotal = subtotal
    },
    SET_CHANGED(state,changed){
        state.changed = changed
    }
}


export const actions = {
    async getCart({ commit }){
        let response = await this.$axios.$get('cart')
        commit('SET_PRODUCTS', response.data.products)
        commit('SET_EMPTY', response.meta.empty)
        commit('SET_SUBTOTAL', response.meta.subtotal)
        commit('SET_TOTAL', response.meta.total)
        commit('SET_CHANGED', response.meta.changed)
        return response
    },
    async destroy({ dispatch }, productId){
        let response = await this.$axios.$delete(`cart/${productId}`)
        dispatch('getCart')
    },
    async update({ dispatch }, {productId, quantity }){
        let response = await this.$axios.$patch(`cart/${productId}`,{
            quantity
        })
        dispatch('getCart')
    },
    async store({ dispatch }, products ){
        let response = await this.$axios.$post('cart',{
            products
        })
        dispatch('getCart')
    }
}
