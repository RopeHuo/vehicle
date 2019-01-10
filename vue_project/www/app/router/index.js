import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/index.vue';
import WebIndex from '../views/webIndex/index.vue';
import Carlist from '../views/carlist/index.vue';
import Users from '../views/users/index.vue';
import Coolfrom from '../views/coolfrom/index.vue';
import Login from '../views/login/index.vue';
import axios from 'axios';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: "/",
            name: "首页",
            component: Index,
            redirect: "/index",
            meta: {needLogin: true},
            children:[
                {
                    path: "/Index",
                    name: "网站首页",
                    component: WebIndex,
                    meta: { 
                        needLogin: true,
                        authority: ["manager", "user"]
                    }
                },
                {
                    path: "/carlist",
                    name: "汽车列表",
                    component: Carlist,
                    meta: { 
                        needLogin: true,
                        authority: ["manager", "user"] 
                    }
                },
                {
                    path: "/users", name: "用户中心",
                    component: Users,
                    meta: { 
                        needLogin: true,
                        authority: ["manager"]
                    }
                },
                {
                    path: "/coolfrom", name: "酷表单",
                    component: Coolfrom,
                    meta: { 
                        needLogin: true,
                        authority: ["manager", "user"]
                    }
                }
            ]
        },
        { path: "/login", name: "登陆中心", component: Login },
        { path: "*", redirect: "/index"}
    ]
})

router.beforeEach(async (to, from, next) => {
    //当用户切换路由的时候，执行这里的语句
    if(to.meta.needLogin){
        //验证用户是否登陆了
        const {login, username, type} = await axios.get("/api/checklogin").then(res=>res.data);
        console.log(login, username, type)
        if(login){
            console.log("你通过了登录验证！现在开始验证你的身份", to.meta.authority)
            if (to.meta.authority.includes(type)) {
                next();//放行，调用next
            } else {
                alert("普通用户无访问权限，请用管理员登陆！");
                router.push("/login");//去login页面
            }
        }else{
            console.log("没有通过验证，自动跳转到登录页面")
            router.push("/login")
        }
    }else{
        //不需要验证登陆的，直接放行
        next();
    }
})

export default router;