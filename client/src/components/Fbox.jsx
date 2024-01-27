import '../style/fbox.css'


function Fbox({image, price, id, name}){

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
            <h6>ADD TO CART</h6>
        </div>
        </>
    )
}


export default Fbox;