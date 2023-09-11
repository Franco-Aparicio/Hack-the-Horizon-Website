import React, {useState, useEffect} from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true); // Set isVisible to true when scrolled down
    } else {
      setIsVisible(false); // Set isVisible to false when at the top
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      id="scrollToTopButton"
      className={`scroll-to-top-button ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: '1000',
        width: '60px',
        height: '60px'
      }}
    >
      {/*^*/}
        <i className="fas fa-chevron-up" style={{paddingBottom: '4px', fontSize: '1.6em'}}></i>
    </button>
  );
}

export default ScrollToTopButton;
