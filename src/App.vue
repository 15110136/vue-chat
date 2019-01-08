<template>
  <div id="app">
    <welcome-app></welcome-app>
  </div>
</template>

<script>
import WelcomeVue from './components/Welcome.vue';

export default {
  name: 'app',
  components: {
    'welcome-app':WelcomeVue
  }
}
</script>

<style>

</style>
