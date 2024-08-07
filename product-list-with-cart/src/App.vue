<template>
    <main>
        <div class="inner">
            <ProductList />
            <Cart />
        </div>
    </main>
</template>

<script setup>
import ProductList from "@/components/ProductList.vue";
import Cart from "@/components/Cart.vue";
</script>

<style lang="scss">
html {
    font-size: 16px;
}
body {
    min-width: 375px;
}
main {
    padding: 1.5rem;
    background-color: #fcf8f5;
}

.btn {
    &--red {
        padding: 1.125rem 0;
        width: 100%;
        background-color: $red;
        border-radius: 1.75rem;
        font-weight: 600;
        font-size: 1rem;
        color: #fff;
    }
}

@include breakpoint("md") {
    main {
        .inner {
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            max-width: 1220px;
            padding: 6rem 0 5.5rem;
        }
    }
}
</style>