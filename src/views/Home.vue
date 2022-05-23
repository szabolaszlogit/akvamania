<script setup>
import {ref} from "vue"
import Cta from "@/components/Cta.vue";
import ProductsCard from "@/components/ProductsCard.vue";
import Cat from "@/components/search/Cat.vue";
import SearchBox from "@/components/SearchBox.vue";
import BtnGroup from "@/components/BtnGroup.vue";
import Zip from "@/components/search/Zip.vue";

function getEmittedCat(data) {
cat.value = data
}
const cat = ref('')


function getEmittedBtnGroupChoice(data) {
btnGroupChoice.value = data
}
const btnGroupChoice = ref('')
</script>

<template>
  <Cta />
  <Cat @send-cat="getEmittedCat" />
  <p>Cat from emit: {{cat}}</p>

  <BtnGroup  @send-choice="getEmittedBtnGroupChoice" :choices="[234, 266,111]" />
  <p>btnGroupChoice from emit: {{btnGroupChoice}}</p>

<Zip />

  <SearchBox />
  <ProductsCard>
    <template v-slot:title> heade slot </template>
    <template v-slot:coverimg>coverimg </template>
  </ProductsCard>
    <ProductsCard>
    <template v-slot:title> heade slot </template>
    <template v-slot:coverimg>coverimg </template>
  </ProductsCard>
</template>
