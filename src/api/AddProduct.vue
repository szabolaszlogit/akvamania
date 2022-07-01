<script setup>
import { ref } from "vue";
import { Storage, API, graphqlOperation } from "aws-amplify";
import { createProduct } from "../graphql/mutations";
import { listProducts } from "../graphql/queries";

import UploadImage from "@/api/UploadImage.vue";

import BtnGroup from "@/components/BtnGroup.vue";
import Cat from "@/components/search/Cat.vue";
import Zip from "@/components/search/Zip.vue";

function getEmittedBtnGroupChoice(data) {
  btnGroupChoice.value = data;
}
const btnGroupChoice = ref("");

function getEmittedCsere(data) {
  btnGroupCsere.value = data;
}
const btnGroupCsere = ref("");

async function saveProduct() {
  const product = {
    description: "description.value",
    name: "selectedCity.value.name",
  };

  try {
    await API.graphql(graphqlOperation(createProduct, { input: product }));
    console.log("ok");
  } catch (error) {
    console.log(error);
  }
}

// getAllProduct
const allProduct = ref([]);

async function getAllProduct() {
  try {
    const result = await API.graphql({
      query: listProducts,
      authMode: "API_KEY",
    });
    allProduct.value = result.data.listProducts.items;
  } catch (error) {
    console.log(error);
  }
}

// upload image
async function uploadImage(event) {
  console.log(event);
  const files = event.target.files;

  if (!files.length) {
    console.log("Nincs file");
    return;
  }

  if (!files[0].type.match("image")) {
    console.log("Nem image");
    return;
  }

  await Storage.put("v.jpg", files[0]);
}
</script>

<template>
  <div class="container">
    {{ btnGroupChoice }}
    {{ btnGroupCsere }}
    <h1>Hirdetésfeladás</h1>
    <BtnGroup
      @send-choice="getEmittedBtnGroupChoice"
      :choices="['Keres', 'Kínál']"
    />
    <BtnGroup
      @send-choice="getEmittedCsere"
      :choices="['Csere nincs', 'Csere is']"
    />
    <label for="Cím">Hirdetés címe</label>
    <input type="text" name="Cím" />

    <label for="Szöveg">Hirdetés szövege</label>
    <textarea name="Szöveg" rows="4" cols="20"></textarea>

    <label for="Ár">Ár</label>
    <input type="number" name="Ár" />

    <Cat />
    <Zip />

    <div class="info"><p>Legalább egy elérhetőség megadása</p></div>
    <label for="Email">Email</label>
    <input type="email" name="Email" />
    <label for="Telefon">Telefon</label>
    <input type="tel" name="Telefon" />
    <br>
    <button>Következő lépés</button>
  </div>

  <!-- <hr>
  <button v-on:click="saveProduct">add product</button>
  <button v-on:click="getAllProduct">get all product</button>
  <button v-on:click="saveProductWithImage">saveProductWithImage</button>
  <div v-for="product in allProduct">{{ product.createdAt }}</div>

  <UploadImage /> -->

  <!-- <img
    src="https://akvamaniae8af70a7e2fb4aa78be66cf976d01d6e191059-dev.s3.eu-west-1.amazonaws.com/public/v.jpg"
  /> -->
</template>

<style scoped>
.container {
  background: var(--light);
}

@media only screen and (min-width: 768px) {
  .container {
    background: var(--light);
    max-width: 30%;
  }
}
</style>
