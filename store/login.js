export const state = () => ({
    accessToken: null,
    refreshToken: null
})

export const getters = {
    // empty
}

export const actions = {
    async fetchUserToken(ctx, data) {
        try {
            const response = await this.$axios.post(
                `/api/login/`,
                {
                    email: data.email,
                    password: data.password
                }
            );
            
            if (response) {
                ctx.commit('setUserToken', response);
            }
        } catch (e) {
            console.error(e)
        }
    }
}

export const mutations = {
    setUserToken(store, data) {
        store.accessToken = data.access
        store.refreshToken = data.refresh
    }
}