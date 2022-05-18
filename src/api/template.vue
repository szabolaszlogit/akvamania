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
 
  await Storage.put('v.jpg', files[0]  );

}


</script>

<template>
  <button v-on:click="saveProduct">add product</button>
  <button v-on:click="getAllProduct">get all product</button>
  <button v-on:click="saveProductWithImage">saveProductWithImage</button>
  <div v-for="product in allProduct">{{ product.createdAt }}</div>

  <label for="files">Select multiple files</label>
  <input
    v-on:change="uploadImage"
    type="file"
    accept="image/jpeg, image/png, image/jpg"
  />
  <div id="result"></div>

<img
          
          src="https://akvamaniae8af70a7e2fb4aa78be66cf976d01d6e191059-dev.s3.eu-west-1.amazonaws.com/public/v.jpg"
      
        />
      
</template>

<style scoped>
#result {
  display: flex;
  gap: 10px;
  padding: 10px 0;
}
.thumbnail {
  height: 200px;
}
</style>
