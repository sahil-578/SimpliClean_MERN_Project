/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
// import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let index = 0 ; index < 300+1 ; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    
    const [all_product, setAll_Product] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/api/products/allproducts')
        .then((response) => response.json()).then((data) => setAll_Product(data))

        if(localStorage.getItem('auth-token'))
        {
            fetch('http://localhost:4000/api/users/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'Content-Type' : 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                },
                body: '',
            })
            .then((response) => response.json())
            .then((data) => setCartItems(data))
        }

    }, [])

    const [cartItems, setCartItems] = useState(getDefaultCart());
    

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId]+1}))
        // console.log(cartItems);

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/api/users/addtocart', {
                method: 'POST',
                headers: {
                    Accept : 'application/form-data',
                    'auth-token' : `${localStorage.getItem('auth-token')}`,
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({"itemId" : itemId}),
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
        }

    }

    const deleteFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId]-1}))

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/api/users/deletefromcart', {
                method: 'POST',
                headers: {
                    Accept : 'application/form-data',
                    'auth-token' : `${localStorage.getItem( 'auth-token' )}`,
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({"itemId" : itemId}),
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
        }
    }

    const getTotalCartAmt = () => {
        let totalAmt = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmt += itemInfo.new_price * cartItems[item];
            }
        
        }
        return  totalAmt;
    }    

    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0)
            {
                totalItem+= cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {getTotalCartAmt, all_product, cartItems, addToCart, deleteFromCart, getTotalCartItems};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;