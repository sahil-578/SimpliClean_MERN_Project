import React from 'react'
import './CartItems.css'
import { useContext } from 'react'
import { ShopContext } from '../../Contexts/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmt, all_product, cartItems, deleteFromCart} = useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        
        {all_product.map((e) => {
            if(cartItems[e.id]>0)
            {
                return <div>
                            <div className="cartitems-format cartitems-format-main">
                                <img className="carticon-product-icon" src={e.image} alt="" />
                                <p>{e.name}</p>
                                <p>Rs.{e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>Rs.{e.new_price*cartItems[e.id]}</p>
                                <img onClick={() => {deleteFromCart(e.id)}} src={remove_icon} className='cartitems-remove-icon' alt="" />
                            </div>
                            <hr />
                        </div>
                   
            }
            return null;
        })}

        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>Rs.{getTotalCartAmt()}</p>
                    </div>
                    <hr />

                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />

                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>Rs.{getTotalCartAmt()}</h3>    
                    </div>                    
                </div>

                <button>PROCEED TO CHECKOUT</button>

            </div>

            <div className="cartitems-promocode">
                <p>If you have a promocode , Enter here</p>

                <div className="cartitems-promobox">
                    <input type="text" placeholder='Promo Code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CartItems