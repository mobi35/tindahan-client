export const state = () => ({
    products : []
})

export const getters = {
    products(state){
       return state.products 
    }
}

export const mutations = {
    SET_PRODUCTS(state,products){ state.products = products}
}

export const actions = {
    async nuxtServerInit({commit, dispatch}) {
        const response = await this.$axios.get('showAll')
    
        commit('SET_PRODUCTS', response.data)

    }, async store({ dispatch }, products ){
        console.log(products);
        let response = await this.$axios.$post('products',
            products
        )
      
        dispatch('nuxtServerInit')
    }
}

