<script setup>
import { ref } from "vue";
const checked = ref(false);
</script>

<template>
  <div class="navbar">
   
      <input
        class="side-menu"
        type="checkbox"
        id="side-menu"
        v-model="checked"
      />
      <div class="uppernavbar">
        <div class="logo">
          <a href="/"><img alt="Akvamánia logo" src="../assets/logo.png" /></a>
        </div>
        <div class="logotitle">Akvamánia</div>

        <div>
          <label class="hamb" for="side-menu"
            ><span class="hamb-line"></span
          ></label>
        </div>
      </div>

      <nav class="nav" v-on:click="checked = false">
        <ul class="menu">
          <li>
            <router-link to="/">Főoldal</router-link>
          </li>
          <li>
            <router-link to="/add">Hirdetésfeladás</router-link>
          </li>
          <li>
            <router-link to="/auth">Belépés</router-link>
          </li>
          <li>
            <router-link to="/add">Regisztráció</router-link>
          </li>
          <li>
            <router-link to="/add">Kapcsolat</router-link>
          </li>
        </ul>
      </nav>
    
  </div>
</template>

<style></style>
