import './Main.css';
function Main() {
    return (
        <>
            <div className="main">
                <div className='main-heading'>
                    <h1>Lowest Prices <br /> Best  Quality Shopping</h1>
                    <div className='about-main-delivery'>
                        <div>
                            <i class="fa-solid fa-truck"></i>
                            <p>Free Delivery</p>
                        </div>
                        <hr />
                        <div>
                            <i class="fa-solid fa-cash-register"></i>
                            <p>Cash on Delivery</p>
                        </div>
                        <hr />
                        <div>
                            <i class="fa-solid fa-briefcase"></i>
                            <p>Easy Returns</p>
                        </div>
                    </div>
                    <button><i class="fa-brands fa-google-play"></i>Download The Meesho App</button>
                </div>
                <div className='main-img'>
                    <img src='/Assets/main.webp' alt='' />
                </div>
            </div>
            <div className='category'>
                <div className='cat-heading'>

                    <h1>Top Categories to choose from</h1>
                    <div className='cat-img'>
                        <div className='cat-women-img'>
                            <img src='/Assets/img5.webp' alt='' />
                        </div>
                        <div className='cat-men-img'>
                            <img src='/Assets/img2.webp' alt='' />
                        </div>
                        <div className='cat-kid-img'>
                            <img src='/Assets/img3.webp' alt='' />
                        </div>

                    </div>

                </div>
            </div>
            <div className='essential'>
                <div className='view-img'>
                    <img src='/Assets/view_all.webp' alt="" />

                </div>
                <div>
                    <div className='decor'>
                        <img src="/Assets/home_decor.webp" alt="" />

                    </div>
                    <div className='decor'>
                        <img src="/Assets/kitchen_appliance.webp" alt="" />
                    </div>
                    <div className='decor'>
                        <img src="/Assets/img1.webp" alt="" />
                    </div>
                </div>

            </div>
            <div className='advertise'>
                <div className='adv-heading'>
                    <h3>Become a Reseller and</h3>
                    <h1>Start your Online Business<br />
                        with Zero Investment</h1>
                    <div className='adv-button'>
                        <div className='app'>
                            <i class="fa-brands fa-google-play"></i>
                            <div>
                                <p>Get it on</p>
                                <h6>Google Play</h6>
                            </div>
                        </div>
                        <div className='app'>
                            <i class="fa-brands fa-apple"></i>
                            <div >
                                <p>Available on the</p>
                                <h6>App Store</h6></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main;