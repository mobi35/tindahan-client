export const state = () => ({
    productVariation : [],
    selectedProductVariation : {}
})

export const getters = {
    productVariation(state){
       return state.productVariation
    },
    selectedProductVariation(state){
        return state.selectedProductVariation
     }
}

export const mutations = {
    SET_PRODUCT_VARIATION(state,productVariation){ state.productVariation = productVariation},
    SET_PRODUCT_SELECTED_VARIATION(state,selectedProductVariation){ state.selectedProductVariation = selectedProductVariation},
}

export const actions = {
    async nuxtServerInit({commit, dispatch}) {
        const response = await this.$axios.get('variations')
        commit('SET_PRODUCT_VARIATION', response.data)
    }, async Edit({commit, dispatch}, id) {
        const response = await this.$axios.get(`variations/${id}/edit`)
        commit('SET_PRODUCT_SELECTED_VARIATION', response.data)
    },
    async getProdVariation({commit, dispatch }, slug ){
        const response = await this.$axios.get(`getVariations?slug=${slug}`)
        commit('SET_PRODUCT_VARIATION', response.data)
     },
    async serverData({commit, dispatch }, products ){
        const response = await this.$axios.get('variations')
            commit('SET_PRODUCT_VARIATION', response.data)
     }, async store({ dispatch }, type ){
        let response = await this.$axios.$post('variations',
        type
        )
    }, async destroy({ dispatch }, id ){
          let response = await this.$axios.$delete(`variations/${id}`)
    }, async patch({ dispatch }, variations ){
        //  console.log(products);
          let response = await this.$axios.$put(`variations/${variations.id}`,
           variations
          )
        //  dispatch('nuxtServerInit')
      }
}

