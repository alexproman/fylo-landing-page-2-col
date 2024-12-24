import SectionImg from '../assets/images/illustration-2.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import bgCurveMob from '../assets/images/bg-curve-mobile.svg'
import bgCurveDesk from '../assets/images/bg-curve-desktop.svg'
import Article from './Article';

const Section = () => {
  return (
      
    <div className='Section-parent my-28'>
    <picture>
    <source media="(max-width:650px )" srcSet={bgCurveMob} width={1440} height={400}  />
    <img src={bgCurveDesk} alt="bg-curve" className='w-full'/>
    </picture>
    <div className="container">
    <section className="bg-LightGrayishBlue  flex  flex-col-reverse xl:flex-row  justify-between w-full gap-16 xl:gap-4 ">
      <div className="hero-text flex flex-1 flex-col items-center justify-start  md:m-auto   gap-5 w-full xl:h-full md:w-2/3 xl:items-center xl:w-1/2">
      <h2 className={
        ` text-xl md:text-3xl xl:text-4xl w-full 
          text-center xl:text-left
           font-Raleway font-bold
           m-auto xl:m-0 text-VeryDarkBlue
           `
          }>{`Stay productive, wherever you are`}</h2>
      <p className="w-full m-auto xl:m-0 text-center xl:text-left text-DesaturatedBlue  font-body font-normal">{
        `Never let location be an issue when accessing your files. Fylo has you 
    covered for all of your file storage needs.`}</p>
      <p className="w-full m-auto xl:m-0 text-center xl:text-left text-DesaturatedBlue  font-body font-normal">{
        `Securely share files and folders with friends, family and colleagues for 
    live collaboration. No email attachments required!`}</p>

   <div className="link text-ModerateCyan w-full flex item-center justify-center xl:justify-start">
   <a href="#" target="_blank" rel="noopener noreferrer" className={
    `font-body font-normal text-base underline underline-offset-8  hover:opacity-75
     `
    }>{`See how Fylo works  `}<FontAwesomeIcon icon={faCircleRight}/></a>
    
   </div>
   <div className="aticle  flex item-center justify-center xl:justify-start w-full mt-8">
   <Article />
    
   </div>
      </div>
      <img src={SectionImg} alt="hero-img"  className=" hero-img w-full object-contain xl:w-1/2" />
      </section>
      </div>
      </div>
      
  );
}

export default Section


{/*
  

  

  

  

  

  
  
  */}