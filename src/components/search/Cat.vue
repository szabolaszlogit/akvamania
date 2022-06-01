<script setup>
import { ref } from "vue";
import data from "@/assets/cat.json";
defineEmits(["sendCat"]);
const cat = ref("Minden kategória");
const list = ref([]);
list.value = data;
</script>

<template>
<label for="kategóriák">Kategóriák</label>
  <select name="kategóriák" v-model="cat" @change="$emit('sendCat', cat)">
    <optgroup v-for="optiongroups in list" v-bind:label="optiongroups.label">
      <option v-for="option in optiongroups.items" v-bind:value="option.value">
        {{ option.label }}
      </option>
    </optgroup>
  </select>
</template>

<style scoped>

</style>
