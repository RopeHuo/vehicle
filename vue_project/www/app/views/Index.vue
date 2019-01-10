<template>
    <div class="layout">
        <Layout>
            <Header>
                <Row>
                    <Col span="12">
                        <Menu mode="horizontal" theme="dark" active-name="index" @on-select="changeMenu">
                            <div class="layout-nav">
                                <MenuItem name="index">
                                    <Icon type="ios-navigate"></Icon>
                                    首页
                                </MenuItem>
                                <MenuItem name="carlist">
                                    <Icon type="ios-keypad"></Icon>
                                    汽车列表
                                </MenuItem>
                                <MenuItem name="users" v-if="this.$store.state.loginState.type == 'manager'">
                                    <Icon type="ios-analytics"></Icon>
                                    用户中心
                                </MenuItem>
                                <MenuItem name="coolfrom">
                                    <Icon type="ios-paper"></Icon>
                                    酷表单
                                </MenuItem>
                            </div>
                        </Menu>
                    </Col>
                    <Col span="12" class="welcome">
                        欢迎您！{{$store.state.loginState.nickname}}
                        您的身份为{{$store.state.loginState.type}}
			        	<a href="###" @click="logout">退出登录</a>
                    </Col>
                </Row>
            </Header>
            <Layout :style="{padding: '0 24px 24px'}">
                <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                    <Picshow v-show="$store.state.picshowState.isShowPic"></Picshow>
                    <!-- <CarList></CarList>
                    <User></User> -->
                    <router-view></router-view>
                </Content>
            </Layout>
            <Footer class="layout-footer-center">2011-2019 &copy; 爱前端二手车交易平台</Footer>
        </Layout>
    </div>
</template>
<script>
    import axios from "axios"
    import Picshow from "../components/picshow/index.vue"
    // import CarList from "./views/carlist/index.vue"
    // import User from "./views/users/index.vue"
    export default {
        created(){
			this.$store.dispatch("fetchUserInfo");
		},
        components:{
            Picshow,
            // CarList,
            // User
        },
        methods:{
            changeMenu(name){
                this.$router.push({path:`/${name}`})
            },
            logout(){
				axios.get("/api/logout").then(data=>{
					this.$router.push("/login");
				});
			}
        }
    }
</script>
<style scoped>
.welcome{color:#fff;}
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.ivu-menu-item-active{background: gold;}
.layout-footer-center{text-align:center;}
</style>