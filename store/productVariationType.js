export const state = () => ({
    productVariationType : []
})

export const getters = {
    productVariationType(state){
       return state.productVariationType
    }

}

export const mutations = {
    SET_PRODUCT_VARIATION_TYPE(state,productVariationType){ state.productVariationType = productVariationType}
}

export const actions = {
    async nuxtServerInit({commit, dispatch}) {
        const response = await this.$axios.get('variationtype')
        commit('SET_PRODUCT_VARIATION_TYPE', response.data)

    },
    async serverData({commit, dispatch }, products ){
        const response = await this.$axios.get('variationtype')
            commit('SET_PRODUCT_VARIATION_TYPE', response.data)

        }, async store({ dispatch }, type ){
      //  console.log(products);
        let response = await this.$axios.$post('variationtype',
        type
        )
      //  dispatch('nuxtServerInit')
    }, async destroy({ dispatch }, type ){
        //  console.log(products);
          let response = await this.$axios.$delete(`variationtype/${type}`)
        //  dispatch('nuxtServerInit')
      }
}

