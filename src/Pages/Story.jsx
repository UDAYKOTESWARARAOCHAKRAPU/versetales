import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import '../Css/Story.css'
import { PlayArrow, Pause } from '@mui/icons-material';

const Story = () => {
  const location = useLocation();
  const story = location.state?.story || {
    title: 'Default Story',
    description: 'No story selected. Please go back and choose a story.',
    image: 'default-image-url', 
    audio: ''
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('timeupdate', () => {
        setCurrentTime(audio.currentTime);
      });
      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });
    }
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <>
      <Navbar />
      <div className="story-page">
        <div className="story-container">
          <div className="story-image">
            <img src={story.image} alt={story.title} />
          </div>
          <div className="story-details">
            <h1 className="story-title">{story.name}</h1>
            <p className="story-description">{story.des}</p>

            {/* Custom Audio Player */}
            <div className="custom-audio-player">
              <button className="control-button" onClick={togglePlayPause}>
                {isPlaying ? <Pause /> : <PlayArrow />}
              </button>
              <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleSeek}
                className="progress-bar"
              />
              <span className="time-indicator">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            {/* Hidden Audio Element */}
            <audio ref={audioRef} src={story.audio}></audio>
          </div>
        </div>

        {/* Story Details Block */}
        <div
          className="det-story"
          style={{ backgroundImage: `url(${story.image})` }}
        >
          <h2 className="det-title">Story Details</h2>
          <div className="det-info">
            <p><strong>Story Name:</strong> {story.name}</p>
            <p><strong>Type:</strong> {story.type || 'Unknown'}</p>
            <p><strong>Author:</strong> {story.author || 'Unknown'}</p>
            <p><strong>Duration:</strong> {story.audioDuration || 'N/A'}</p>
            <p><strong>Summary:</strong> {story.des}</p>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Story;
