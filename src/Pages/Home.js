import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import img from '../Images/story-book-500x500.webp';

import audio1 from '../Assets/audio1.mp3'
import audio2 from '../Assets/audio2.mp3'
import audio3 from '../Assets/audio3.mp3'

import '../Css/Home.css';

function Home() {
    const categories = ['Adventure', 'Fairy Tales', 'Animals', 'Magic', 'Science Fiction'];
    const featuredStories = [
        {
            image: img,
            name: 'The Brave Explorer',
            des: 'A young adventurer sets out on a quest...',
            author: 'John Doe',
            type: 'Adventure',
            audio: audio1,
            audioDuration: '3:45'
        },
        {
            image: img,
            name: 'Magic in the Forest',
            des: 'A girl discovers a hidden world...',
            author: 'Emma Stone',
            type: 'Fairy Tales',
            audio: audio2,
            audioDuration: '4:20'
        },
        {
            image: img,
            name: 'The Lost Treasure',
            des: 'A group of friends embarks on an adventure...',
            author: 'Alex Carter',
            type: 'Magic',
            audio: audio3,
            audioDuration: '5:10'
        },
        {
            image: img,
            name: 'The Brave Explorer',
            des: 'A young adventurer sets out on a quest...',
            author: 'John Doe',
            type: 'Adventure',
            audio: audio1,
            audioDuration: '3:45'
        },
        {
            image: img,
            name: 'Magic in the Forest',
            des: 'A girl discovers a hidden world...',
            author: 'Emma Stone',
            type: 'Science Fiction',
            audio: audio2,
            audioDuration: '4:20'
        },
        {
            image: img,
            name: 'The Lost Treasure',
            des: 'A group of friends embarks on an adventure...',
            author: 'Alex Carter',
            type: 'Magic',
            audio: audio3,
            audioDuration: '5:10'
        },
        {
            image: img,
            name: 'The Brave Explorer',
            des: 'A young adventurer sets out on a quest...',
            author: 'John Doe',
            type: 'Adventure',
            audio: audio1,
            audioDuration: '3:45'
        },
        {
            image: img,
            name: 'Magic in the Forest',
            des: 'A girl discovers a hidden world...',
            author: 'Emma Stone',
            type: 'Science Fiction',
            audio: audio2,
            audioDuration: '4:20'
        },
        {
            image: img,
            name: 'The Lost Treasure',
            des: 'A group of friends embarks on an adventure...',
            author: 'Alex Carter',
            type: 'Magic',
            audio: audio3,
            audioDuration: '5:10'
        },
        {
            image: img,
            name: 'The Brave Explorer',
            des: 'A young adventurer sets out on a quest...',
            author: 'John Doe',
            type: 'Adventure',
            audio: audio1,
            audioDuration: '3:45'
        },
        {
            image: img,
            name: 'Magic in the Forest',
            des: 'A girl discovers a hidden world...',
            author: 'Emma Stone',
            type: 'Science Fiction',
            audio: audio2,
            audioDuration: '4:20'
        },
        {
            image: img,
            name: 'The Lost Treasure',
            des: 'A group of friends embarks on an adventure...',
            author: 'Alex Carter',
            type: 'Magic',
            audio: audio3,
            audioDuration: '5:10'
        },
        {
            image: img,
            name: 'The Brave Explorer',
            des: 'A young adventurer sets out on a quest...',
            author: 'John Doe',
            type: 'Adventure',
            audio: audio1,
            audioDuration: '3:45'
        },
        {
            image: img,
            name: 'Magic in the Forest',
            des: 'A girl discovers a hidden world...',
            author: 'Emma Stone',
            type: 'Science Fiction',
            audio: audio2,
            audioDuration: '4:20'
        },
        {
            image: img,
            name: 'The Lost Treasure',
            des: 'A group of friends embarks on an adventure...',
            author: 'Alex Carter',
            type: 'Magic',
            audio: audio3,
            audioDuration: '5:10'
        },
    ];

    const newStories = [
        {
            image: img,
            name: 'The Mysterious Island',
            des: 'A shipwrecked boy discovers an island...',
            author: 'Mark Twain',
            type: 'Adventure',
            audio: audio1,
            audioDuration: '3:30'
        },
        {
            image: img,
            name: 'The Secret Garden',
            des: 'A lonely girl finds a magical garden...',
            author: 'Frances Hodgson Burnett',
            type: 'Drama',
            audio: audio2,
            audioDuration: '4:05'
        },
        {
            image: img,
            name: 'The Hidden Cave',
            des: 'Two explorers stumble upon a cave...',
            author: 'Liam Johnson',
            type: 'Magic',
            audio: audio3,
            audioDuration: '5:00'
        },
        {
            image: img,
            name: 'The Mysterious Island',
            des: 'A shipwrecked boy discovers an island...',
            author: 'Mark Twain',
            type: 'Adventure',
            audio: audio1,
            audioDuration: '3:30'
        },
        {
            image: img,
            name: 'The Secret Garden',
            des: 'A lonely girl finds a magical garden...',
            author: 'Frances Hodgson Burnett',
            type: 'Drama',
            audio: audio2,
            audioDuration: '4:05'
        },
        {
            image: img,
            name: 'The Hidden Cave',
            des: 'Two explorers stumble upon a cave...',
            author: 'Liam Johnson',
            type: 'Magic',
            audio: audio3,
            audioDuration: '5:00'
        },
        {
            image: img,
            name: 'The Mysterious Island',
            des: 'A shipwrecked boy discovers an island...',
            author: 'Mark Twain',
            type: 'Adventure',
            audio: audio1,
            audioDuration: '3:30'
        },
        {
            image: img,
            name: 'The Secret Garden',
            des: 'A lonely girl finds a magical garden...',
            author: 'Frances Hodgson Burnett',
            type: 'Drama',
            audio: audio2,
            audioDuration: '4:05'
        },
        {
            image: img,
            name: 'The Hidden Cave',
            des: 'Two explorers stumble upon a cave...',
            author: 'Liam Johnson',
            type: 'Magic',
            audio: audio3,
            audioDuration: '5:00'
        },
        {
            image: img,
            name: 'The Mysterious Island',
            des: 'A shipwrecked boy discovers an island...',
            author: 'Mark Twain',
            type: 'Adventure',
            audio: audio1,
            audioDuration: '3:30'
        },
        {
            image: img,
            name: 'The Secret Garden',
            des: 'A lonely girl finds a magical garden...',
            author: 'Frances Hodgson Burnett',
            type: 'Drama',
            audio: audio2,
            audioDuration: '4:05'
        },
        {
            image: img,
            name: 'The Hidden Cave',
            des: 'Two explorers stumble upon a cave...',
            author: 'Liam Johnson',
            type: 'Magic',
            audio: audio3,
            audioDuration: '5:00'
        },
        {
            image: img,
            name: 'The Mysterious Island',
            des: 'A shipwrecked boy discovers an island...',
            author: 'Mark Twain',
            type: 'Adventure',
            audio: audio1,
            audioDuration: '3:30'
        },
        {
            image: img,
            name: 'The Secret Garden',
            des: 'A lonely girl finds a magical garden...',
            author: 'Frances Hodgson Burnett',
            type: 'Drama',
            audio: audio2,
            audioDuration: '4:05'
        },
        {
            image: img,
            name: 'The Hidden Cave',
            des: 'Two explorers stumble upon a cave...',
            author: 'Liam Johnson',
            type: 'Magic',
            audio: audio3,
            audioDuration: '5:00'
        },
        {
            image: img,
            name: 'The Mysterious Island',
            des: 'A shipwrecked boy discovers an island...',
            author: 'Mark Twain',
            type: 'Adventure',
            audio: audio1,
            audioDuration: '3:30'
        },
        {
            image: img,
            name: 'The Secret Garden',
            des: 'A lonely girl finds a magical garden...',
            author: 'Frances Hodgson Burnett',
            type: 'Drama',
            audio: audio2,
            audioDuration: '4:05'
        },
        {
            image: img,
            name: 'The Hidden Cave',
            des: 'Two explorers stumble upon a cave...',
            author: 'Liam Johnson',
            type: 'Magic',
            audio: audio3,
            audioDuration: '5:00'
        },
        {
            image: img,
            name: 'The Mysterious Island',
            des: 'A shipwrecked boy discovers an island...',
            author: 'Mark Twain',
            type: 'Adventure',
            audio: audio1,
            audioDuration: '3:30'
        },
        {
            image: img,
            name: 'The Secret Garden',
            des: 'A lonely girl finds a magical garden...',
            author: 'Frances Hodgson Burnett',
            type: 'Drama',
            audio: audio2,
            audioDuration: '4:05'
        },
        {
            image: img,
            name: 'The Hidden Cave',
            des: 'Two explorers stumble upon a cave...',
            author: 'Liam Johnson',
            type: 'Magic',
            audio: audio3,
            audioDuration: '5:00'
        },
        {
            image: img,
            name: 'The Mysterious Island',
            des: 'A shipwrecked boy discovers an island...',
            author: 'Mark Twain',
            type: 'Adventure',
            audio: audio1,
            audioDuration: '3:30'
        },
        {
            image: img,
            name: 'The Secret Garden',
            des: 'A lonely girl finds a magical garden...',
            author: 'Frances Hodgson Burnett',
            type: 'Drama',
            audio: audio2,
            audioDuration: '4:05'
        },
        {
            image: img,
            name: 'The Hidden Cave',
            des: 'Two explorers stumble upon a cave...',
            author: 'Liam Johnson',
            type: 'Magic',
            audio: audio3,
            audioDuration: '5:00'
        },
    ];


    return (
        <>
            <Navbar />
            <div className="home-main">
                {/* Featured Stories Section */}
                <div className="featured-stories-section">
                    <div className="flex" >
                        <h2>Featured Stories</h2>
                        <Link to="/cat-stories?category=Featured">
                            <div className="more-stories-button">More <KeyboardArrowRightIcon /> </div>
                        </Link>
                    </div>
                    <div className="scroll-container">
                        {featuredStories.slice(0, 7).map((story, index) => (
                            <Link
                                to="/story"
                                state={{ story }}
                            >
                                <div key={index} className="story-card">
                                    <img src={story.image} alt={story.name} />
                                    <p>{story.name}</p>
                                </div>
                            </Link>


                        ))}
                    </div>
                </div>

                {/* Categories Section */}
                <div className="categories-section">
                    <div className="flex"><h2>Categories</h2></div>
                    <div className="category-bubbles">
                        {categories.map((category, index) => (
                            <Link key={index} to={`/cat-stories?category=${category}`}>
                                <div className="category-bubble">{category}</div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* New Stories Section */}
                <div className="new-stories-section">
                    <div className="flex">
                        <h2>New Stories</h2>
                        <Link to="/cat-stories?category=New">
                            <div className="more-stories-button">More <KeyboardArrowRightIcon /> </div>
                        </Link>
                    </div>
                    <div className="scroll-container">
                        {newStories.slice(0, 7).map((story, index) => (
                            <Link to='/story'
                                state={{ story }}
                            >
                                <div key={index} className="story-card">
                                    <img src={story.image} alt={story.name} />
                                    <p>{story.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
