<script setup></script>

<template>

      <div class="header"><div class="container">
    <a href="/" class="logo"><img alt="Akvamánia logo" src="../assets/logo.png" /></a>

    <!-- Hamburger icon -->
    <input class="side-menu" type="checkbox" id="side-menu" />
    <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>

    <!-- Menu -->
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

</template>

<style></style>
