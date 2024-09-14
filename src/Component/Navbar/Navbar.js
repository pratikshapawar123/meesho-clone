import { useRef, useState } from 'react';
import './Navbar.css'

function Navbar() {
   


    return (
        <>
            <div className="nav">
                <div className="logo">
                    <h1>meesho</h1>
                </div>
                <div className="input">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Try Saree,Kurti or Search by Product Code" />
                </div>
                
                <div className="nav-link">
                    <i class="fa-solid fa-mobile"></i>
                    <p>Download App</p>
                </div>
                <hr />
                <div className="nav-link">
                    <p>Become a Supplier</p>
                </div>
                <hr id='hr' />
                <div className="nav-link">
                    <p>Newsroom</p>
                </div>
                <hr id='hr' />
                <div className="nav-profile">
                    <i class="fa-solid fa-user"></i>
                    <p>Profile</p>
                </div>
                <div className="nav-profile">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p>Cart</p>
                </div>
            </div>
            <hr  id='spl-hr'/>
            <div className='nav-below'>
                <ul>
                    <li >Women Ethenic</li>
                     <li  >Women Western</li>
                    
                    <li>Men</li>
                    <li>Kids</li>
                    <li>Home & Kitchen</li>
                    <li>Beauty & Health</li>
                    <li>Jewellary & Accessories</li>
                    <li>Bags & Footwear</li>
                    <li>Electronics</li>
                </ul>
                <hr  id='spl-hr'/>
            </div>
            
                        
                    

            
        
                
                   
            


        </>
    )
}
export default Navbar;