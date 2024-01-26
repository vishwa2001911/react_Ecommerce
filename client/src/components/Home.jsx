import '../style/home.css'

function Home(){

    return(
        <>
        <div className="wrapper" id="home">
            <main>
                <div className="m-box m-box1">
                    <div className="m-box-text">     
                        <h2>NEW IN</h2>
                        <h1>NIKE BOOST</h1>
                        <h1>AIR 360</h1>
                        <h5>EXPLORE THE NEW COLLECTION OF SNEAKERS</h5>
                    </div>
                    <a href="#sale" onClick={(e)=>e.preventDefault()}>EXPLORE MORE</a>
                </div>
                <div className="m-box m-box2">
                    <div className="circle"></div>
                    <img
                    className='air-img' 
                    src="https://github.com/vishwa2001911/NeoStore/blob/main/img/blazer2.png?raw=true" 
                    alt="air" />
                </div>
            </main>
        </div>
        </>
    )
}

export default Home;
