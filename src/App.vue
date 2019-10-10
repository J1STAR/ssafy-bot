<template>
  <div id="app">
    <SSAFYChatBot></SSAFYChatBot>
  </div>
</template>

<script>
import SSAFYChatBot from "@/components/SSAFYChatBot";
export default {
  name: 'app',
  components: {
    SSAFYChatBot
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700,800');

  * {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

#app {
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
