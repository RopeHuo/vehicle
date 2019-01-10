export default {
    changeUsername(state, { username }) {
        state.loginState.username = username;
    },
    changeNickname(state, { nickname }) {
        state.loginState.nickname = nickname;
    },
    changeType(state, { type }) {
        state.loginState.type = type;
    }
}