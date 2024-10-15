import  { useEffect, useState } from 'react';
import Lottie from 'lottie-react'; // Ensure this is the correct import

import animationData1 from '../animations/animation1.json'; 
import animationData2 from '../animations/animation2.json'; 
import animationData3 from '../animations/animation3.json'; 
import animationData4 from '../animations/animation4.json';
import animationData5 from '../animations/animation5.json'; 
import animationData6 from '../animations/animation6.json'; 

const animations = [animationData1, animationData2, animationData3, animationData4, animationData5, animationData6];

function AnimationSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % animations.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='animation-slideshow'>
            <div className="lottie-animation">
                {animations[currentIndex] && (
                    <Lottie animationData={animations[currentIndex]} loop={true} />
                )}
            </div>
            <div className="introduction">
                <h2>We all have mental health.</h2>
                <p>
        Just as the dawn brings light to the world, we all possess an InnerLight that can guide us through life&apos;s challenges. Our emotional health is a journey filled with ups and downs, 
        and it is crucial to honor every moment we experience.
    </p>
    <p>
    We encourage you to explore our resources at your fingertips.</p>
    <p>
    Remember, reaching out is a sign of strength. </p>
    <div className="button-container">
    <a href='https://www.helpguide.org/find-help'>
        <button className='get-help-button'>Get Help</button>
    </a>
</div>

            </div>
        </div>
    );
}

export default AnimationSlideshow;
