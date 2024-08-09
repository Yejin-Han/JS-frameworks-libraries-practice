<template>
    <section class="calculator">
        <div class="calculator__top">
            <h2 class="calculator__title">Mortgage Calculator</h2>
            <button type="button" class="calculator__btn--clear-all" @click="clearAll">Clear All</button>
        </div>
        <form class="calculator__form" @submit.prevent="calculateMortgage">
            <div class="calculator__form-group">
                <label for="amount" class="calculator__form__label">Mortgage Amount</label>
                <div class="calculator__form__input-group" :class="[{'calculator__form__input-group--focused': isAmountFocused}, {'calculator__form__input-group--error': amountErr}]">
                    <span class="calculator__form__unit" :class="[{'calculator__form__unit--focused': isAmountFocused}, {'calculator__form__unit--error': amountErr}]">£</span>
                    <input type="text" id="amount" class="calculator__form__input--number" v-model="formattedAmount" @input="onAmountInput" @blur="onAmountBlur" @focus="isAmountFocused = true" />
                </div>
                <span class="calculator__form__error" v-if="amountErr">This field is required</span>
            </div>
            <div class="calculator__form__wrapper">
                <div class="calculator__form-group calculator__form-group--2">
                    <label for="term" class="calculator__form__label">Mortgage Term</label>
                    <div class="calculator__form__input-group" :class="[{'calculator__form__input-group--focused': isTermFocused}, {'calculator__form__input-group--error': termErr}]">
                        <input type="number" id="term" class="calculator__form__input--number" v-model.number="term" @focus="isTermFocused = true" @blur="isTermFocused = false" />
                        <span class="calculator__form__unit" :class="[{'calculator__form__unit--focused': isTermFocused}, {'calculator__form__unit--error': termErr}]">years</span>
                    </div>
                    <span class="calculator__form__error" v-if="termErr">This field is required</span>
                </div>
                <div class="calculator__form-group calculator__form-group--2">
                    <label for="rate" class="calculator__form__label">Interest Rate</label>
                    <div class="calculator__form__input-group" :class="[{'calculator__form__input-group--focused': isRateFocused}, {'calculator__form__input-group--error': rateErr}]">
                        <input type="number" step="0.01" id="rate" class="calculator__form__input--number" v-model.number="rate" @focus="isRateFocused = true" @blur="isRateFocused = false" />
                        <span class="calculator__form__unit" :class="[{'calculator__form__unit--focused': isRateFocused}, {'calculator__form__unit--error': rateErr}]">%</span>
                    </div>
                    <span class="calculator__form__error" v-if="rateErr">This field is required</span>
                </div>
            </div>
            <div class="calculator__form-group calculator__form-group--selectable">
                <p class="calculator__form__label">Mortgage Type</p>
                <div class="calculator__form__input-group" :class="[{'calculator__form__input-group--checked': isRepaymentChecked}]">
                    <input type="radio" id="repayment" value="repayment" class="calculator__form__input--radio" v-model="type" @change="handleRadioChange" />
                    <label for="repayment" class="calculator__form__sublabel">Repayment</label>
                </div>
                <div class="calculator__form__input-group" :class="[{'calculator__form__input-group--checked': isInterestOnlyChecked}]">
                    <input type="radio" id="interest-only" value="interest-only" class="calculator__form__input--radio" v-model="type" @change="handleRadioChange" />
                    <label for="interest-only" class="calculator__form__sublabel">Interest Only</label>
                </div>
                <span class="calculator__form__error" v-if="typeErr">This field is required</span>
            </div>
            <button type="submit" class="calculator__btn--submit"><i class="calculator__btn--submit__icon"></i>Calculate Repayments</button>
        </form>
    </section>
</template>

<script setup>
import { ref, watch } from 'vue';
import { formatNumber } from '@/utils/utils';

const amount = ref('');
const formattedAmount = ref('');
const term = ref('');
const rate = ref('');
const type = ref('');

const isAmountFocused = ref(false);
const isTermFocused = ref(false);
const isRateFocused = ref(false);
const isRepaymentChecked = ref(type.value === 'repayment');
const isInterestOnlyChecked = ref(type.value === 'interest-only');

const amountErr = ref(false);
const termErr = ref(false);
const rateErr = ref(false);
const typeErr = ref(false);

const emit = defineEmits(['calculate', 'clear']);

const parseNumber = (value) => {
    if(!value) return '';
    return value.replace(/,/g, '');
}

watch(amount, (newVal) => {
    formattedAmount.value = formatNumber(newVal);
});

const onAmountInput = (e) => {
    let rawVal = e.target.value;
    rawVal = rawVal.replace(/[^\d]/g, '');
    if(e.target.value !== rawVal) {
        e.target.value = formatNumber(rawVal);
    }
    amount.value = rawVal;
    formattedAmount.value = formatNumber(rawVal);
};

const onAmountBlur = () => {
    formattedAmount.value = formatNumber(amount.value);
    isAmountFocused.value = false;
}

const handleRadioChange = () => {
    isRepaymentChecked.value = type.value === 'repayment';
    isInterestOnlyChecked.value = type.value === 'interest-only';
}

const calculateMortgage = () => {
    amountErr.value = !amount.value;
    termErr.value = !term.value;
    rateErr.value = !rate.value;
    typeErr.value = !type.value;

    if(amount.value && term.value && rate.value && type.value) {
        const principal = amount.value;
        const annualRate = rate.value / 100;
        const monthlyRate = annualRate / 12;
        const months = term.value * 12;

        let monthlyPayment;
        if(type.value) {
            if(type.value === 'repayment') {
                monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
            } else {
                monthlyPayment = (principal * monthlyRate);
            }
        }

        const totalPayment = monthlyPayment * months;

        const calculatedResults = {
            monthlyPayment: monthlyPayment.toFixed(2),
            totalPayment: totalPayment.toFixed(2)
        };

        emit('calculate', calculatedResults);
    }
}

const clearAll = () => {
    amount.value = '';
    term.value = '';
    rate.value = '';
    type.value = '';

    emit('clear');
};
</script>

<style lang="scss">
.calculator {
    background: $white;
    color: $slate--700;
    padding: 2.375rem 1.5rem 2.125rem;

    &__title {
        color: $slate--900;
        font-size: 1.5rem;
        font-weight: 700;
    }

    &__btn {
        &--clear-all {
            text-decoration: underline;
            text-underline-position: under;
            margin-top: 0.625rem;
        }

        &--submit {
            background-color: $lime;
            border-radius: 2rem;
            color: $slate--900;
            font-size: 1.125rem;
            font-weight: 700;
            width: 100%;
            margin-top: 1.5rem;
            padding: 1rem 0;
            @include flex-center;

            &__icon {
                width: 1.625rem; height: 1.8rem;
                background: url('/assets/images/icon-calculator.svg') no-repeat center center / contain;
                margin-right: 0.65rem;
            }
        }
    }

    &__form {
        &-group {
            width: 100%;
            margin-top: 1.875rem;

            &--selectable {
                .calculator__form__input-group {
                    padding: 0 1.25rem;
                    cursor: pointer;

                    &:not(:last-of-type) {
                        margin-bottom: 0.75rem;
                    }
                }
            }
        }

        &__label {
            display: inline-block;
            margin-bottom: 0.265rem;
        }

        &__sublabel {
            color: $slate--900;
            font-size: 1.125rem;
            font-weight: 700;
            width: 100%;
            padding: 0.75rem 0;
        }

        &__input {
            &-group {
                display: flex;
                align-items: center;
                border: 1px solid $slate--500;
                border-radius: 0.375rem;
                width: 100%; height: 3.25rem;
                position: relative;
                overflow: hidden;

                &--checked {
                    border-color: $lime;
                    background-color: rgba($lime, 0.2);
                }

                &--focused {
                    border-color: $lime;
                }

                &--error {
                    border-color: $red;
                }
            }

            &--number {
                flex: 1;
                color: $slate--900;
                font-size: 1.125rem;
                font-weight: 700;
                border: 0 none;
                min-width: 0; height: 100%;
                padding: 0.7rem 1.125rem;
            }

            &--radio {
                flex-shrink: 0;
                width: 1.25rem; height: 1.25rem;
                border-radius: 50%;
                border: 1px solid $slate--500;
                margin-right: 1.25rem;
                padding: 0;
                position: relative;

                &:checked {
                    border-color: $lime;

                    &:after {
                        content: '';
                        display: block;
                        width: 60%; height: 60%;
                        @include position-center;
                        background-color: $lime;
                        border-radius: 50%;
                    }
                }
            }
        }

        &__unit {
            flex-shrink: 0;
            @include flex-center;
            background-color: $slate--100;
            font-size: 1.125rem;
            font-weight: 700;
            height: 100%;
            padding: 0 1.125rem;

            &--focused {
                background-color: $lime;
                color: $slate--900;
            }

            &--error {
                background-color: $red;
                color: $white;
            }
        }

        &__error {
            display: inline-block;
            color: $red;
            font-size: 0.875rem;
            margin-top: 0.8rem;
        }
    }


    @include breakpoint('md') {
        width: 50%;
        padding: 2.5rem;

        &__top {
            @include flex-between;
        }

        &__title {
            margin-right: 1rem;
        }

        &__btn {
            &--clear-all {
                flex-shrink: 0;
                margin-top: 0;
                transition: all 0.4s;

                &:hover {
                    color: $slate--900;
                }
            }

            &--submit{
                transition: all 0.4s;

                &:hover {
                    background-color: rgba($lime, 0.5);
                }
            }
        }

        &__form {
            &__wrapper {
                display: flex;
            }

            &-group {
                &--2 {
                    width: 48.5%;

                    &:first-of-type {
                        margin-right: 3%;
                    }
                }

                &--selectable {
                    .calculator__form__input-group:hover {
                        border-color: $lime;
                    }
                }
            }

            &__input {
                &-group {
                    transition: border-color 0.2s;

                    &:hover {
                        border-color: $slate--900;
                    }
                }
            }
        }
    }
}
</style>