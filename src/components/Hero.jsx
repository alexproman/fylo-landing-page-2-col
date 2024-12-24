
import heroImg from '../assets/images/illustration-1.svg'
import Form from './Form'

const Hero = () => {
  return (
      <div className="container">
      <section className="mt-64 flex flex-col-reverse xl:flex-row  justify-between w-full gap-16 xl:gap-4 ">
      <div className="hero-text flex flex-1 flex-col items-center justify-start   md:m-auto   gap-6 w-full  md:w-2/3 xl:items-center xl:w-1/2">
      <h1 className={
        ` text-xl md:text-3xl xl:text-4xl w-full
          text-center xl:text-left
           font-Raleway font-bold
           m-auto xl:m-0 text-VeryDarkBlue
           `
          }>{`All your files in one secure location, accessible anywhere.`}</h1>
      <p className="w-full  m-auto xl:m-0 text-center xl:text-left text-DesaturatedBlue  font-body font-normal">{`Fylo stores your most important files in one secure location. 
      Access them wherever you need, share and collaborate with friends, 
      family, and co-workers.`}</p>
      <Form 
  buttonText="Get Started"
  inputStyles="w-full xl:w-[320px] shadow-inset shadow-slate-600"
  containerStyles="m-auto xl:m-0 w-full flex flex-col md:flex-row gap-6 xl:gap-3"
  errorStyles="text-red-700"
  errorText="Please Check Your Email"
/>

      
      </div>
      <img src={heroImg} alt="hero-img" width={600} height={400} className=" hero-img w-full object-contain xl:w-1/2" />
      
        
      </section>
      </div>
  );
}

export default Hero

