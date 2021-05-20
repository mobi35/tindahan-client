export const state = () => ({
    products : [],
    adminProducts: []
})

export const getters = {
    products(state){
       return state.products
    },
    adminProducts(state){
      return state.adminProducts
    }

}

export const mutations = {
    SET_PRODUCTS(state,products){ state.products = products},
    SET_ADMIN_PRODUCTS(state,adminProducts){ state.adminProducts = adminProducts}
}

export const actions = {
    async nuxtServerInit({commit, dispatch}) {
        const response = await this.$axios.get('showAll')
        commit('SET_PRODUCTS', response.data)
        if(this.$auth.user.role == 'admin'){
          const adminResponse = await this.$axios.get('showAdmin')
        commit('SET_ADMIN_PRODUCTS', adminResponse.data)
        }
    }, async serverData({commit, dispatch }, products ){
      const response = await this.$axios.get('showAdmin')
        commit('SET_ADMIN_PRODUCTS', response.data)
        //await dispatch('product/serverData')
      //  dispatch('nuxtServerInit')
    }, async store({ dispatch }, products ){
      //  console.log(products);
        let response = await this.$axios.$post('products',
            products
        )
      //  dispatch('nuxtServerInit')
    }, async patch({ dispatch }, products ){
        //  console.log(products);
          let response = await this.$axios.$put(`products/${products.id}`,
              products
          )
        //  dispatch('nuxtServerInit')
      }
}

