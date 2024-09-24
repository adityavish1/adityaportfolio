import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

function Contact() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Email Validation
  const emailValidation = () => {
    return String(email).toLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    
    // Validation checks
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation()) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      // EmailJS sending logic
      emailjs.send(
        'service_jqyjk7s',   // Replace with your EmailJS service ID
        'template_2a1tyzo',   // Replace with your EmailJS template ID
        {
          from_name: username,
          phone_number: phoneNumber,
          from_email: email,
          subject: subject,
          message: message,
        },
        '32iSJm1ewmxm8Wg-j'        // Replace with your EmailJS user ID (public key)
      ).then(
        (result) => {
          setSuccessMsg(`Thank you ${username}, your message has been sent successfully!`);
          setErrMsg("");
          // Clear input fields
          setUsername("");
          setPhoneNumber("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.error('EmailJS Error:', error); // Log the error for debugging
          setErrMsg("Failed to send the message, please try again.");
        }
      );
    }
  };

  return (
    <section id="contact" className='w-full py-20 border-b-[1px] border-b-black lg:px-16'>
      <div className='flex justify-center items-center text-center'>
        <Title title="CONTACT" des="Contact with me" />
      </div>
      <div className="w-full my-10">
        <div className="w-full h-full flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className='w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 gap-8 rounded-lg shadow-shadowOne flex flex-col'>
            <form className='w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5'>
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className='w-full flex flex-col lg:flex-row gap-10'>
                <div className='w-full lgl:w-1/2 flex flex-col gap-4'>
                  <p className='text-sm text-gray-400 uppercase tracking-wide'>YOUR NAME</p>
                  <input onChange={(e) => setUsername(e.target.value)} value={username} className='contactInput' type="text" />
                </div>
                <div className='w-full lgl:w-1/2 flex flex-col gap-4'>
                  <p className='text-sm text-gray-400 uppercase tracking-wide'>Phone Number</p>
                  <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} className='contactInput' type="text" />
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <p className='text-sm text-gray-400 uppercase tracking-wide'>Email Id</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} className='contactInput' type="email" />
              </div>
              <div className='flex flex-col gap-4'>
                <p className='text-sm text-gray-400 uppercase tracking-wide'>SUBJECT</p>
                <input onChange={(e) => setSubject(e.target.value)} value={subject} className='contactInput' type="text" />
              </div>
              <div className='flex flex-col gap-4'>
                <p className='text-sm text-gray-400 uppercase tracking-wide'>MESSAGE</p>
                <textarea onChange={(e) => setMessage(e.target.value)} value={message} className='contactTextArea' cols="30" rows="8"></textarea>
              </div>
              <div>
                <button onClick={handleSend} className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
