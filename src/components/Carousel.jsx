import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/Carousel.css';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const CustomLeftArrow = ({ onClick }) => (
    <button className="carousel-arrow carousel-arrow-left" onClick={onClick}>
        &#9664;
    </button>
);

const CustomRightArrow = ({ onClick }) => (
    <button className="carousel-arrow carousel-arrow-right" onClick={onClick}>
        &#9654;
    </button>
);

CustomLeftArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
};

CustomRightArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
};

const CarouselComponent = ({ carouselData }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [hasAnimated, setHasAnimated] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef(null);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            // partialVisibilityGutter: 50,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            // partialVisibilityGutter: 30,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            // partialVisibilityGutter: 30,
        },
    };

    if (inView && !hasAnimated) {
        setHasAnimated(true);
    }

    const handleSliderChange = (e) => {
        const newSlide = parseInt(e.target.value, 10);
        setCurrentSlide(newSlide);
        carouselRef.current.goToSlide(newSlide);
    };

    return (
        <div
            className={`carousel-wrapper ${hasAnimated ? 'animate-in' : ''}`}
            ref={ref}
        >
            <h2 className='experience-title'>What are you experiencing?</h2>
            <MultiCarousel
                ref={carouselRef}
                responsive={responsive}
                swipeable={true}
                draggable={true}
                ssr={true}
                infinite={false}
                keyBoardControl={true}
                containerClass="carousel-container"
                itemClass="carousel-item"
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                afterChange={(previousSlide, { currentSlide }) => setCurrentSlide(currentSlide)}
            >
                {carouselData.map((item, index) => (
                    <div className="carousel-card" key={index}>
                        <h3>{item.title.toUpperCase()}</h3>
                        <p>{item.content}</p>
                        <Link to={item.link} className='learn-more-button'>Learn More</Link>
                    </div>
                ))}
            </MultiCarousel>

            {/* Slider below the carousel */}
            <input
                type="range"
                min="0"
                max={carouselData.length - 1}
                value={currentSlide}
                onChange={handleSliderChange}
                className="carousel-slider"
            />
        </div>
    );
};

CarouselComponent.propTypes = {
    carouselData: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
};



export default CarouselComponent;
