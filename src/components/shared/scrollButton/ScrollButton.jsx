import React, { useState } from 'react';
import './scrollButton.css'

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () =>{
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 400){
            setVisible(true)
        }
        else if (scrolled <= 400){
            setVisible(false)
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };
    window.addEventListener('scroll', toggleVisible);
    return (
        <button onClick={scrollToTop} className="scroll-to-top" style={{display: visible ? "inline" : "none"}}>
            <div>
                <div className="scroll-top-inner visible">
                    <div className="scroll-bar">
                        <div className="bar-inner w-1/3"></div>
                    </div>
                    <div className="scroll-bar-text">Go To Top</div>
                </div>
            </div>
        </button>
    );
};

export default ScrollButton;