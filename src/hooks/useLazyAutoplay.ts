import { useEffect, type RefObject } from 'react';

/**
 * Plays a muted, looping video only while it is near the viewport.
 * Use with preload="metadata" and without the autoPlay attribute, so the
 * browser fetches just the dimensions up front instead of the whole file.
 * @param videoRef - Ref to the video element
 * @param enabled - Whether lazy autoplay is active for this video
 */
export function useLazyAutoplay(
  videoRef: RefObject<HTMLVideoElement | null>,
  enabled = true
) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !enabled) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: '50% 0px' }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [videoRef, enabled]);
}

export default useLazyAutoplay;
