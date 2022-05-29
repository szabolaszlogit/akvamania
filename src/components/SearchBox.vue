<script setup>

</script>

<template>
<div class="container">
    <label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas">
<label for="site-search">Search the site:</label>
<input type="search" name="site-search">
<label for="pet-select">Choose a pet:</label>



  <div>
    <input type="radio" id="contactChoice1"
     name="contact" value="email" checked>
    <label for="contactChoice1">Email</label>

    <input type="radio" id="contactChoice2"
     name="contact" value="phone">
    <label for="contactChoice2">Phone</label>
  </div>
 
<<<<<<< HEAD
</div>
</template>

=======
<div class="btn-group">
  <button type="button">Apple</button>
  <button type="button">Samsung</button>
  <button type="button">Sony</button>
</div>
</div>
</template>

<style scoped>
.btn-group button {
  background-color: #04AA6D; /* Green background */
  border: 1px solid green; /* Green border */
  color: white; /* White text */
  padding: 10px 24px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Clear floats (clearfix hack) */
.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}

</style>
>>>>>>> 22349899e87115ac203244832221e0443037be72
