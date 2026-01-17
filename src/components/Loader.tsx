import { useEffect } from "react";
import { gsap } from "gsap";
import loadingVideo from "../assets/loading.mp4";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const tl = gsap.timeline({ onComplete });

    tl.fromTo(
      ".loader-video",
      { opacity: 0, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
    ).to(".loader", {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      delay: 0.6,
    });
  }, [onComplete]);

  return (
    <div className="loader fixed inset-0 z-[9999] bg-[#060707] flex items-center justify-center">
      <video
        className="loader-video w-64 h-64 object-contain"
        src={loadingVideo}
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
}
