export const CART_LIST = "CART_LIST";

export const getCartList = (payload) => {
    return {
        type: CART_LIST,
        payload
    }
} 