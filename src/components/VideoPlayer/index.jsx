import React, { useEffect, useRef } from 'react';
import video from '../../assets/coding-vid.mp4';
import './VideoPlayer.css'

const VideoPlayer = () => { 
  const videoRef = useRef(null);

  useEffect(() => {
    console.log(videoRef, 'video')
  }, [videoRef])

  const handlePlay = () => {
    videoRef.current.play();
  }
  
  const handlePause = () => {
    videoRef.current.pause();
  }

  return (
    <div className='VideoPlayer'>
      <video ref={videoRef} width="400" controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="btns">
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
