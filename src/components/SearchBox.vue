<script setup></script>

<template>
  <div class="container">
    <div class="select">
      <select id="standard-select">
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
        <option value="Option 4">Option 4</option>
        <option value="Option 5">Option 5</option>
        <option value="Option length">
          Option that has too long of a value to fit
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>
select {
  display: inline-block;
  box-sizing: border-box;
  padding: 0.5em 2em 0.5em 0.5em;
  border: 1px solid red;
  font: inherit;
  line-height: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  background-repeat: no-repeat;
  background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),
    linear-gradient(135deg, currentColor 50%, transparent 50%);
  background-position: right 15px top 1em, right 10px top 1em;
  background-size: 5px 5px, 5px 5px;
}
</style>
