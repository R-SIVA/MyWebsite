import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './MyCarousel.css'; // Import the custom CSS for the carousel

const MyCarousel = () => {
    return (
        <Carousel showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={3000}
        transitionTime={500}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button type="button" onClick={onClickHandler} title={label} className="control-arrow control-prev">
              &#10094;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button type="button" onClick={onClickHandler} title={label} className="control-arrow control-next">
              &#10095;
            </button>
          )
        }
  >
            <div >
                <img src="https://via.placeholder.com/800x300" alt="Slide 1" className="carousel-image" />
                <h2 className="text-overlay">Slide 1</h2>
            </div>
            <div>
                <img src="https://via.placeholder.com/800x300" alt="Slide 2" className="carousel-image" />
                <h2 className="text-overlay">Slide 2</h2>
            </div>
            <div>
                <img src="https://via.placeholder.com/800x300" alt="Slide 3" className="carousel-image" />
                <h2 className="text-overlay">Slide 3</h2>
            </div>
        </Carousel>
    );
}

export default MyCarousel;
