<script setup lang="ts">
import store from './store';
import Sample from '@/components/Sample.vue';

const increment = () => {
  store.dispatch('incrementAction');
};

const decrement = () => {
  store.dispatch('decrementAction');
};
</script>

<template>
  <div class="p-5">
    <h2>Vuex Demo</h2>
    <hr />
    <p>Counter: {{ store.state.counter }}</p>
    <button class="btn btn-primary me-4" @click="increment">Increment</button>
    <button class="btn btn-primary me-4" @click="decrement">Decrement</button>

    <hr />
    <Sample />
  </div>
</template>
