export const state = () => ({
    stocks : []
})

export const getters = {
    stocks(state){
       return state.stocks
    }

}

export const mutations = {
    SET_STOCKS(state,stocks){ state.stocks = stocks}
}

export const actions = {
    async nuxtServerInit({commit, dispatch}) {
        const response = await this.$axios.get('stocks')
        commit('SET_STOCKS', response.data)

    },
    async getStocks({commit, dispatch }, id ){
        const response = await this.$axios.get(`stocks/${id}`)
            commit('SET_STOCKS', response.data)
        }, 
        async store({ dispatch }, stocks ){
        let response = await this.$axios.$post('stocks',
        stocks
        )
      //  dispatch('nuxtServerInit')
    }
}

