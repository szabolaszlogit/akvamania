<script setup></script>

<template>
  <div class="input">
    <input />
    <button>Go</button>
  </div>
</template>

<style scoped>
.input {
  width: 100%;
  margin: 0px auto;
}
input {
  padding: 0.75rem 1.25rem;
  border: 1px solid var(--info);
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  border-right: none;
}

.input button {
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
}
</style>
