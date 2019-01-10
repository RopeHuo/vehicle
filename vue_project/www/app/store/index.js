import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

Vue.use(Vuex);

import picshowState from "./picshow/state.js";
import picshowMutations from "./picshow/mutations.js";
import picshowActions from "./picshow/actions.js";

import carlistState from "./carlist/state.js";
import carlistMutations from "./carlist/mutations.js";
import carlistActions from "./carlist/actions.js";

import usersState from "./users/state.js";
import usersMutations from "./users/mutations.js";
import usersActions from "./users/actions.js";

import coolfromState from "./coolfrom/state.js";
import coolfromMutations from "./coolfrom/mutations.js";

import loginState from "./login/state.js";
import loginMutations from "./login/mutations.js";
import loginActions from "./login/actions.js";

//全局数据
export default new Vuex.Store({
    namespaced: true,
    state:{
        picshowState,
        carlistState,
        usersState,
        coolfromState,
        loginState
    },
    mutations:{
        ...picshowMutations,
        ...carlistMutations,
        ...usersMutations,
        ...coolfromMutations,
        ...loginMutations
    },
    actions:{
        ...picshowActions,
        ...carlistActions,
        ...usersActions,
        ...loginActions
    },
    plugins:[createLogger()]
})