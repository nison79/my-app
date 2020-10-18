import React, { useRef,useEffect } from 'react'
import img from '../assets/640px-React-icon.svg.png'
import './Landing.css'
import { gsap } from 'gsap';

function Landing() {

    const headerRef = useRef(null);
    const headerTextRef = useRef(null);
    const headerCard = useRef(null);

    useEffect(() => {
    
        gsap.from(headerRef.current, {
            x : -30,
            autoAlpha: 0,
            ease: 'power1',
            delay: 0.8,
            
        });
 
    }, []);


    useEffect(() => {
    
        gsap.from(headerTextRef.current, {
            x : -30,
            autoAlpha: 0,
            ease: 'elastic',
            delay: 1.8,
            y : -100,
            
        });
 
    }, []);


    useEffect(() => {
    
        gsap.from(headerCard.current, {
            rotate: 360,
            x : 500,
            autoAlpha: 0,
            ease: 'power1',
            delay: 1.5,
            y : 100
        });
 
    }, []);






    return (
        <div className='landing'>
            <div id='bg'></div>

                <header ref={headerRef} className = 'landing__header'>
                        <img src ={img} alt ='logo'></img>
                        <a href='#'>RJS</a>
                </header>

            <main>
                <section ref={headerCard} id = 'card' class='card__main'>
                    <ul>
                        <li>
                            <span></span>
                            <strong>How can i help you?</strong>
                        </li>
                        <li>
                            <span></span>
                            <strong>Tell me about your idea...</strong>
                        </li>
                        <li>
                            <span></span>
                            <strong>Let's communicate</strong>
                        </li>
                    </ul>
                </section>

                <section ref={headerTextRef} id='primary'>
                    
                        <h1 id = 'primary-text'>React JS Developer</h1>
                            <p>get your new project done</p>
                        <a href='#'>Get Help</a>
                </section>
                
            </main>

            
        </div>
    )
}

export default Landing
