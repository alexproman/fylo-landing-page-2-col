/* eslint-disable react/prop-types */
import { useState } from 'react';
import ButtonStarted from './ButtonStarted';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons'; 

const Form = ({
  buttonText = "Get Started",
  inputPlaceholder = "Your Email",
  inputStyles = "",
  containerStyles = "",
  errorStyles = "text-red-700",
  errorText = "Invalid email address",
}) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(null); 

  const validateEmail = (email) => {
    const regex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (value.trim() === '') {
      setIsValid(null);
    } else {
      setIsValid(validateEmail(value));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (isValid) {
        setEmail(''); 
      setIsValid(null);
      console.log(`Submitted email: ${email}`);
    
    } else {
      console.log("Email is invalid. Please correct it.");
    }
  };

  return (
    <form onSubmit={handleSubmit} action="index.html" noValidate className={
        `relative ${containerStyles}`}>
      <div className="relative">
        <input type="email" name="email"   placeholder={inputPlaceholder} autoComplete="off" value={email}
          onChange={handleInputChange}
          className={
            `text-gray-900 outline-0
             border-[1px] rounded-sm px-4 h-[45px] w-full pr-10 
             ${isValid === false ? 'border-red-500' : isValid === true ? 'border-green-500' : 'border-gray-300'} ${inputStyles}`}
        />
        {isValid === false && (
         
          <FontAwesomeIcon icon={faCircleXmark} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500"/>
          
        )}
        {isValid === true && (
          <span >
          <FontAwesomeIcon icon={faCircleCheck} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500"/>
          </span>
        )}
      </div>
      {isValid === false && (
        <small className={`block mt-1 absolute left-0 top-11 ${errorStyles}`}>
          {errorText}
        </small>
      )}
      <ButtonStarted text={buttonText} />
    </form>
  );
};

export default Form;
