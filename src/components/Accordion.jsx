import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Accordion.css';

const AccordionItem = ({ title, content, link, color}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <button
                className="accordion-button"
                onClick={toggleAccordion}
                aria-expanded={isOpen}
                style={{ backgroundColor: color }}
            >
                {title}
            </button>
            {isOpen && (
                <div className="accordion-content">
                    <p>{content}</p>
                    <a href={link} className="learn-more-button">Learn more</a>
                </div>
            )}
        </div>
    );
};

AccordionItem.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

const Accordion = () => {
    const feelingsData = [
        { title: "Angry", content: "We all get mad and annoyed sometimes. It's natural. But when those emotions happen way too often, they can be distracting, stressful, and we need to manage them before things get worse.", link: '/angry', color: "#eff7fe" },
        { title: "Anxious", content: "Many people struggle with feelings of anxiety. But we can work through and overcome those feelings to make the most of work, school, relationships, and life.", link: '/anxious', color: "#dfeffd" },
        { title: "Sad", content: "From feeling down from time to time to experiencing the persistent sadness of clinical depression, there are things all of us can do to reduce feelings of sadness in our lives.", link: '/sad', color: "#CFE8FC" },
        { title: "Hopeless", content: "When life feels bleak, and it's hard to find hope or figure out what to do next, there are always actions we can take to feel better.", link: '/hopeless', color: "#BFE0FB" },
        { title: "Lonely", content: "Loneliness can literally mean being isolated from other people, but it's often about not feeling understood or connected to those around us. Whatever the struggle, there are ways to overcome loneliness.", link: '/lonely' , color: "#AFD9FA"},
        { title: "Stressed", content: "Stress can be motivating, but when it's overwhelming it can affect our moods and ability to think clearly. So it's important to find ways to cope with and prevent negative stress levels.", link: '/stressed', color: "#9FD1F9" },
        { title: "Weird", content: "Sometimes we can easily describe our emotional state, and other times, we just feel weird. When that happens, it's important to be proactive, understand what's really going on and find ways to cope.", link: '/weird', color: "#90CAF9" }
    ];

    return (
        <div className="accordion">
            <h2 className='feeling-title'>What are you feeling?</h2>
            {feelingsData.map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content} link={item.link} color={item.color} />
            ))}
        </div>
    );
};

export default Accordion;
