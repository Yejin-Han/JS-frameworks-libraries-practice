<template>
    <div class="cart">
        <h2 class="cart__title">Your Cart(<span>{{ cartItemCount }}</span>)</h2>
        <div class="cart__empty" v-if="cartItems.length <= 0">
            <img src="/assets/images/illustration-empty-cart.svg" alt="">
            <p>Your added items will appear here</p>
        </div>
        <div class="cart--selected" v-else>
            <ul class="cart__list">
                <CartItem v-for="item in cartItems" :key="item.id" :item="item" />
            </ul>
            <div class="cart__order">
                <h4 class="cart__order__title">Order Total</h4>
                <strong class="cart__order__price">${{ formattedTotal }}</strong>
            </div>
            <div class="cart__carbon">
                <i class="cart__carbon__icon"></i><p class="cart__carbon__text">This is a <strong>carbon-neutral</strong> delivery</p>
            </div>
            <button type="button" class="cart__btn--confirm btn--red" @click="confirmOrder">Confirm Order</button>
            <OrderConfirmation v-if="showModal" @close="startNewOrder" />
        </div>
    </div>
</template>

<script setup>
import { computed, watch } from "vue";
import { useStore } from "vuex";
import { formatPrice } from "@/utils/utils";
import CartItem from "@/components/CartItem.vue";
import OrderConfirmation from "@/components/OrderConfirmation.vue";

const store = useStore();

const cartItems = computed(() => store.getters.cartItems);
const cartTotal = computed(() => store.getters.cartTotal);
const cartItemCount = computed(() => store.getters.cartItemCount);
const showModal = computed(() => store.getters.showModal);

const formattedTotal = computed(() => formatPrice(cartTotal.value));

const confirmOrder = () => {
    store.dispatch('toggleModal');
};

const startNewOrder = () => {
    store.dispatch('resetCart');
    store.dispatch('toggleModal');
};

watch(showModal, (newVal) => {
    if(newVal) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});
</script>

<style lang="scss">
.cart {
    background-color: #fff;
    border-radius: 0.625rem;
    overflow: hidden;
    padding: 2rem 1.625rem 2.625rem;

    &__title {
        font-weight: 700;
        font-size: 1.5rem;
        color: $red;
        margin-bottom: 1.75rem;
    }

    &__empty {
        padding-top: 1.0625rem;

        img {
            margin: 0 auto;
        }
        p {
            text-align: center;
            font-weight: 600;
            font-size: 0.875rem;
            color: $rose--500;
            margin-top: 1.25rem;
        }
    }

    &--selected {
        font-size: 0.9rem;
    }

    &__order {
        margin: 1.75rem 0;
        @include flex-between;

        &__price {
            font-weight: 700;
            font-size: 1.625rem;
        }
    }

    &__carbon {
        background-color: #fcf8f5;
        border-radius: 0.625rem;
        padding: 0.875rem 1.375rem;
        @include flex-center;

        &__icon {
            display: block;
            width: 1.375rem; height: 1.375rem;
            background: url("assets/images/icon-carbon-neutral.svg") no-repeat center center / contain;
            margin-right: 0.35rem;
        }

        &__text {
            font-size: 0.875rem;

            strong {
                font-weight: 600;
            }
        }
    }

    &__btn--confirm {
        margin-top: 1.5rem;
        transition: background-color 0.4s;
    }

    @include breakpoint("md") {
        flex-shrink: 0;
        width: 24.125rem;
        margin-left: 1.875rem;

        &__btn--confirm:hover {
            margin-top: 1.5rem;
            background-color: #952c0c;
        }
    }

    @include breakpoint("dt") {
        width: 35rem;
    }
}
</style>