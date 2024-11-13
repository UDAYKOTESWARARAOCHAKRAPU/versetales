import React from 'react';
import '../Css/About.css';
import Card from './Card';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
    return (
            <>
                <Navbar/>
                <section className="about-us">
                    <div className="about-us-content">
                        <h2>About VerseTales</h2>
                        <p>
                            Welcome to <strong><span style={{ color: '#051b3a' }}>Verse</span><span style={{ color: '#92b1e8' }}>Tales</span></strong>, a world where stories come alive! At VerseTales, we believe in the magic of storytelling and the thrill of choice. Our platform lets you dive into interactive stories where you decide the path, exploring countless adventures and outcomes. 
                        </p>
                        <p>
                            Whether you're here to create your own story or immerse yourself in others' tales, VerseTales offers a unique, engaging experience. With each story, you can choose different paths, leading to endless possibilities. Adding animations and sound effects, we strive to bring your storytelling journey to life like never before.
                        </p>
                        <p>
                            Join us on VerseTales to explore, create, and shape your own adventure.
                        </p>
                    </div>
                    <div className="card-comp">
                        <Card/>
                    </div>
                </section>
                <Footer/>
            </>
        );
    };

export default AboutUs;
