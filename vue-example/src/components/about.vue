<template>
    <div class="center">
        我是about页面
        <ul class="nav">
            <router-link tag="li" to="/about/study">study</router-link>
            <router-link tag="li" to="/about" exact>work</router-link>
            <router-link tag="li" to="/about/hobby">hobby</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name : 'hello'
    }
</script>