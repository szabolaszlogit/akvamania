<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <router-link to="/">Go to Home</router-link>
  <router-link to="/auth">Go to Auth</router-link>
  <router-link to="/add">Go to AddProduct</router-link>
  

  <router-view></router-view>

  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style></style>

<script setup></script>
