import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if the target is clickable
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.onclick !== null ||
        target.closest('button, a, [role="button"], [role="link"]') !== null
      );
    };

    document.addEventListener('mousemove', moveCursor);
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  const cursorStyle: React.CSSProperties = {
    position: 'fixed',
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: '32px',
    height: '32px',
    backgroundImage: 'url("/cursor.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    pointerEvents: 'none',
    zIndex: 9999,
    transform: 'translate(-50%, -50%)',
    transition: 'transform 0.1s ease',
  };

  const pointerStyle: React.CSSProperties = {
    ...cursorStyle,
    transform: 'translate(-50%, -50%) scale(0.8)',
  };

  return <div style={isPointer ? pointerStyle : cursorStyle} />;
};

export default CustomCursor;
