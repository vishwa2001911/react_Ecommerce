import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import '../style/fbox.css'


function Fbox({image, price, id, name, sale}){


    const docRef = collection(db,'testCollection')
    const addToCart = async () => {
        //console.log({id,name,image,price})
        const data = await getDocs(docRef)
        const filterData = await data.docs.map(i=>i.data())
        console.log(filterData)
    }


    return(
        <>
        <div className="f-box">
            <h5 className='sale-tag'>S A L E</h5>
            <img 
            src={image} 
            alt="" 
            />
            <h1>{name}</h1>
            <h5>$ {price}</h5>
            <h6 onClick={addToCart}>ADD TO CART </h6>

            <h4 className="sale-price">50%</h4>
        </div>
        </>
    )
}


export default Fbox;