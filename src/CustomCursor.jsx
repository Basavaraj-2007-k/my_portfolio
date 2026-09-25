import { useEffect, useRef } from "react";
import "./CustomCursor.css";

export function CustomCursor({ defaultCardText = "VIEW" }) {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const label = labelRef.current;
    if (!cursor || !follower) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animateFollower = () => {
      // Smooth 100-150ms trailing interpolation
      followerX += (mouseX - followerX) * 0.14;
      followerY += (mouseY - followerY) * 0.14;

      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      rafId = requestAnimationFrame(animateFollower);
    };

    const interactiveSelectors =
      "a, button, input, textarea, select, .project-card, .skill-card, .profile-link-card, .hover-target, [data-cursor-text]";

    const handleMouseEnter = (e) => {
      const target = e.currentTarget;
      cursor.classList.add("cursor-active");
      follower.classList.add("cursor-expand");

      const isCard = target.matches(".project-card, .skill-card, .profile-link-card, [data-cursor-text]");
      const text =
        target.getAttribute("data-cursor-text") ||
        (isCard ? (target.matches(".profile-link-card") ? "EXPLORE" : defaultCardText) : "");

      if (text && label) {
        label.textContent = text;
        follower.classList.add("cursor-view");
      }
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("cursor-active");
      follower.classList.remove("cursor-expand");
      follower.classList.remove("cursor-view");
      if (label) {
        label.textContent = "";
      }
    };

    const elements = document.querySelectorAll(interactiveSelectors);
    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [defaultCardText]);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true"></div>
      <div ref={followerRef} className="cursor-follower" aria-hidden="true">
        <span ref={labelRef} className="cursor-label"></span>
      </div>
    </>
  );
}

export default CustomCursor;
