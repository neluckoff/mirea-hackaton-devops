export const state = () => ({
    profile: {
        logged: false,
        token: ''
    },
    ui: {
        theme: 'dark',
        items: {
            count: 8,
            type: 'list'
        }
    },
    filter: {
        userOnly: true,
        cardList: true,
    }
})

export const mutations = {
    setProfile(state, token = '') {
        state.profile.logged = true;
        state.profile.token = token;
    },
    setFilterUserOnly(state, data) {
        state.filter.userOnly = data;
    },
    setFilterCardList(state, data) {
        state.filter.cardList = data;
    }
}