import MultiCarousel from 'react-multi-carousel'; 
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';
import '../styles/Carousel.css';
import { useState } from 'react';



const CarouselComponent = ({ carouselData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    console.log(carouselData);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1, // Display 1 card at a time
            partialVisibilityGutter: 40 // Adjust for partial visibility
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1, // Display 1 card at a time
            partialVisibilityGutter: 30
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1, // Display 1 card at a time on mobile
            partialVisibilityGutter: 30
        }
    };

    const handleOnChange = (previousSlide, { currentSlide }) => {
        setCurrentIndex(currentSlide);
    };

    return (
        <div>
            <MultiCarousel 
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={false} // Disable dots
                ssr={true}
                infinite={false}
                keyBoardControl={true}
                containerClass="carousel-container"
                itemClass="carousel-item"
                arrows={false} // Disable arrows
                afterChange={handleOnChange} // Track current index
            >
                {carouselData.map((item, index) => (
                    <div className="carousel-card" key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                        <a href={item.link} className="carousel-link">Learn more</a>
                    </div>
                ))}
            </MultiCarousel>

            <div className="slider-indicator">
                {currentIndex + 1} / {carouselData.length}
            </div>
        </div>
    );
};

CarouselComponent.propTypes = {
    carouselData: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired
        })
    ).isRequired
};

export default CarouselComponent;
