import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/640px-React-icon.svg.png'
import './Contact.css'



function Contact() {
    return (
        <div className='contact'>
         <div id='bg'></div>



        <header  className = 'landing__header'>
    
                <img src ={img} alt ='logo'></img>
                <Link to='/' activeStyle="landing__header">
                    <a >RJS</a>
                </Link>

        </header>

        <main>


                            <section  id='primary'>
                                    
                                    <h1 id = 'primary-text'>React JS Developer</h1>
                                    
                                        <p>get your new project done</p>

                            </section>

        </main>


            <h1>contact</h1>
        </div>
    )
}

export default Contact
