<script setup>
import { ref } from "vue";
import { Storage, API, graphqlOperation } from "aws-amplify";



const test = ref('dadsdssdsdasdas')

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
defineEmits(['increaseBy'])

</script>

<template>


  <label for="files">Select multiple files</label>
  <input
    v-on:change="uploadImage"
    type="file"
    accept="image/jpeg, image/png, image/jpg"
  />
{{test}}
 <button @click="$emit('increaseBy', 1)">
  Increase by 1
</button>
</template>

<style scoped>

</style>
