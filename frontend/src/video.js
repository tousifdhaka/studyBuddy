import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './video.css';
import { FiMic, FiMicOff, FiVideo, FiVideoOff, FiMessageSquare } from 'react-icons/fi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import Chat from './Chat';

const VideoConferencing = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [stream, setStream] = useState(null);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login"); // Redirect to login if no token
      }

    startVideo();
  }, []);

  const startVideo = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = mediaStream;
      }
      setStream(mediaStream);
    } catch (error) {
      console.error('Error accessing media devices:', error);
    }
  };

  const toggleVideo = () => {
    if (stream) {
      const videoTrack = stream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setIsVideoEnabled(!isVideoEnabled);
      }
    }
  };

  const toggleAudio = () => {
    if (stream) {
      const audioTrack = stream.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setIsAudioEnabled(!isAudioEnabled);
      }
    }
  };

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
            <video ref={remoteVideoRef} autoPlay playsInline className="remote-video" />
            <div className="video-placeholder">Main Video</div>
          </div>
          <div className="your-video">
            <video ref={localVideoRef} autoPlay playsInline muted className="local-video" />
            <div className="video-placeholder">Your Video</div>
          </div>
        </div>
        <div className="controls">
          <button onClick={toggleAudio}>
            {isAudioEnabled ? <FiMic size={20} /> : <FiMicOff size={20} />}
          </button>
          <button onClick={toggleVideo}>
            {isVideoEnabled ? <FiVideo size={20} /> : <FiVideoOff size={20} />}
          </button>
          <button onClick={() => setIsChatOpen(!isChatOpen)}>
            <FiMessageSquare size={20} />
          </button>
        </div>
      </div>
      <Chat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)}
        userName={`User_${Math.floor(Math.random() * 1000)}`}
      />
    </div>
  );
};

export default VideoConferencing;