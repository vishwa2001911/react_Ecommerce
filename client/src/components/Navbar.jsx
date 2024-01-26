import '../style/navbar.css'

function Navbar({changeSection}){


    const navItems = [
        {
            itemName:"HOME",
            link:"home"
        },
        {
            itemName:"SHOP",
            link:"shop"
        },
        {
            itemName:"SALE",
            link:"sale"
        },
        {
            itemName:"LOGIN",
            link:"login"
        },
    ]





    return(
        <>
        <nav>
            <h1 className="logo">
                E-Marlt
            </h1>

            <div className="nav-icons">
                <ul className="nav-list">

                { navItems.map((item,index)=> (
                    <div className="nav-items">
                        <a 
                            href={item.link} 
                            key={index} 
                            onClick={(e) => changeSection(e,index)} 
                            >{item.itemName}</a>
                    </div>
                    )
                )}
  
                </ul>

                <span class="material-symbols-outlined menu">menu</span>
                <a 
                class="material-symbols-outlined" 
                style={{textDecoration:"none",color:"#212F3C"}} 
                onClick={(e) => changeSection(e,4)} 
                href="#cart">local_mall</a>
            </div>
        </nav>
        </>
    )
}


export default Navbar;