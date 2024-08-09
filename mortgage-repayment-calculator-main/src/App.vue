<template>
  <main>
    <Calculator @calculate="handleCalculate" @clear="handleClear" />
    <Result :results="results" />
  </main>
</template>

<script setup>
import { ref } from 'vue';
import Calculator from '@/components/Calculator.vue';
import Result from '@/components/Result.vue';

const results = ref(null);

const handleCalculate = (calculatedResults) => {
  results.value = calculatedResults;
};

const handleClear = () => {
  results.value = null;
};
</script>

<style lang="scss">
html, body {
  font-size: 16px;
  height: 100%;
}
body {
  min-width: 375px;
}
#app {
  background-color: $slate--100;
  min-height: 100%;

  @include breakpoint('md') {
    @include flex-center;
    padding: 1.5rem;
  }
}
main {
  background-color: $white;
  max-width: 1010px;
  overflow: hidden;

  @include breakpoint('md') {
    display: flex;
    border-radius: 1.5rem;
  }
}
</style>