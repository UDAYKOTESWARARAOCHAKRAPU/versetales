import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import img from '../Images/story-book-500x500.webp';
import '../Css/Home.css';

function Home() {
    const featuredStories = [
        { image: img, name: 'The Brave Explorer' },
        { image: img, name: 'Magic in the Forest' },
        { image: img, name: 'The Lost Treasure' },
        { image: img, name: 'The Little Robot' },
        { image: img, name: 'Adventures in Space' },
        { image: img, name: 'The Kind Princess' },
        { image: img, name: 'The Talking Animals' },
        { image: img, name: 'A Journey to the Stars' },
        { image: img, name: 'The Clever Detective' },
        { image: img, name: 'The Magical Carousel' },
    ];

    const newStories = [
        { image: img, name: 'The Mysterious Island' },
        { image: img, name: 'The Secret Garden' },
        { image: img, name: 'The Hidden Cave' },
        { image: img, name: 'The Friendly Dragon' },
        { image: img, name: 'Underwater Adventure' },
        { image: img, name: 'The Night Circus' },
        { image: img, name: 'The Enchanted Clock' },
        { image: img, name: 'The Brave Knight' },
        { image: img, name: 'The Whimsical Witch' },
        { image: img, name: 'The Snowy Mountain' },
    ];

    return (
        <>
            <Navbar />
            <div className="home-main">
                {/* Featured Stories Section */}
                <div className="featured-stories-section">
                    <div className="flex" >
                        <h2>Featured Stories</h2>
                        <Link to="/cat-stories?category=Featured Stories">
                            <div className="more-stories-button">More <KeyboardArrowRightIcon/> </div>
                        </Link>
                    </div>
                    <div className="scroll-container">
                        {featuredStories.slice(0, 7).map((story, index) => (
                            <div key={index} className="story-card">
                                <img src={story.image} alt={story.name} />
                                <p>{story.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Categories Section */}
                <div className="categories-section">
                    <h2>Categories</h2>
                    <div className="category-bubbles">
                        <Link to="/cat-stories?category=Adventure">
                            <div className="category-bubble">Adventure</div>
                        </Link>
                        <Link to="/cat-stories?category=Fairy Tales">
                            <div className="category-bubble">Fairy Tales</div>
                        </Link>
                        <Link to="/cat-stories?category=Animals">
                            <div className="category-bubble">Animals</div>
                        </Link>
                        <Link to="/cat-stories?category=Magic">
                            <div className="category-bubble">Magic</div>
                        </Link>
                        <Link to="/cat-stories?category=Science Fiction">
                            <div className="category-bubble">Science Fiction</div>
                        </Link>
                    </div>
                </div>

                {/* New Stories Section */}
                <div className="new-stories-section">
                    <div className="flex">
                        <h2>New Stories</h2>
                        <Link to="/cat-stories?category=Featured Stories">
                            <div className="more-stories-button">More <KeyboardArrowRightIcon/> </div>
                        </Link>
                    </div>
                    <div className="scroll-container">
                        {newStories.slice(0, 7).map((story, index) => (
                            <div key={index} className="story-card">
                                <img src={story.image} alt={story.name} />
                                <p>{story.name}</p>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
