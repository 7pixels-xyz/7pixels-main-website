import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

type AudioContextType = {
    isPlaying: boolean;
    togglePlay: () => void;
};

const AudioContext = createContext<AudioContextType>({ isPlaying: false, togglePlay: () => { } });

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Initialize the browser-safe audio object
        const audio = new Audio('/music.m4a');
        audio.preload = 'auto'; // Optimize for split-second load
        audio.loop = true;
        audio.volume = 0.3; // Elegant background volume
        audioRef.current = audio;

        // Try aggressive immediate playback (Works if they arrived from an outbound link like Google)
        audio.play().then(() => setIsPlaying(true)).catch(() => { });

        // Intelligent Autoplay Bypasser - starts music on absolute first native interaction (Fallback for direct URL visits)
        const handleInteraction = () => {
            audio.play().then(() => setIsPlaying(true)).catch(() => {
                // Autoplay safely blocked if interaction was extremely fast/ghosted
            });
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('keydown', handleInteraction);
        };

        document.addEventListener('click', handleInteraction);
        document.addEventListener('keydown', handleInteraction);

        return () => {
            audio.pause();
            audio.src = '';
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('keydown', handleInteraction);
        };
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <AudioContext.Provider value={{ isPlaying, togglePlay }}>
            {children}
        </AudioContext.Provider>
    );
};

export const useAudio = () => useContext(AudioContext);
