import { createContext, useReducer, useContext, useEffect } from "react";
import { SET_CART } from "../types/actions";
import commerce from '../lib/commerce'

const cartStateContext = createContext()
const cartDispatchContext = createContext()


const initialState = {
    total_item: 0,
    total_unique_item: 0,
    line_items: []
}

const reducer = (state, action) => {
    switch(action.type){
        case SET_CART:
            return {
                ...state,
                ...action.payload
            }

        default:
            throw new Error(`Unknown action: ${action.type}`)
    }
}


export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
      getCart();
    }, []);
    

    const setCart = (payload) => dispatch({ type: SET_CART, payload: payload })
    const getCart = async () => {
        try {
            const cart = await commerce.cart.retrieve()
            setCart(cart)
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <cartDispatchContext.Provider value={{setCart}}>
            <cartStateContext.Provider value={state}>
                {children}
            </cartStateContext.Provider>
        </cartDispatchContext.Provider>
    )
}

export const useCartState = () => useContext(cartStateContext)
export const useCartDispatch = () => useContext(cartDispatchContext)   