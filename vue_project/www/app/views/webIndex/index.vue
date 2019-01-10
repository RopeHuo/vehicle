<template>
    <div>
        <h1>小明的Vue作品</h1>
        <div>
            <ul>
                <li>
                    <router-link to="/carlist">汽车中心</router-link>
                    <p>使用了XXX插件，练习了v-model与vuex</p>
                </li>
                <li>
                    <router-link to="/users">用户中心</router-link>
                    <p>使用了XXX插件，练习了v-model与vuex</p>
                </li>
                <li>
                    <router-link to="/coolfrom">酷表单</router-link>
                    <p>使用了XXX插件，练习了v-model与vuex</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    p{font-size:18px;}
    ul li{font-size:22px;line-height: 40px;}
</style>