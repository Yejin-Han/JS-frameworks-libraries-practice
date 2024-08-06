<template>
    <div class="modal">
        <div class="modal__content">
            <i class="modal__icon"></i>
            <h2 class="modal__title">Order Confirmed</h2>
            <p class="modal__text">We hope you enjoy your food!</p>
            <div class="modal__cart">
                <ul class="cart__list">
                    <CartItem v-for="item in cartItems" :key="item.id" :item="item" />
                </ul>
                <div class="cart__order">
                    <h4 class="cart__order__title">Order Total</h4>
                    <strong class="cart__order__price">${{ formattedTotal }}</strong>
                </div>
            </div>
            <button type="button" class="modal__btn btn--red" @click="$emit('close')">Start New Order</button>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { formatPrice } from "@/utils/utils";
import CartItem from "@/components/CartItem.vue";

const props = defineProps({
    item: Object
});

const store = useStore();

const cartItems = computed(() => store.getters.cartItems);
const cartTotal = computed(() => store.getters.cartTotal);
const cartItemCount = computed(() => store.getters.cartItemCount);

const formattedTotal = computed(() => formatPrice(cartTotal.value));
</script>

<style lang="scss">
.modal {
    @include position-fixed;
    width: 100%; height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    &__content {
        position: absolute;
        left: 50%; bottom: 0;
        transform: translateX(-50%);
        width: 100%;
        max-height: 85vh;
        background-color: #fff;
        border-radius: 0.625rem 0.625rem 0 0;
        padding: 1.5rem; padding-top: 2.625rem;
    }

    &__icon {
        display: inline-block;
        width: 2.8125rem; height: 2.8125rem;
        background: url("/assets/images/icon-order-confirmed.svg") no-repeat center center / contain;
        margin-bottom: 1rem;
    }

    &__title {
        font-weight: 700;
        font-size: 2.5rem;
    }

    &__text {
        font-size: 1rem;
        color: $rose--500;
        margin-top: 0.5rem;
    }

    &__cart {
        background-color: #fcf8f5;
        margin-top: 2rem;
        padding: 1.5rem; padding-right: 0.5rem;
        border-radius: 0.625rem;

        .cart {
            &__list {
                height: 23.4rem;
                overflow-y: scroll;
            }

            &__item {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding-bottom: 1rem;
                margin-right: 0.75rem;
            }

            &__thumb {
                flex-shrink: 0;
                width: 3.125rem; height: 3.125rem;
                border-radius: 0.375rem;
                margin-right: 0.625rem;
            }

            &__content {
                flex: 1;
                position: relative;
            }

            &__subtitle {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            &__info {
                margin-bottom: 0;
            }

            &__total {
                position: absolute;
                right: 0; top: 50%;
                transform: translateY(-50%);
                font-size: 1rem;
                color: $rose--900;
            }

            &__btn--remove {
                display: none;
            }

            &__order {
                margin-bottom: 0;
            }
        }
    }

    &__btn {
        margin-top: 2rem;
    }

    @include breakpoint("md") {
        &__content {
            max-width: 36.875rem;
            max-height: none;
            bottom: 50%;
            transform: translate(-50%, 50%);
            border-radius: 0.625rem;
            padding: 2.75rem 2.5rem 2.625rem;
        }

        &__title {
            font-size: 2.25rem;
        }
    }
}
</style>