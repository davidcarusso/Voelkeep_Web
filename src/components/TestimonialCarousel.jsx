import { useState, useEffect } from 'react';
import { CONFIG } from '@/config';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = CONFIG.testimonials.length;

  const goToSlide = (index) => {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  useEffect(() => {
    const autoplayInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(autoplayInterval);
  }, [currentIndex]);

  const stars = '⭐'.repeat(5);

  return (
    <section className="testimonials-carousel">
      <div className="container">
        <h2 className="section-title scroll-reveal">Lo que dicen nuestras clientas</h2>
        
        <div className="carousel-container">
          <button 
            className="carousel-btn carousel-prev" 
            aria-label="Anterior"
            onClick={prevSlide}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <div className="carousel-wrapper">
            <div className="carousel-track">
              {CONFIG.testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                >
                  <div className="testimonial-card-carousel">
                    <div className="quote-icon">"</div>
                    <div className="stars">{stars}</div>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <p className="testimonial-author">- {testimonial.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="carousel-btn carousel-next" 
            aria-label="Siguiente"
            onClick={nextSlide}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
        
        <div className="carousel-dots">
          {CONFIG.testimonials.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir a testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
