<template>
    <div class="product">
        <h2 class="product__title">Desserts</h2>
        <ul class="product__list">
            <ProductItem v-for="product in products" :key="product.id" :product="product" />
        </ul>
    </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import ProductItem from "@/components/ProductItem.vue";

const store = useStore();
const products = computed(() => store.state.products);

onMounted(() => {
    store.dispatch("fetchProducts");
});
</script>

<style lang="scss">
.product {
    margin-bottom: 1.875rem;

    &__title {
        font-weight: 700;
        font-size: 2.25rem;
        margin-bottom: 2.5rem;
    }

    @include breakpoint("md") {
        flex: 1;
        
        &__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            position: relative;
        }
    }
}
</style>