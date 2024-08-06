<template>
    <li class="product__item">
        <div class="product__info">
            <picture class="product__picture" :class="{ 'product__picture--selected': inCart === true }">
                <source :srcset="product.image.tablet" media="(min-width: 768px) and (max-width: 1023px)">
                <source :srcset="product.image.desktop" media="(min-width: 1024px)">
                <img :src="product.image.mobile" :alt="product.name" class="product__img">
            </picture>
            <div class="product__content">
                <span class="product__category">{{ product.category }}</span>
                <h3 class="product__subtitle">{{ product.name }}</h3>
                <p class="product__price">${{ formattedPrice }}</p>
            </div>
        </div>
        <div class="product__select">
            <div class="product__btn product__btn--select" v-if="inCart">
                <button type="button" class="product__btn--quantity product__btn--minus" @click="decreaseQuantity">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
                </button>
                <span>{{ quantity }}</span>
                <button type="button" class="product__btn--quantity product__btn--plus" @click="increaseQuantity">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
                </button>
            </div>
            <button type="button" class="product__btn product__btn--addtocart" v-else @click="addToCart"><i class="product__btn--addtocart__icon"></i><span class="product__btn--addtocart__text">Add to Cart</span></button>
        </div>
    </li>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { formatPrice } from "@/utils/utils";

const props = defineProps({
    product: Object
});

const store = useStore();

const inCart = computed(() => !!store.getters.cartItems.find(item => item.id === props.product.id));
const quantity = computed(() => {
    const item = store.getters.cartItems.find(item => item.id === props.product.id);
    return item ? item.quantity : 0;
});

const formattedPrice = computed(() => formatPrice(props.product.price));

const addToCart = () => {
    store.dispatch('addToCart', props.product);
};

const increaseQuantity = () => {
    store.dispatch('updateQuantity', { productId: props.product.id, quantity: quantity.value + 1 });
}

const decreaseQuantity = () => {
    store.dispatch('updateQuantity', { productId: props.product.id, quantity: quantity.value - 1 });
}
</script>

<style lang="scss">
.product {
    &__item {
        position: relative;

        &:not(:last-child) {
            margin-bottom: 1.5rem;
        }
    }

    &__picture {
        border-radius: 0.625rem;
        overflow: hidden;

        &--selected {
            border: 2px solid $red;
        }
    }

    &__img {
        width: 100%;
    }

    &__content {
        margin-top: 2.5rem;
    }

    &__category {
        display: inline-block;
        font-size: 0.875rem;
        color: $rose--500;
        margin-bottom: 0.4rem;
    }

    &__subtitle {
        font-weight: 600;
        font-size: 1rem;
        margin-bottom: 0.3rem;
    }

    &__price {
        font-weight: 600;
        font-size: 1rem;
        color: $red;
    }

    &__select {
        position: absolute;
        left: 50%; top: calc(100% - 6.875rem); /* top: calc((100vw - 3rem) * (212 / 327)); */
        transform: translate(-50%, -50%);
        width: 10.125rem; height: 2.6875rem;
    }

    &__btn {
        width: 100%; height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        &--select {
            border-radius: 1.5rem;
            background-color: $red;
            font-weight: 600;
            color: #fff;
        }

        &--quantity {
            width: 1.125rem; height: 1.125rem;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 65%;
            border-radius: 50%;
            border: 2px solid #fff;
            transition: all 0.4s;
            @include flex-center;
            svg {
                width: 65%;
                
                path {
                    transition: all 0.4s;
                }
            }
        }

        &--addtocart {
            width: 100%; height: 100%;
            background-color: #fff;
            border-radius: 1.5rem;
            border: 1px solid $rose--500;
            transition: all 0.4s;
            @include flex-center;

            &__icon {
                display: inline-block;
                width: 1.5rem; height: 1.375rem;
                background: url("/assets/images/icon-add-to-cart.svg") no-repeat center center / contain;
                margin-right: 0.625rem;
            }

            &__text {
                font-weight: 600;
                font-size: 0.875rem;
            }
        }
    }

    @include breakpoint("md") {
        &__item {

        }

        &__select {
            
        }

        &__btn {
            &--quantity:hover {
                background-color: #fff;

                svg {
                    path {
                        fill: $red;
                    }
                }
            }

            &--addtocart:hover {
                color: $red;
                border-color: $red;
            }
        }
    }

    @include breakpoint("slg") {
        &__item {
            width: 48.5%;
        }
    }

    @include breakpoint("xxl") {
        &__item {
            width: 32%;
        }
    }
}
</style>