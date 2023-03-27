// components/ScrollingText.js

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollingText = ({ html, scrollSpeed = 55 }) => {
  const containerRef = useRef();

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    const textWidth = containerRef.current.scrollWidth;

    const keyframes = `
      @keyframes scrollingText {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${textWidth}px); }
      }
    `;

    const styleElement = document.createElement('style');
    styleElement.innerHTML = keyframes;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      style={{
        whiteSpace: 'nowrap',
        animation: `scrollingText ${scrollSpeed}s linear infinite`,
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    ></motion.div>
  );
};

export default ScrollingText;
