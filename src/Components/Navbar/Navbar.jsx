/* eslint-disable no-unused-vars */
import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import shopping_cart from '../Assets/shopping_cart.png'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Contexts/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

function Navbar() {

    const [menu, setMenu] = useState('shop');
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef()

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
        </div>

        <img src={nav_dropdown} onClick={dropdown_toggle} alt="" />

        <ul className='nav-menu' ref={menuRef}>
            <li onClick={() => {setMenu('shop')}}><Link style={{textDecoration : 'none', color : '#626262'}} to='/'>Shop </Link> {menu === 'shop' ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu('brooms')}}><Link style={{textDecoration : 'none', color : '#626262'}} to='/brooms'>Brooms </Link>{menu === 'brooms' ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu('wipers')}}><Link style={{textDecoration : 'none', color : '#626262'}} to='/wipers'>Wipers </Link> {menu === 'wipers' ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu('scrubbers')}}><Link style={{textDecoration : 'none', color : '#626262'}} to='/scrubbers'>Scrubbers </Link> {menu === 'scrubbers' ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu('about')}}><Link style={{textDecoration : 'none', color : '#626262'}} to='/about'>About </Link> {menu === 'about' ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu('contact')}}><Link style={{textDecoration : 'none', color : '#626262'}} to='/contact'>Contact </Link> {menu === 'contact' ? <hr /> : <></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'>
                <button>Login</button>
            </Link>
            <Link to='/cart'>
                <img src={shopping_cart} alt="" />
            </Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar