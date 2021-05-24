export const state = () => ({
    categories : []
})

export const getters = {
    categories(state){
       return state.categories
    }
}

export const mutations = {
    SET_CATEGORIES(state,categories){ state.categories = categories}
}

export const actions = {
    async nuxtServerInit({commit, dispatch}) {
        const response = await this.$axios.get('categories')

        commit('SET_CATEGORIES', response.data)

        if(this.$auth.loggedIn){

            if(this.$auth.user.role == "admin"){
                //   await dispatch('cart/getCart')
                   await dispatch('productVariationType/nuxtServerInit')
               //    await dispatch('stocks/nuxtServerInit')
                  //await dispatch('variation/nuxtServerInit')
               }
         //   await dispatch('cart/getCart')
            await dispatch('product/nuxtServerInit')
           //await dispatch('variation/nuxtServerInit')
        }



    }, async store({ dispatch }, category ){
        //  console.log(products);
          let response = await this.$axios.$post('categories',
          category
          )
        //  dispatch('nuxtServerInit')
      }, async destroy({ dispatch }, category ){
        //  console.log(products);
          let response = await this.$axios.$delete(`categories/${category}`
          )
        //  dispatch('nuxtServerInit')
      }
}
