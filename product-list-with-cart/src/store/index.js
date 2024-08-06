import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state: () => ({
        products: [],
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        showModal: false
    }),
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        addToCart(state, product) { // 장바구니에 상품 추가 or 기존 상품의 수량 증가
            const item = state.cart.find(item => item.id === product.id);
            if(item) {
                item.quantity++;
            } else {
                state.cart.push({ ...product, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeFromCart(state, productId) { // 특정 상품 장바구니에서 제거
            state.cart = state.cart.filter(item => item.id !== productId);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        updateQuantity(state, { productId, quantity }) { // 상품의 수량 업데이트, 수량이 0 이하가 되면 장바구니에서 제거
            const item = state.cart.find(item => item.id === productId);
            if(item) {
                item.quantity = quantity;
                if(item.quantity <= 0) {
                    state.cart = state.cart.filter(item => item.id !== productId);
                }
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        resetCart(state) { // 장바구니 초기화
            state.cart = [];
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        toggleModal(state) { // 주문 확인 모달 토글
            state.showModal = !state.showModal;
        }
    },
    actions: {
        async fetchProducts({ commit }) {
            try {
                const res = await axios.get('/assets/data/data.json');
                const products = res.data.map((product, idx) => ({
                    ...product,
                    id: idx + 1
                }));
                commit('setProducts', products);
            } catch(err) {
                console.error('Error Fetching Products: ', err);
            }
        },
        addToCart({ commit }, product) {
            commit('addToCart', product);
        },
        removeFromCart({ commit }, productId) {
            commit('removeFromCart', productId);
        },
        updateQuantity({ commit }, payload) {
            commit('updateQuantity', payload);
        },
        resetCart({ commit }) {
            commit('resetCart');
        },
        toggleModal({ commit }) {
            commit('toggleModal');
        }
    },
    getters: {
        cartItems: state => state.cart,
        cartTotal: state => state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
        cartItemCount: state => state.cart.reduce((total, item) => total + item.quantity, 0),
        products: state => state.products,
        showModal: state => state.showModal
    }
});

export default store;