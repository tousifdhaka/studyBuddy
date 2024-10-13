import React, { useRef, useEffect } from 'react';
import './video.css';
import { FiMic, FiMicOff, FiVideo, FiVideoOff, FiMessageSquare } from 'react-icons/fi';
import { AiOutlineUserAdd } from 'react-icons/ai';

const VideoConferencing = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    const setupMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing media devices.', error);
      }
    };

    setupMedia();
  }, []);

  return (
    <div className="video-page">
      <div className="video-conference-container">
        <header className="header">
          <h2>StudyBuddy: Math Tutoring Session</h2>
          <button className="invite-button">
            <AiOutlineUserAdd size={24} />
          </button>
        </header>
        <div className="video-container">
          <div className="main-video">
            <video ref={remoteVideoRef} autoPlay className="remote-video" />
            <div className="video-placeholder">Main Video</div>
          </div>
          <div className="your-video">
            <video ref={localVideoRef} autoPlay muted className="local-video" />
            <div className="video-placeholder">Your Video</div>
          </div>
        </div>
        <div className="controls">
          <button><FiMic size={20} /></button>
          <button><FiMicOff size={20} /></button>
          <button><FiVideo size={20} /></button>
          <button><FiVideoOff size={20} /></button>
          <button><FiMessageSquare size={20} /></button>
        </div>
      </div>
    </div>
  );
};

export default VideoConferencing;