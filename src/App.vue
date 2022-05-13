<script setup>

  import { Authenticator } from "@aws-amplify/ui-vue";
  import "@aws-amplify/ui-vue/styles.css";

  import Amplify from 'aws-amplify';
  import awsconfig from './aws-exports';

  import HelloWorld from './components/HelloWorld.vue'

  Amplify.configure(awsconfig);



</script>

<template>

  <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>

  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style>

</style>

<script setup>

</script>

