import React, { useRef,useEffect } from 'react'
import img from '../assets/640px-React-icon.svg.png'
import './Landing.css'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'

import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import MessageIcon from '@material-ui/icons/Message';

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
                    
                        <a >RJS</a>
                          
                
                </header>

            <main>
                <section ref={headerCard} id = 'card' class='card__main'>
                    <ul>
                        <li>
                            <NotListedLocationIcon style={{ fontSize: 44 , color:'lightpink' }}   className='ul__icon'/>
                            <strong>How can i help you?</strong>
                        </li>
                        <li>
                            <EmojiObjectsIcon style={{ fontSize: 44,color:'lightpink' }} className='ul__icon'/>
                            <strong>Tell me about your idea...</strong>
                        </li>
                        <li>
                            <MessageIcon style={{ fontSize: 40,color:'lightpink' }} className='ul__icon'/>
                            <strong>Let's communicate</strong>
                        </li>
                    </ul>
                </section>

                <section ref={headerTextRef} id='primary'>
                        
                        <h1 id = 'primary-text'>React JS Developer</h1>
                        
                            <p>get your new project done</p>
                        <Link to = 'contact'>
                            <a>Contact</a>
                        </Link>

                
                </section>
                
            </main>

            
        </div>
    )
}

export default Landing
