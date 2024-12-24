import quotesIco from '../assets/images/icon-quotes.svg'
import avatarImg from '../assets/images/avatar-testimonial.jpg'
const Article = () => {
  return (
    <article className='bg-white w-full sm:w-96 shadow-around rounded-md p-5 flex flex-col items-start justify-between gap-4'>
    <img src={quotesIco} alt="qutes-icon" width={15} height={15}  />
    <p className='text-base text-DesaturatedBlue'>{`Fylo has improved our team productivity by an order of magnitude. Since 
  making the switch our team has become a well-oiled collaboration machine.`}</p>
  <div className="avatar flex items-center justify-between gap-3">
  <img src={avatarImg} alt="avatar-img" width={40} height={40} className='w-12 rounded-full' />
  <div className="avatar-data">
  <p className="name font-Raleway font-bold text-base">{`Kyle Burton`}</p>
  <small className='text-[12px] font-Raleway font-normal'>{`Founder & CEO, Huddle`}</small>
  </div>
  </div>
   </article>
   
  )
}

export default Article