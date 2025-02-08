import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Css/CatStories.css';
import audio1 from '../Assets/audio1.mp3'
import audio2 from '../Assets/audio2.mp3'
import audio3 from '../Assets/audio3.mp3'
import img from '../Images/story-book-500x500.webp';

const allStories = [
    // Featured Stories
    {
        image: img,
        name: 'The Mysterious Island',
        des: 'A shipwrecked boy discovers an island...',
        category: 'Featured',
        author: 'Mark Twain',
        type: 'Adventure',
        audio: audio1,
        audioDuration: '3:30'
    },
    {
        image: img,
        name: 'The Secret Garden',
        des: 'A lonely girl finds a magical garden...',
        category: 'Featured',
        author: 'Frances Hodgson Burnett',
        type: 'Drama',
        audio: audio2,
        audioDuration: '4:05'
    },
    {
        image: img,
        name: 'The Hidden Cave',
        des: 'Two explorers stumble upon a cave...',
        category: 'Featured',
        author: 'Liam Johnson',
        type: 'Magic',
        audio: audio3,
        audioDuration: '5:00'
    },
    {
        image: img,
        name: 'The Mysterious Island',
        des: 'A shipwrecked boy discovers an island...',
        category: 'Featured',
        author: 'Mark Twain',
        type: 'Adventure',
        audio: audio1,
        audioDuration: '3:30'
    },
    {
        image: img,
        name: 'The Secret Garden',
        des: 'A lonely girl finds a magical garden...',
        category: 'Featured',
        author: 'Frances Hodgson Burnett',
        type: 'Drama',
        audio: audio2,
        audioDuration: '4:05'
    },
    {
        image: img,
        name: 'The Hidden Cave',
        des: 'Two explorers stumble upon a cave...',
        category: 'New',
        author: 'Liam Johnson',
        type: 'Magic',
        audio: audio3,
        audioDuration: '5:00'
    },
    {
        image: img,
        name: 'The Mysterious Island',
        des: 'A shipwrecked boy discovers an island...',
        category: 'Featured',
        author: 'Mark Twain',
        type: 'Adventure',
        audio: audio1,
        audioDuration: '3:30'
    },

    // New Stories
    {
        image: img,
        name: 'The Mysterious Island',
        des: 'A shipwrecked boy discovers an island...',
        category: 'New',
        author: 'Mark Twain',
        type: 'Adventure',
        audio: audio1,
        audioDuration: '3:30'
    },
    {
        image: img,
        name: 'The Secret Garden',
        des: 'A lonely girl finds a magical garden...',
        category: 'New',
        author: 'Frances Hodgson Burnett',
        type: 'Drama',
        audio: audio2,
        audioDuration: '4:05'
    },
    {
        image: img,
        name: 'The Hidden Cave',
        des: 'Two explorers stumble upon a cave...',
        category: 'New',
        author: 'Liam Johnson',
        type: 'Magic',
        audio: audio3,
        audioDuration: '5:00'
    },
    {
        image: img,
        name: 'The Mysterious Island',
        des: 'A shipwrecked boy discovers an island...',
        category: 'New',
        author: 'Mark Twain',
        type: 'Adventure',
        audio: audio1,
        audioDuration: '3:30'
    },
    {
        image: img,
        name: 'The Secret Garden',
        des: 'A lonely girl finds a magical garden...',
        category: 'New',
        author: 'Frances Hodgson Burnett',
        type: 'Drama',
        audio: audio2,
        audioDuration: '4:05'
    },
    {
        image: img,
        name: 'The Hidden Cave',
        des: 'Two explorers stumble upon a cave...',
        category: 'New',
        author: 'Liam Johnson',
        type: 'Magic',
        audio: audio3,
        audioDuration: '5:00'
    },
    {
        image: img,
        name: 'The Mysterious Island',
        des: 'A shipwrecked boy discovers an island...',
        category: 'New',
        author: 'Mark Twain',
        type: 'Adventure',
        audio: audio1,
        audioDuration: '3:30'
    },
    {
        image: img,
        name: 'The Secret Garden',
        des: 'A lonely girl finds a magical garden...',
        category: 'New',
        author: 'Frances Hodgson Burnett',
        type: 'Drama',
        audio: audio2,
        audioDuration: '4:05'
    },
    {
        image: img,
        name: 'The Hidden Cave',
        des: 'Two explorers stumble upon a cave...',
        category: 'New',
        author: 'Liam Johnson',
        type: 'Magic',
        audio: audio3,
        audioDuration: '5:00'
    },
    {
        image: img,
        name: 'The Mysterious Island',
        des: 'A shipwrecked boy discovers an island...',
        category: 'New',
        author: 'Mark Twain',
        type: 'Adventure',
        audio: audio1,
        audioDuration: '3:30'
    },
    {
        image: img,
        name: 'The Secret Garden',
        des: 'A lonely girl finds a magical garden...',
        category: 'New',
        author: 'Frances Hodgson Burnett',
        type: 'Drama',
        audio: audio2,
        audioDuration: '4:05'
    },
    {
        image: img,
        name: 'The Hidden Cave',
        des: 'Two explorers stumble upon a cave...',
        category: 'New',
        author: 'Liam Johnson',
        type: 'Magic',
        audio: audio3,
        audioDuration: '5:00'
    },
    {
        image: img,
        name: 'The Mysterious Island',
        des: 'A shipwrecked boy discovers an island...',
        category: 'New',
        author: 'Mark Twain',
        type: 'Adventure',
        audio: audio1,
        audioDuration: '3:30'
    },
    {
        image: img,
        name: 'The Secret Garden',
        des: 'A lonely girl finds a magical garden...',
        category: 'New',
        author: 'Frances Hodgson Burnett',
        type: 'Drama',
        audio: audio2,
        audioDuration: '4:05'
    },
    {
        image: img,
        name: 'The Hidden Cave',
        des: 'Two explorers stumble upon a cave...',
        category: 'New',
        author: 'Liam Johnson',
        type: 'Magic',
        audio: audio3,
        audioDuration: '5:00'
    },
    {
        image: img,
        name: 'The Mysterious Island',
        des: 'A shipwrecked boy discovers an island...',
        category: 'New',
        author: 'Mark Twain',
        type: 'Adventure',
        audio: audio1,
        audioDuration: '3:30'
    },
    {
        image: img,
        name: 'The Secret Garden',
        des: 'A lonely girl finds a magical garden...',
        category: 'New',
        author: 'Frances Hodgson Burnett',
        type: 'Drama',
        audio: audio2,
        audioDuration: '4:05'
    },
    {
        image: img,
        name: 'The Hidden Cave',
        des: 'Two explorers stumble upon a cave...',
        category: 'New',
        author: 'Liam Johnson',
        type: 'Magic',
        audio: audio3,
        audioDuration: '5:00'
    },
    {
        image: img,
        name: 'The Mysterious Island',
        des: 'A shipwrecked boy discovers an island...',
        category: 'New',
        author: 'Mark Twain',
        type: 'Adventure',
        audio: audio1,
        audioDuration: '3:30'
    },
    {
        image: img,
        name: 'The Secret Garden',
        des: 'A lonely girl finds a magical garden...',
        category: 'New',
        author: 'Frances Hodgson Burnett',
        type: 'Drama',
        audio: audio2,
        audioDuration: '4:05'
    },
    {
        image: img,
        name: 'The Hidden Cave',
        des: 'Two explorers stumble upon a cave...',
        category: 'New',
        author: 'Liam Johnson',
        type: 'Magic',
        audio: audio3,
        audioDuration: '5:00'
    },
    {
        image: img,
        name: 'The Mysterious Island',
        des: 'A shipwrecked boy discovers an island...',
        category: 'New',
        author: 'Mark Twain',
        type: 'Adventure',
        audio: audio1,
        audioDuration: '3:30'
    },
    {
        image: img,
        name: 'The Secret Garden',
        des: 'A lonely girl finds a magical garden...',
        category: 'New',
        author: 'Frances Hodgson Burnett',
        type: 'Drama',
        audio: audio2,
        audioDuration: '4:05'
    },
    {
        image: img,
        name: 'The Hidden Cave',
        des: 'Two explorers stumble upon a cave...',
        category: 'New',
        author: 'Liam Johnson',
        type: 'Magic',
        audio: audio3,
        audioDuration: '5:00'
    },

    // Extra Stories for Categories
    { image: img, name: 'The Friendly Dragon', category: 'Animals', type: 'Animals', author: 'Emily Rose', duration: '10 min' },
    { image: img, name: 'Underwater Adventure', category: 'Science Fiction', type: 'Sci-Fi', author: 'Laura Brown', duration: '12 min' },
    { image: img, name: 'The Brave Knight', category: 'Adventure', type: 'Adventure', author: 'David Harper', duration: '14 min' },
];

function CatStories() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedCategory = queryParams.get('category'); // Get the selected category

    // Filter stories based on category
    const filteredStories = allStories.filter(story =>
        story.category === selectedCategory || story.type === selectedCategory
    );

    return (
        <>
            <Navbar />
            <div className="cat-stories-page">
                <h2>{selectedCategory} Stories</h2>
                {filteredStories.length > 0 ? (
                    <div className="stories-grid">
                        {filteredStories.map((story, index) => (
                            <Link to='/story' state={{story}}>
                                <div key={index} className="story-card">
                                    <img src={story.image} alt={story.name} />
                                    <p>{story.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className="no-stories-message">No stories found for "{selectedCategory}".</p>
                )}
            </div>
            <Footer />
        </>
    );
}

export default CatStories;
