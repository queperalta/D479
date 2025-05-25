import React, { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 300);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 btn btn-primary btn-circle shadow-lg animate-fade-in"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )
  );
}
