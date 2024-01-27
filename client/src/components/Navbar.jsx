import { useEffect, useState } from 'react';
import '../style/navbar.css'

function Navbar({changeSection}){

    const [isNavClicked, setIsNavClicked] = useState(false)


    const navItems = [
        {
            itemName:"HOME",
            link:"home",
            id:0
        },
        {
            itemName:"FEATURED",
            link:"#featured",
            id:9
        },
        {
            itemName:"SHOP",
            link:"shop",
            id:1
        },
        {
            itemName:"SALE",
            link:"sale",
            id:2
        },
        {
            itemName:"LOGIN",
            link:"login",
            id:3
        },
    ]





    return(
        <>
        <nav>
            <h1 className="logo">
                E-Mart
            </h1>

            <div className="nav-icons">
                <ul className="nav-list">

                { navItems.map((item,index)=> (
                    <div className="nav-items">
                        <a 
                            href={item.link} 
                            key={index} 
                            onClick={(e) => {
                                setIsNavClicked(false)   
                                return changeSection(e,item.id)
                            }} 
                            >{item.itemName}</a>
                    </div>
                    ))
                }
  
                </ul>

                <span 
                class="material-symbols-outlined menu"
                onClick={()=>setIsNavClicked(!isNavClicked)}
                >menu</span>

                <a 
                class="material-symbols-outlined" 
                style={{textDecoration:"none",color:"#212F3C"}} 
                onClick={(e) => changeSection(e,4)} 
                href="#cart">local_mall</a>
            </div>
        </nav>

        <div className="r-nav" style={
            {
                left: isNavClicked ? '0px' : '-300px'
            }
            }>
            { navItems.map((item,index)=> (
                
                <a
                className='r-nav-item' 
                href={item.link} 
                key={index} 
                onClick={(e) => {
                    setIsNavClicked(false)   
                    return changeSection(e,item.id)
                }} 
                >{item.itemName}
                </a>
        
            ))
            }

            <h1>E-Mart</h1>
        </div>
        </>
    )
}


export default Navbar;