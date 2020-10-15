import queryString from 'querystring'
export const state = () => ({

    products : [],
    empty:true,
    total: null,
    subtotal: null,
    changed: false,
    shipping:null

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
    },shipping(state){
        return state.shipping
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
    },
    SET_SHIPPING(state,shipping){
        state.shipping = shipping
    }
}


export const actions = {
    async getCart({ commit, state }){

        let query = {}

        if(state.shipping){
            query.shipping_method_id = state.shipping.id
        }



        let response = await this.$axios.$get(`cart?${queryString.stringify(query)}`)


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
    }, async setShipping({ commit }, shipping ){
        
        commit('SET_SHIPPING',shipping)
    },

}

