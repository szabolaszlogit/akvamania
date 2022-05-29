<script setup>
import { ref, computed } from "vue";
import data from "@/assets/zip.json";

const megyek = ref([
  "Országosan",
  "főváros",
  "Bács-Kiskun",
  "Baranya",
  "Békés",
  "Borsod-Abaúj-Zemplén",
  "Csongrád",
  "Fejér",
  "Győr-Moson-Sopron",
  "Hajdú-Bihar",
  "Heves",
  "Jász-Nagykun-Szolnok",
  "Komárom-Esztergom",
  "Nógrád",
  "Pest",
  "Somogy",
  "Szabolcs-Szatmár-Bereg",
  "Tolna",
  "Vas",
  "Veszprém",
  "Zala",
]);
const selectedMegye = ref("Országosan");

const jarasok = computed(() => {
  selectedJaras.value = "";
  selectedTelepules.value = "";
  let jarasok = [];
  data.filter((telepules) => {
    if (
      telepules.megye == selectedMegye.value &&
      !jarasok.includes(telepules.jaras)
    ) {
      jarasok.push(telepules.jaras);
    }
  });
  return jarasok;
});
const selectedJaras = ref("");

const telepulesek = computed(() => {
  selectedTelepules.value = "";
  let names = [];
  data.filter((telepules) => {
    if (
      telepules.jaras == selectedJaras.value &&
      !names.includes(telepules.jaras)
    ) {
      names.push(telepules.name);
    }
  });
  return names;
});
const selectedTelepules = ref("");
</script>

<template>
  <label for="megyék">Válasszd ki a megyét:</label>
  <select name="megyék" v-model="selectedMegye">
    <option v-for="megye in megyek" v-bind:value="megye">{{ megye }}</option>
  </select>

  <label for="járások">Válasszd ki a járást:</label>
  <select name="járások" v-model="selectedJaras">
    <option v-for="jaras in jarasok" v-bind:value="jaras">{{ jaras }}</option>
  </select>

  <label for="települések">Válasszd ki a települést:</label>
  <select name="települések" v-model="selectedTelepules">
    <option v-for="telepules in telepulesek" v-bind:value="telepules">
      {{ telepules }}
    </option>
  </select>
</template>

<style></style>
