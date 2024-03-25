import { useEffect, useState, useRef } from 'react'
import AnimatedLetters from '../AnimatedLetter'
import './index.scss'
import emailjs from '@emailjs/browser'

const  Contact = () =>  {
     const [letterClass, setLetterClass] = useState('text-animate')
     const refForm = useRef()
     
useEffect(() => {
   
     let timeoutid = setTimeout(() => {
       setLetterClass('text-animate-hover')
     }, 3000)

     return () => {
       clearTimeout(timeoutid)
     }

  }, [])

  const sendEmail = (e) =>{
    e.preventDefault()

    emailjs
      .sendForm(
        'service_spn50xl',
        'template_l6dfp5d',
        refForm.current,
        'cytdO0Su40WU-gvVA'
      )
      .then(
        () => {
          alert('Message successfully sent')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )

  }

    return(
        <>
        <div className = "container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                    </h1>
                    <p>
                        I am always available for the right kind of work or freelancw jobs. If a good project comes along , feel free to contact me.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                             <ul>
                                <li className ='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className ='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                    </li>
                                    <li>
                                        <textarea placeholder ="Message" name="Message" required></textarea>
                                    </li>
                                    <li>
                                        <input type="submit" className="flat-button" value="SEND" />
                                        </li>

                            </ul>
                        </form>
                    </div>
                        

                </div>
        </div>
        </>
    )
}

export default Contact