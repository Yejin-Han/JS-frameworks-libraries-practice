<template>
    <section class="results" :class="[{'results--centered': !results}]">
        <div class="results--selected" v-if="results">
            <h2 class="results__title">Your results</h2>
            <p class="results__text">Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>
            <div class="results__details">
                <div class="results__detail">
                    <h3 class="results__detail__title">Your monthly repayments</h3>
                    <p class="results__detail__amount results__detail__amount--highlighted">£{{ formattedMonthly }}</p>
                </div>
                <div class="results__detail">
                    <h3 class="results__detail__title">Total you'll repay over the term</h3>
                    <p class="results__detail__amount">£{{ formattedTotal }}</p>
                </div>
            </div>
        </div>
        <div class="results--empty" v-else>
            <img src="/assets/images/illustration-empty.svg" alt="illustration-result_empty" class="results--empty__illustration">
            <h2 class="results--empty__title">Results shown here</h2>
            <p class="results--empty__text">Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import { formatNumber } from '@/utils/utils';

const props = defineProps({
    results: {
        type: Object,
        default: () => null,
        required: false
    }
});

const formattedMonthly = computed(() => formatNumber(props.results.monthlyPayment));
const formattedTotal = computed(() => formatNumber(props.results.totalPayment));
</script>

<style lang="scss">
.results {
    background: $slate--900;
    color: $slate--300;
    padding: 2.125rem 1.5rem 1.875rem;

    &__title {
        color: $white;
        font-size: 1.5rem;
        font-weight: 700;
    }

    &__text {
        max-width: 327px;
        margin: 1.5rem auto 0;
    }

    &__details {
        background-color: #0e2431;
        border-radius: 0.15rem;
        margin-top: 1.25rem;
        padding: 0.125rem 1.25rem 1.5rem;
        position: relative;

        &:after {
            content: "";
            border-radius: 0.5rem;
            box-shadow: 0 -0.25rem 0 0 $lime;
            width: 100%; height: 1rem;
            position: absolute;
            left: 0; top: 0;
        }
    }

    &__detail {
        padding-top: 1.375rem;

        &__amount {
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
            color: $white;
            font-size: 1.5rem;
            font-weight: 700;
            margin-top: 0.75rem;
            padding-bottom: 0.875rem;

            &--highlighted {
                color: $lime;
                font-size: 2.5rem;
            }
        }
    }

    &--empty {
        text-align: center;

        &__illustration {
            margin: 0 auto 2rem;
        }

        &__title {
            color: $white;
            font-size: 1.5rem;
            font-weight: 700;
        }

        &__text {
            max-width: 327px;
            margin: 1.25rem auto 0;
        }
    }


    @include breakpoint('md') {
        border-bottom-left-radius: 3.25rem;
        width: 50%;
        padding: 2.5rem;

        &--centered {
            @include flex-center;
            flex-direction: column;
        }

        &__text {
            max-width: none;
        }

        &__details {
            margin-top: 2.75rem;
        }

        &__detail {
            &__amount {
                &--highlighted {
                    font-size: 3.5rem;
                }
            }
        }

        &--empty {
            &__text {
                max-width: none;
            }
        }
    }
}
</style>