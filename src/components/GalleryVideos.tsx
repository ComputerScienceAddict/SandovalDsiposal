'use client';

import { useRef, useState } from 'react';

const GALLERY_VIDEOS = [
  { src: '/gallery/videos/gallery-video-01.mp4', poster: '/gallery/videos/gallery-video-01.jpg' },
  { src: '/gallery/videos/gallery-video-02.mp4', poster: '/gallery/videos/gallery-video-02.jpg' },
  { src: '/gallery/videos/gallery-video-03.mp4', poster: '/gallery/videos/gallery-video-03.jpg' },
  { src: '/gallery/videos/gallery-video-04.mp4', poster: '/gallery/videos/gallery-video-04.jpg' },
  { src: '/gallery/videos/gallery-video-05.mp4', poster: '/gallery/videos/gallery-video-05.jpg' },
  { src: '/gallery/videos/gallery-video-06.mp4', poster: '/gallery/videos/gallery-video-06.jpg' },
  { src: '/gallery/videos/gallery-video-07.mp4', poster: '/gallery/videos/gallery-video-07.jpg' },
  { src: '/gallery/videos/gallery-video-08.mp4', poster: '/gallery/videos/gallery-video-08.jpg' },
  { src: '/gallery/videos/gallery-video-09.mp4', poster: '/gallery/videos/gallery-video-09.jpg' },
  { src: '/gallery/videos/gallery-video-10.mp4', poster: '/gallery/videos/gallery-video-10.jpg' },
] as const;

export default function GalleryVideos() {
  const [playing, setPlaying] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const pauseOthers = (keep: number) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== keep) {
        video.pause();
      }
    });
  };

  const handlePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;
    pauseOthers(index);
    video.muted = false;
    const playPromise = video.play();
    if (playPromise) {
      playPromise.then(() => setPlaying(index)).catch(() => {
        video.muted = true;
        video.play().then(() => setPlaying(index)).catch(() => setPlaying(null));
      });
    }
  };

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5 lg:gap-4">
      {GALLERY_VIDEOS.map((clip, i) => {
        const isPlaying = playing === i;
        return (
          <div
            key={clip.src}
            className="group relative aspect-[9/16] overflow-hidden rounded-xl bg-stone-900 shadow-md ring-1 ring-stone-800/5"
          >
            <video
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              src={clip.src}
              poster={clip.poster}
              playsInline
              preload="none"
              controls={isPlaying}
              className="absolute inset-0 h-full w-full object-cover"
              aria-label={`Sandoval Commercial Disposal job video ${i + 1}`}
              onPlay={() => {
                pauseOthers(i);
                setPlaying(i);
              }}
              onPause={(e) => {
                if (e.currentTarget.seeking) return;
                if (playing === i) setPlaying(null);
              }}
              onEnded={() => {
                if (playing === i) setPlaying(null);
              }}
            />
            {!isPlaying && (
              <button
                type="button"
                onClick={() => handlePlay(i)}
                className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30 active:bg-black/40"
                aria-label={`Play job video ${i + 1}`}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-stone-900 shadow-lg ring-1 ring-stone-900/10 transition-transform group-hover:scale-105 group-active:scale-95">
                  <svg className="ml-0.5 h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
