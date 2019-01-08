<template>
  <div class="welcome contrainer">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="gotoChat">
          <label for="name">Enter Your Name</label>
          <input type="text" name="name" v-model="name">
          <button class="btn teal">Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Welcome',
  data() {
    return {
      name:null
    }
  },
  methods: {
    gotoChat(){

    }
  },
}
</script>
<style scoped>
.welcome{
  max-width: 800px;
  margin-top:200px;
  margin-left: 250px;
}
.welcome h2{
  font-size: 3em;
}
.welcome button{
  margin: 30px auto;
}
</style>

