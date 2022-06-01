<script setup>
import { onMounted } from "vue";
const props = defineProps(["choices"]);
defineEmits(["sendChoice"]);
function changeBcg($event) {
  let btns = $event.target.parentElement.querySelectorAll("button");
  for (let index = 0; index < btns.length; index++) {
    btns[index].style.backgroundColor = "var(--light)";
    btns[index].style.color = "var(--navdark)";
  }

  $event.target.style.backgroundColor = "var(--info)";
  $event.target.style.color = "var(--light)";
}

onMounted(() => {
  let choice = props.choices[0];
  let btn = document.querySelector(`[data-choice="${choice}"]`);
  btn.click();
});
</script>

<template>
  <div class="btn-group">
    <button
      v-for="choice in choices"
      :data-choice="choice"
      @click="$emit('sendChoice', choice), changeBcg($event)"
      type="button"
    >
      {{ choice }}
    </button>
  </div>
</template>

<style scoped>
.btn-group {
  display: flex;
  margin: 10px
}
.btn-group button {
  background-color: var(--light);
  color: var(--navdark);

  padding: 10px 24px;
  cursor: pointer;
  float: left;
  border: 1px solid #ced4da;
  /* -webkit-tap-highlight-color: transparent; */
  transition: background-color 1s ease-out;
  transition: hover 1s ease-out;
  border-radius: 0;
}

.btn-group button:hover {
  background-color: var(--info);
}
.btn-group button:not(:last-child) {
  border-left: none;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.btn-group button:first-child {
  border-top-left-radius: var(--btnborder-radius);
  border-bottom-left-radius: var(--btnborder-radius);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.btn-group button:last-child {
  border-top-right-radius: var(--btnborder-radius);
  border-bottom-right-radius: var(--btnborder-radius);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
