import Form from './Form'

const Contact = () => {
  return (
    
    <section className="contact-sec bg-DesaturatedBlue text-white py-24 xl:p-36">
    <div className="container flex flex-col xl:flex-row gap-7 justify-between">
    <div className="text-sec w-full xl:w-5/12 flex flex-col gap-5">
    <h3 className="font-Raleway font-bold text-3xl text-center xl:text-left xl:text-4xl ">{`Get early access today`}</h3>
    <p className="font-body font-normal text-center xl:text-left w-full">{`It only takes a minute to sign up and our free starter tier is extremely generous. 
        If you have any questions, our support team would be happy to help you.`}</p>
    </div>
    <Form
  buttonText="Get Started For Free"
  inputStyles="w-full h-[45px] shadow-around shadow-inset"
  containerStyles="m-auto xl:m-0 w-full md:w-1/2 xl:w-5/12 flex flex-col gap-6"
  errorStyles="text-gray-100"
  errorText="Please Check Your Email"
/>

    </div>
    </section>
  )
}

export default Contact




