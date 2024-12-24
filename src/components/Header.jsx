
import { useEffect, useState } from 'react'
import logo from '../assets/images/logo.svg'


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [navLinks] = useState(['Features','Team','Sign In'])
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    {/* Removing the eventListenner for Preventing memory leaks*/}
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
  return (
      <header  className={
        ` pb-7 ${isScrolled ? 'pt-7' : 'pt-14'}
          ${isScrolled ? 'bg-VeryLighblue' : 'bg-transparent'}
           fixed top-0 left-0 w-full z-50 transition-all duration-200`
        }>
      <div className="container flex items-center justify-between ">
          <div className="logo">
          <img src={logo} alt="logo" width={120} height={120} className='md:w-48' />
          </div>
          <nav>
          <ul className='flex gap-6 md:gap-12'>
          {navLinks.map((link)=>(
              <li key={link}>
              <a href={`/${link.toLowerCase()}`}  className={
                `link font-Raleway text-lg 
                ${isScrolled ? 'text-white hover:text-VeryDarkBlue '
                 : 'text-DesaturatedBlue hover:text-BrightBlue'}
                 text-sm md:text-base 
                   `}>{link}</a>
              </li>
          ))}
          </ul>
          </nav>
      </div>
      </header>
  );
}

export default Header
