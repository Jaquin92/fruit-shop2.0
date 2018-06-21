import * as Data from '../store_items.json';

//Constants
const ADD_TO_CART = 'ADD_TO_CART';
const DECREMENT_FROM_CART = 'DECREMENT_FROM_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';
const CONFIRM_PURCHASE = 'CONFIRM_PURCHASE';

//Initial state
const initialState = {
    inventory: Data,
    cart: []

};

//Action creators

//addToCart or increment number in cart
export const addToCart = (item) => {
    let cart = initialState.cart;
    if (item.quantityRemaining === 0) {
        return {
            type: ADD_TO_CART,
            payload: cart
        }
    };
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].itemName === item.itemName) {
            if (cart[i].inCart === item.quantityRemaining) {
                return {
                    type: ADD_TO_CART,
                    payload: cart
                }
            }
            cart[i].inCart += 1
            return {
                type: ADD_TO_CART,
                payload: cart
            }
        }
    };
    item.inCart = 1;
    cart.push(item)
    return {
        type: ADD_TO_CART,
        payload: cart
    }
};

//decrement items from cart

export const decrementFromCart = (item) => {

    let cart = initialState.cart;

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].itemName === item.itemName) {
            if (cart[i].inCart === 0) {
                return {
                    type: DECREMENT_FROM_CART,
                    payload: cart
                }
            }
            cart[i].inCart -= 1
            return {
                type: DECREMENT_FROM_CART,
                payload: cart
            }
        }
    };

};

//delete item from cart

export const deleteFromCart = (item) => {
    let cart = initialState.cart;

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].itemName === item.itemName) {
            cart.splice(i, 1)
            return {
                type: DELETE_FROM_CART,
                payload: cart
            }
        }
    }
};

//complete purchase and update inventory

export const confirmPurchase = () => {
    let inventory = initialState.inventory;
    let cart = initialState.cart;

    for (let i = 0; i < inventory.length; i++) {
        for (let j = 0; j < cart.length; j++) {
            if (inventory[i].itemName === cart[j].itemName) {
                inventory[i].quantityRemaining = (inventory[i].quantityRemaining - cart[j].inCart)
                cart[j].inCart -= cart[j].inCart
            }
        }
    };
    initialState.cart = []
    return {
        type: CONFIRM_PURCHASE,
        payload: {
            cart: initialState.cart,
            inventory: inventory
        }
    }


}

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case ADD_TO_CART:
            return Object.assign({}, state, {
                cart: [...action.payload]
            });
        case DECREMENT_FROM_CART:
            return Object.assign({}, state, {
                cart: [...action.payload]
            });
        case DELETE_FROM_CART:
            return Object.assign({}, state, {
                cart: [...action.payload]
            });
        case CONFIRM_PURCHASE:
            return Object.assign({}, state, {
                cart: action.payload.cart,
                inventory: [...action.payload.inventory]
            });
        default: return state;
    }

};