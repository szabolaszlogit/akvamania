<script setup>
defineProps(['choices'])
defineEmits(["sendChoice"]);
</script>

<template>
<div class="btn-group">
  <button v-for="choice in choices" @click="$emit('sendChoice', choice)" type="button">{{choice}}</button>
</div>
{{choices}}
</template>

<style></style>