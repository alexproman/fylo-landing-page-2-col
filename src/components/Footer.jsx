import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare,faInstagram,faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import footerLogo from '../assets/images/footerLogo.svg'
import { useState } from 'react';



const Footer = () => {
  const [linksCol1] = useState (["About Us","Jobs","Press","Blog"]);
  const [linksCol2] = useState (["Contact Us","Terms","Privacy"]);

  return (
      <div className='relative flex flex-col'>  
     
      <footer className="bg-VeryDarkBlue pt-20">
      
      
      <div className="container m-auto gap-10 flex flex-col px-6 mb-20">
      
   
      <img src={footerLogo} alt="logo" width={120} height={120} className='md:w-48'/>





      

      
          <div className="address-and-link-and-social-parent flex flex-col xl:flex-row gap-4 ">
          
          <div className="address flex flex-col w-full xl:w-5/12">
            
      <div className="phone flex items-center gap-4">
        <FontAwesomeIcon icon={faPhoneVolume} className='text-gray-200 text-xl' />  
        <a href={`tel:+1-543-123-4567`}
         aria-label={`Call Us`}
          className={`text-gray-200 font-body font-normal not-italic py-2 text-base`}>{`Phone: +1-543-123-4567`}</a>
      </div>

      <div className={`Email flex items-center gap-4`}>
        <FontAwesomeIcon icon={faEnvelope} className={`text-gray-200 text-xl`} />
        <a href=  {`mailto:  example@fylo.com`}
         aria-label={`Email Us`}
          className={`link text-gray-200 font-body font-normal not-italic py-2 text-base`}>{`  example@fylo.com`}</a>
      </div>
          </div>

          
          <div className={`links flex flex-col xl:flex-row w-full xl:w-3/12 justify-between xl:justify-start`}>
            <ul className={`ps-9 w-1/2`}>
            {linksCol1.map((link)=>(
              <li key={link} className={'text-gray-200 font-body font-normal not-italic py-2 text-base hover:text-DesaturatedBlue'}>
              <a href={`/${link.toLowerCase()}`} target={'_blank'} className={'btn hover:text-veryLightMainColor'}>{link}</a>
              </li>
            ))}
            </ul>
            <ul className={' ps-9 my-4 xl:my-0 w-1/2'}>
            {linksCol2.map((link)=>(
              <li key={link} className={'text-gray-200 font-body font-normal not-italic py-2 text-base hover:text-DesaturatedBlue'}>
              <a href={`/${link.toLowerCase()}`} target={'_blank'} className={'btn hover:text-veryLightMainColor'}>{link}</a>
              </li>
            ))}
            </ul>
            </div>
              <div className="social-media w-full xl:w-3/12   flex justify-center  items-center xl:items-start">
              <ul className='flex gap-6 text-4xl text-gray-50'>
              <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit facebooke website">
              <FontAwesomeIcon icon={faFacebookSquare}className='btn hover:text-DesaturatedBlue' aria-hidden="true"/>
              </a>
              </li>
              <li>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit twitter website">
              <FontAwesomeIcon icon={faSquareTwitter} className='btn hover:text-DesaturatedBlue' aria-hidden="true"/>
              </a>
              </li>
              <li>
              <a href="http://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Instagram website">
              <FontAwesomeIcon icon={faInstagram} className='btn  hover:text-DesaturatedBlue' aria-hidden="true"/>
              </a>
              </li>
            </ul>
          </div>
          
          </div>
                  
    </div>
    <div className="coded-by absolute bottom-5 left-1/2 -translate-x-1/2">
          <p className="text-xs text-gray-100 text-center ">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-blue-400">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/alexproman" className="text-blue-400">Mohamed Hamid</a>.
        </p>
          </div> 
    </footer>
      
    </div>
  );
}

export default Footer

{/*
  Phone: +1-543-123-4567

  About Us
  Jobs
  Press
  Blog

  Contact Us
  Terms
  Privacy
  
  */}

  {/*
   

    
    
    
    
    
    
    
    
    */}