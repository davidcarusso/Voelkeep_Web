import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPercentage = (window.pageYOffset / windowHeight) * 100;
      setScrolled(scrolledPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress">
      <div className="scroll-progress-bar" style={{ width: `${scrolled}%` }}></div>
    </div>
  );
};

export default ScrollProgress;
