<script setup>
import { ref } from "vue";
const checked = ref(false);
</script>

<template>
  <div class="navbar">
    <div class="container">
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
            <router-link to="/auth">Hirdetésfeladás</router-link>
          </li>
          <li>
            <router-link to="/add">Belépés</router-link>
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
  </div>
</template>

<style></style>
<!-- 

   <div class="header">
    <div class="container">
      <a href="/" class="logo"
        ><img alt="Akvamánia logo" src="../assets/logo.png"
      /></a>

     
      <input class="side-menu" type="checkbox" id="side-menu" />
      <label class="hamb" for="side-menu"
        ><span class="hamb-line"></span
      ></label>

      
      <nav class="nav">
        <ul class="menu">
          <li>
            <a href="#"> <router-link to="/">Go to Home</router-link> </a>
          </li>
          <li>
            <a href="#"> <router-link to="/auth">Go to Auth</router-link> </a>
          </li>
          <li>
            <a href="#">
              <router-link to="/add">Go to AddProduct</router-link>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
 -->
