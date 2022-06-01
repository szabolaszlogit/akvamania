<script setup>
import {ref} from "vue"
import Cta from "@/components/Cta.vue";
import ProductsCard from "@/components/ProductsCard.vue";
import Cat from "@/components/search/Cat.vue";
import SearchBox from "@/components/SearchBox.vue";
import Input from "@/components/Input.vue";
import Zip from "@/components/search/Zip.vue";

function getEmittedCat(data) {
cat.value = data
}
const cat = ref('')


</script>

<template>
  <Cta />
  <Input />
  <Cat @send-cat="getEmittedCat" />
   <Zip />

  <p>Cat from emit: {{cat}}</p>

<br>
<button>Kósssdküldés</button>
  <SearchBox />
  <ProductsCard>
    <template v-slot:coverimg>
      <img src="@/assets/testimg/1.jpg" alt="">
    </template>
    <template v-slot:title> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus accusamus sit at aspernatur ea porro iure id iste quod magnam reiciendis, eligendi dignissimos omnis facere veniam maiores perspiciatis in ut. </template>
  </ProductsCard>
  <ProductsCard>
    <template v-slot:coverimg>
      <img src="@/assets/testimg/2.jpg" alt="">
    </template>
    <template v-slot:title>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dolore porro omnis quia odit amet minus ad vel, rem rerum ab ipsa exercitationem enim quos nesciunt inventore quaerat ut maiores! </template>
  </ProductsCard>
    <ProductsCard>
    <template v-slot:coverimg>
      <img src="@/assets/testimg/3.jpg" alt="">
    </template>
    <template v-slot:title>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dolore porro omnis quia odit amet minus ad vel, rem rerum ab ipsa exercitationem enim quos nesciunt inventore quaerat ut maiores! </template>
  </ProductsCard>
      <ProductsCard>
    <template v-slot:coverimg>
      <!-- <img src="@/assets/testimg/4.jpg" alt=""> -->
    </template>
    <template v-slot:title>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dolore porro omnis quia odit amet minus ad vel, rem rerum ab ipsa exercitationem enim quos nesciunt inventore quaerat ut maiores! </template>
  </ProductsCard>
      <ProductsCard>
    <template v-slot:coverimg>
      <img src="@/assets/testimg/5.jpg" alt="">
    </template>
    <template v-slot:title>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dolore porro omnis quia odit amet minus ad vel, rem rerum ab ipsa exercitationem enim quos nesciunt inventore quaerat ut maiores! </template>
  </ProductsCard>
</template>
