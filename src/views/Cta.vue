<script setup></script>

<template>
  <div class="basefont bg-yellow-100 p-4 md:p-6 lg:px-8 mb-5">
    <div class="text-700 text-center">
      <div class="text-900 font-bold text-blue-600 mb-3">
        <h1>Akvarisztikai apróhirdetések</h1>
      </div>
      <div class="text-700 text-xl md:text-2xl mb-5">
        Ingyenes apróhirdetés feladás! <br />
        Keres-kínál, növények, halak, felszerelés - minden, ami akvarisztika.
      </div>
      <router-link to="/add">
        <Button
          label="Hirdetés létrehozása"
          class="font-bold px-5 py-3 p-button-raised p-button-success p-button-rounded white-space-nowrap"
        ></Button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.p-card {
  word-wrap: break-word;
}
@media only screen and (max-width: 768px) {
  .product-image {
    width: 100vw;
    height: 40vw;
    object-fit: cover;
  }
}

@media only screen and (min-width: 768px) {
  .product-image {
    width: 25vw;
    height: 15vw;
    object-fit: cover;
  }
}

a {
  text-decoration: none;
}
</style>
