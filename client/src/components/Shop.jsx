import '../style/shop.css'
import image from '../assets/image.png'
import { useEffect } from 'react';
import { items } from './items';
import { useState } from 'react';
import Fbox from './Fbox';

function Shop(){

    const [itemList, setItemList] = useState(items)

    return(
        <>
        <div className="wrapper" id= "Shop">
            <div className="shop-menu">
                <span className='topBar' ></span>
                <h1>NEW COLLECTION</h1>
            </div>
            <div className="shop-main">
                <div className="shop-main-text">
                    <h3>NIKE</h3>
                    <p>New Collection</p>
                    <h5>Buy Now</h5>   
                </div>
                <img src={image} alt="" />
            </div>

            <div className="items-wrapper">
                {itemList.map((i,index)=> <Fbox image={i.colors.img} name={i.title} price={i.price} id={i.id}  /> )}
            </div>
        </div>
        </>
    )
}

export default Shop;