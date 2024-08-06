<template>
    <li class="cart__item">
        <img :src="item.image.thumbnail" :alt="item.name" class="cart__thumb" v-if="showModal">
        <div class="cart__content">
            <h3 class="cart__subtitle">{{ item.name }}</h3>
            <div class="cart__info">
                <span class="cart__quantity">{{ item.quantity }}x</span>
                <span class="cart__price">@ ${{ formattedPrice }}</span>
                <span class="cart__total">${{ formattedTotal }}</span>
            </div>
            <button type="button" class="cart__btn--remove" @click="removeFromCart">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
            </button>
        </div>
    </li>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { formatPrice } from "@/utils/utils";

const props = defineProps({
    item: Object
});

const store = useStore();
const showModal = computed(() => store.getters.showModal);

const formattedPrice = computed(() => formatPrice(props.item.price));
const formattedTotal = computed(() => formatPrice(props.item.quantity * props.item.price));

const removeFromCart = () => {
    store.dispatch('removeFromCart', props.item.id);
}
</script>

<style lang="scss">
.cart {
    &__item {
        position: relative;
        border-bottom: 1px solid $rose--100;

        &:not(:first-child) {
            margin-top: 1.125rem;
        }
    }

    &__subtitle {
        font-weight: 600;
    }

    &__info {
        margin-top: 0.5rem;
        margin-bottom: 1.125rem;
    }

    &__quantity {
        font-weight: 600;
        color: $red;
        margin-right: 1rem;
    }

    &__price {
        color: $rose--500;
        margin-right: 0.5rem;
    }

    &__total {
        font-weight: 600;
        color: $rose--500;
    }

    &__btn {
        &--remove {
            position: absolute;
            right: 0; top: 50%;
            transform: translateY(-50%);
            width: 1.125rem; height: 1.125rem;
            border-radius: 50%;
            border: 2px solid $rose--300;
            transition: all 0.4s;
            @include flex-center;

            svg {
                width: 75%;
                
                path {
                    transition: all 0.4s;
                }
            }
        }
    }

    @include breakpoint("md") {
        &__btn {
            &--remove:hover {
                border-color: $rose--500;
                svg path {
                    fill: $rose--500;
                }
            }
        }
    }
}
</style>