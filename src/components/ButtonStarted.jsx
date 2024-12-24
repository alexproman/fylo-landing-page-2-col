
// eslint-disable-next-line react/prop-types
const ButtonStarted = ({text}) => {
  return (

    <button type="submit" className={
      `btn w-full  xl:w-[200px] h-[45px] md:w-full
      text-lg rounded-sm text-white shadow-around
       bg-BrightBlue hover:bg-lightBlue`
      }>{text}
      </button> 
  )
}

export default ButtonStarted