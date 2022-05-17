<script setup>
import { ref } from "vue";
import { Storage, API, graphqlOperation } from "aws-amplify";
import { createProduct } from "../graphql/mutations";
import { listProducts } from "../graphql/queries";

/* create a todo */
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
async function saveProductWithImage() {
  const fileName = "1";
  await Storage.put(fileName, '1.jpg');
  const product = { title: "Product 1", description: "Black dress", price: 200, images: '1', type: "Product" };
  await API.graphql({ query: createProduct, variables: { input: product }});
}
</script>

<template>
  <button v-on:click="saveProduct">add product</button>
  <button v-on:click="getAllProduct">get all product</button>
  <button v-on:click="saveProductWithImage">saveProductWithImage</button>
  <div v-for= "product in allProduct">{{ product.createdAt  }}</div>
   <amplify-s3-image img-key="1.jpg" />
   <img src="https://akvamaniae8af70a7e2fb4aa78be66cf976d01d6e191059-dev.s3.eu-west-1.amazonaws.com/public/1.jpg" alt="">
</template>

<style></style>
