<template>
  <div id="app">
      <div class="nav-box">
        <ul class="nav">
            <router-link to="/" tag="li" event="mouseover" exact>home</router-link>
          <li>
            <router-link :to="{path : '/hello'}" active-class="costumclass">hello</router-link>
          </li>
          <li>
            <router-link :to="{name:'about'}">about</router-link>
          </li>
        </ul>
      </div>
      <router-view class="center"></router-view>
      <router-view name="slider"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      index : '/home'
    }
  }
}
</script>

<style>

</style>
