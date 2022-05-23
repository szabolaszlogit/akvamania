<script setup></script>

<template>
  <div class="container">
    <div class="coverimg">
      <slot name="coverimg"></slot>
    </div>
    <div class="title">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: aquamarine;
  display: flex;
  flex-direction: column;

}
.title {
  color: blue;
}
</style>
