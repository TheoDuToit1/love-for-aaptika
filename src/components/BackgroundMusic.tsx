import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import song from '../../dhruv – _double take (Lyrics).mp3';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleFirstInteraction = () => {
      setHasInteracted(true);
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Auto-play failed, user will need to manually start
        });
      }
    };

    // Listen for any user interaction to enable audio
    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('scroll', handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
    };
  }, [isPlaying]);

  // Set initial volume once the element is available
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          console.log('Audio play failed');
        });
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        muted={isMuted}
        autoPlay
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedMetadata={() => {
          if (audioRef.current) audioRef.current.volume = 0.3;
        }}
      >
        <source src={song} type="audio/mpeg" />
      </audio>

      {/* Music Controls */}
      <div className="fixed bottom-6 right-6 z-50 flex gap-2">
        <button
          onClick={togglePlay}
          className="bg-white/80 backdrop-blur-sm hover:bg-white/90 text-rose-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          title={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </button>
        
        <button
          onClick={toggleMute}
          className="bg-white/80 backdrop-blur-sm hover:bg-white/90 text-rose-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          title={isMuted ? 'Unmute music' : 'Mute music'}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Song Info */}
      {hasInteracted && (
        <div className="fixed bottom-6 left-6 z-50 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          <p className="text-sm text-gray-700 font-medium">
            🎵 Double Take - dhruv
          </p>
        </div>
      )}
    </>
  );
};

export default BackgroundMusic;