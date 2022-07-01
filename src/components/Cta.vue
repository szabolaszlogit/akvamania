<script setup></script>

<template>
  <div class="cta">
    <div class="container">
      <h1>Akvarisztikai apróhirdetések</h1>

      <div class="">
        Ingyenes apróhirdetés feladás! <br />
        Keres-kínál, növények, halak, felszerelés - minden, ami akvarisztika.
      </div>
      <router-link to="/add">
        <button>Hirdetés létrehozása</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.cta {
  background-color: var(--light);
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 22px;
  padding: 50px 20px 20px 20px;
  color: var(--secondary);
}
h1 {
  font-size: 32px;
  font-weight: 700;
  padding: 10px;
  color: var(--info);
}

button {
  cursor: pointer;
  border: 1px solid var(--success);
  border-radius: 2rem;
  color: #ffffff;
  background: var(--success);
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  padding: 1rem 2rem 1rem 2rem;
  margin: 35px 0 20px 0;
  transition: hover 2s ease-in;
}

button:hover {
  background: var(--info);
}
</style>
