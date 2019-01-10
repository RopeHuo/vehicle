import axios from "axios";
export default {
    async fetchUserInfo({ commit}) {
        const {username, nickname,type } = await axios.get("/api/userinfo").then(res=> res.data);
        commit("changeUsername", { username })
        commit("changeType", { type })
        commit("changeNickname", { nickname })
    }
}