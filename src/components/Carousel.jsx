// import React from 'react';
import PropTypes from 'prop-types';
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/Carousel.css';

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
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 30,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 20,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 20,
        },
    };

    return (
        <div className="carousel-wrapper">
            <h2 className='experience-title'>What are you experiencing?</h2>
            <MultiCarousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true} // Enable dots
                renderDotsOutside={true} // Place dots outside the carousel
                ssr={true}
                infinite={false}
                keyBoardControl={true}
                containerClass="carousel-container"
                itemClass="carousel-item"
                dotListClass="custom-dot-list" // Custom class for dots
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
            >
                {carouselData.map((item, index) => (
                    <div className="carousel-card" key={index}>
                        <h3>{item.title.toUpperCase()}</h3>
                        <p>{item.content}</p>
                    </div>
                ))}
            </MultiCarousel>
        </div>
    );
};

CarouselComponent.propTypes = {
    carouselData: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default CarouselComponent;
