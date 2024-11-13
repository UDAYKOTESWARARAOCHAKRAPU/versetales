import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Home() {
    return (
        <>
            <Navbar/>
            <div className="home-mian">
                <center>
                    <h1 style={{ fontSize: '19em'}}>Home</h1>
                </center>
            </div>
            <Footer/>
        </>
    )
}

export default Home