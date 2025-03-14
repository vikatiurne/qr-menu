import React, { ReactNode, useEffect, useRef } from 'react';


interface PopupProps {
  children: ReactNode;
  className?: string;
  setIsActivePopup: (boolean) => void;
  activePopup: boolean;
}

const Popup: React.FC<PopupProps> = ({
  children,
  className,
  setIsActivePopup,
  activePopup,
}) => {
  const wrapRef = useRef(null);

  const handleClick = (event) => {
    if (wrapRef.current && !wrapRef.current.contains(event.target)) {
      setIsActivePopup(0);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
  }, []);

  return (
    <>
      {activePopup && (
        <div
          className={`${className} shadow-[0_0px_15px_rgba(0,0,0,0.25)] `}
          ref={wrapRef}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Popup;
