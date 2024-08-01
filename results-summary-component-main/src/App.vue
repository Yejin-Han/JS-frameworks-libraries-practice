<template>
  <main>
    <div class="result">
      <h3 class="result__tit">Your Result</h3>
      <div class="result__circle">
        <strong class="result__score">76</strong>
        <span class="result__total">of 100</span>
      </div>
      <div class="result__grade">
        <h4 class="result__grade__tit">Great</h4>
        <p class="result__grade__text">You scored higher than 65% of the people who have taken these tests.</p>
      </div>
    </div>
    <div class="summary">
      <h3 class="summary__tit">Summary</h3>
      <ul class="summary__list">
        <li class="summary__item" v-for="(item, idx) in items" :key="idx">
          <h5 class="summary__category">
            <i class="summary__icon"><img :src="item.icon" :alt="item.category"></i>
            {{ item.category }}
          </h5>
          <div class="summary__my">
            <strong class="summary__score">{{ item.score }}</strong> / 100
          </div>
        </li>
      </ul>
      <a href="javascript:;" class="summary__btn"><span>Continue</span></a>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const items = ref([]);

const fetch = async () => {
  try {
    const baseUrl = import.meta.env.BASE_URL;
    const res = await axios.get(`${baseUrl}assets/data/data.json`);
    items.value = res.data.map(item => ({
      ...item,
      icon: `${baseUrl}${item.icon}`
    }));
  } catch(err) {
    console.error('Error fetching data: ', err);
  }
}

onMounted(() => {
  fetch();
})
</script>

<style lang="scss">
html {
  font-size: 18px;
}
html, body, #app, main {
  height: 100%;
}
body {
  min-width: 375px;
}
@include breakpoint("md") {
  #app {
    @include flex-center;
  }
  main {
    @include flex-center;
    width: 738px; height: 513px;
    background: $white;
    border-radius: 2rem;
    box-shadow: 1.25rem 1.5rem 2rem -0.5rem rgba($light-royal-blue, 0.1);
    overflow: hidden;
  }
}

.result {
  width: 100%;
  text-align: center;
  background: linear-gradient(0deg, $light-royal-blue 0%, $light-slate-blue 100%);
  padding: 1.56rem 0 2.22rem;
  border-radius: 0 0 2rem 2rem;

  &__tit {
    font-weight: 700;
    color: $light-lavender;
  }

  &__circle {
    width: 8rem; height: 8rem;
    margin: 1.56rem auto;
    border-radius: 50%;
    background: linear-gradient(0deg, $persian-blue 0%, $violet-blue 100%);
    @include flex-center;
    flex-direction: column;
  }

  &__score {
    font-size: 3rem;
    font-weight: 700;
    color: $white;
  }

  &__total {
    font-size: 0.9rem;
    color: rgba($light-lavender, 0.7);
  }

  &__grade {
    &__tit {
      font-weight: 700;
      font-size: 1.3rem;
      color: $white;
      margin-bottom: 0.5rem;
    }

    &__text {
      max-width: 260px;
      font-size: 0.9rem;
      color: $light-lavender;
      margin: 0 auto;
    }
  }

  @include breakpoint("md") {
    width: 50%; height: 100%;
    border-radius: 2rem;
    padding: 2.56rem 0;
    @include flex-center;
    flex-direction: column;

    &__tit {
      font-size: 1.3rem;
    }

    &__circle {
      width: 11.56rem; height: 11.56rem;
    }

    &__score {
      font-size: 4rem;
    }

    &__total {
      font-size: 1rem;
    }

    &__grade {
      &__tit {
        font-size: 1.7rem;
        margin-bottom: 1rem;
      }

      &__text {
        font-size: 1rem;
      }
    }
  }
}

.summary {
  width: 100%;
  padding: 1.667rem;

  &__tit {
    font-weight: 900;
    color: $dark-gray-blue;
    margin-bottom: 1.33rem;
  }

  &__item {
    @include flex-between;
    font-weight: 900;
    font-size: 0.85rem;
    border-radius: 0.5rem;
    padding: 0.9rem;

    &:nth-child(1) {
      background-color: rgba($light-red, 0.07);
      color: $light-red;
    }
    &:nth-child(2) {
      background-color: rgba($orangey-yellow, 0.07);
      color: $orangey-yellow;
    }
    &:nth-child(3) {
      background-color: rgba($green-teal, 0.07);
      color: $green-teal;
    }
    &:nth-child(4) {
      background-color: rgba($cobalt-blue, 0.07);
      color: $cobalt-blue;
    }

    &:not(:last-child) {
      margin-bottom: 0.9rem;
    }
  }

  &__category {
    display: flex;
    align-items: center;
  }

  &__icon {
    display: inline-block;
    width: 1.167rem; height: 1.167rem;
    margin-right: 0.67rem;
    
    img {
      width: 100%;
    }
  }

  &__my {
    color: #999;
  }

  &__score {
    font-weight: 700;
    color: $dark-gray-blue;
  }

  &__btn {
    display: block;
    width: 100%;
    text-align: center;
    background: $dark-gray-blue;
    color: $white;
    border-radius: 1.75rem;
    margin-top: 1.33rem;
    position: relative;
    overflow: hidden;
    @include flex-center;
    
    span {
      display: inline-block;
      padding: 1.05rem 0;
      position: relative;
      z-index: 1;
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      left: 0; top: 0;
      width: 100%; height: 100%;
      transition: opacity 0.4s;
      background: linear-gradient(0deg, $light-royal-blue 0%, $light-slate-blue 100%);
      opacity: 0;
    }
  }

  @include breakpoint("md") {
    width: 50%; height: 100%;
    padding: 2.56rem 2.22rem;
    @include flex-center;
    flex-direction: column;

    &__tit {
      width: 100%;
      text-align: left;
      font-size: 1.3rem;
    }

    &__list {
      width: 100%;
    }

    &__item {
      font-size: 1rem;
    }

    &__btn {
      margin-top: 2.22rem;

      &:hover {
        &:after {
          opacity: 1;
        }
      }
    }
  }
}
</style>
