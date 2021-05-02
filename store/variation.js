export const state = () => ({
    variations : []
})

export const getters = {
    variations(state){
       return state.variations 
    }
}

export const mutations = {
    SET_VARIATIONS(state,variations){ state.variations = variations}
}

export const actions = {
    async nuxtServerInit({commit, dispatch}) {
        const response = await this.$axios.get('getVariations')
    
        commit('SET_VARIATIONS', response.data)

    }
}

