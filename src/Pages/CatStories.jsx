import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import img from '../Images/story-book-500x500.webp';

import '../Css/CatStories.css';

function CatStories() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const category = params.get('category') || 'All';

    // Example stories data - replace with your API or state
    const storiesData = {
        'Featured Stories': [
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
        ],
        'New Stories': [
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
        ],
        'Adventure': [
            { image: img, name: 'The Brave Explorer' },
            { image: img, name: 'The Lost Treasure' },
        ],
        'Fairy Tales': [
            { image: img, name: 'The Kind Princess' },
            { image: img, name: 'The Magical Carousel' },
        ],
        'Animals': [
            { image: img, name: 'The Talking Animals' },
            { image: img, name: 'The Friendly Dragon' },
        ],
        'Magic': [
            { image: img, name: 'Magic in the Forest' },
            { image: img, name: 'The Whimsical Witch' },
        ],
        'Science Fiction': [
            { image: img, name: 'Adventures in Space' },
            { image: img, name: 'A Journey to the Stars' },
        ],
    };

    // Get stories based on the selected category
    const stories = storiesData[category] || [];

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <Navbar />
            <div className="cat-stories-page">
                <h2>{category} Stories</h2>
                {stories.length > 0 ? (
                    <div className="stories-grid">
                        {stories.map((story, index) => (
                            <div key={index} className="story-card">
                                <img src={story.image} alt={story.name} />
                                <p>{story.name}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="no-stories-message">
                        <p>No stories available for the selected category. Please check back later or explore other categories.</p>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default CatStories;
