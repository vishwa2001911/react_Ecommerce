
import { useState } from 'react';
import '../style/cart.css'
import CheckOut from './CheckOut';

function Cart(){

    const [checkout, setCheckout] = useState(false)


    const click = (val) =>{

    }


    return(
        <>
        <div className="wrapper cart" >
            <div className="shop-menu">
                <span className='topBar' ></span>
                <h1>Shopping Cart</h1>
            </div>

            <div className="cart-wrapper">
                <h1>Cart</h1>
                <div className="cart-box-wrapper">
                    <table>
                        <tr>
                            <th>PRODUCT</th>
                            <th>PRODUCT</th>
                            <th>PRODUCT</th>
                            <th>PRODUCT</th>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://raw.githubusercontent.com/vishwa2001911/NeoStore/main/img/blazer.png" width="100px" alt="" />
                            </td>
                            <td>
                                scscsc
                            </td>
                            <td>
                                sccs
                            </td>
                            <td>
                                csccsc
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://raw.githubusercontent.com/vishwa2001911/NeoStore/main/img/blazer.png" width="100px" alt="" />
                            </td>
                            <td>
                                scscsc
                            </td>
                            <td>
                                sccs
                            </td>
                            <td>
                                csccsc
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://raw.githubusercontent.com/vishwa2001911/NeoStore/main/img/blazer.png" width="100px" alt="" />
                            </td>
                            <td>
                                scscsc
                            </td>
                            <td>
                                sccs
                            </td>
                            <td>
                                csccsc
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://raw.githubusercontent.com/vishwa2001911/NeoStore/main/img/blazer.png" width="100px" alt="" />
                            </td>
                            <td>
                                scscsc
                            </td>
                            <td>
                                sccs
                            </td>
                            <td>
                                csccsc
                            </td>
                        </tr>
                    </table>
                    <div className="cart-box">
                            <h5>CART TOTLE :- {"200"} Rs</h5>
                            <p>Shopping & Taxes Calculate at Checkout.</p>
                            <label> <input type="checkbox"/> I agree to <strong>terms & Conditions</strong> </label>
                            <button onClick={()=>setCheckout(true)} >CHECKOUT</button>
                    </div>



                </div>



            </div>
                
                
                <CheckOut clickCheckout={checkout} setCheckout={setCheckout}    />

        </div>
        </>
    )
}
//<CheckOut clickCheckout={checkout} clickClose={setCheckout}    />

export default Cart;