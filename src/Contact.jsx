import React from 'react'
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi'

const Contact = ({ darkMode }) => {
  return (
    <>
      {/* ========================== Contact Section ========================== */}

      <div className={`flex flex-col md:flex-row justify-center gap-y-5 md:gap-x-[25px] px-4 sm:px-6 md:px-[60px] pt-[100px] sm:pt-[140px] md:pt-[180px] pb-[40px] md:pb-[60px] ${
        darkMode ? "bg-white text-black" : "bg-black text-white"
      }`}>

        {/* Card 1 */}
        <div className={`w-full md:w-[370px] rounded-[16px] p-6 sm:p-8 md:p-[40px] text-center ${
          darkMode ? "bg-white text-black" : "bg-black text-white"
        }`}>
          
          <h3 className={`font-bold text-[18px] sm:text-[20px] md:text-[22px] leading-snug ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>
            Need Help? Contact<br />With Our Hotline
          </h3>

          <div className={`flex justify-center my-5 sm:my-6 md:my-[30px] ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>
            
            <div className={`bg-gradient-to-br from-purple-500 to-pink-500 w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] rounded-full flex items-center justify-center ${
              darkMode ? "text-white" : "text-white"
            }`}>
              <FiPhone size={28} className="sm:hidden" />
              <FiPhone size={32} className="hidden sm:block" />
            </div>
          </div>

          <p className={`font-semibold text-[14px] sm:text-[15px] md:text-[16px] ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>
            +012 (345) 678 88
          </p>
        </div>


        {/* Card 2 */}
        <div className={`w-full md:w-[370px] rounded-[16px] p-6 sm:p-8 md:p-[40px] text-center ${
          darkMode ? "bg-white text-black" : "bg-black text-white"
        }`}>

          <h3 className={`font-bold text-[18px] sm:text-[20px] md:text-[22px] leading-snug ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>
            Need Help? Contact<br />With Our Hotline
          </h3>

          <div className={`flex justify-center my-5 sm:my-6 md:my-[30px] ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>
            
            <div className={`w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] rounded-full flex items-center justify-center ${
              darkMode ? "bg-[#312d57] text-white" : "bg-purple-100 text-black"
            }`}>
              <FiMapPin size={28} className="sm:hidden" />
              <FiMapPin size={32} className="hidden sm:block" />
            </div>
          </div>

          <p className={`font-semibold text-[14px] sm:text-[15px] md:text-[16px] ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>
            55 Main Street, 2nd<br />Block, 3rd Floor, New York
          </p>
        </div>


        {/* Card 3 */}
        <div className={`w-full md:w-[370px] rounded-[16px] p-6 sm:p-8 md:p-[40px] text-center ${
          darkMode ? "bg-white text-black" : "bg-black text-white"
        }`}>

          <h3 className={`font-bold text-[18px] sm:text-[20px] md:text-[22px] leading-snug ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>
            Need Help? Contact<br />With Our Hotline
          </h3>

          <div className={`flex justify-center my-5 sm:my-6 md:my-[30px] ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>
            
            <div className={`w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] rounded-full flex items-center justify-center ${
              darkMode ? "bg-[#272440] text-white" : "bg-purple-100 text-black"
            }`}>
              <FiMail size={28} className="sm:hidden" />
              <FiMail size={32} className="hidden sm:block" />
            </div>
          </div>

          <p className={`font-semibold text-[14px] sm:text-[15px] md:text-[16px] ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>
            hotlineinfo@gmail.com<br />www.bidzen.net
          </p>
        </div>

      </div>


      {/* ========================== Google Map ========================== */}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d27869.80319919648!2d73.1856247759547!3d33.733176346843514!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1789094695077!5m2!1sen!2s"
        className='w-full h-[250px] sm:h-[350px] md:h-[500px] allFullScreen'
      ></iframe>

      <br />


      {/* ========================== Send Message ========================== */}

      <div className={`border text-center px-4 sm:px-8 md:px-[60px] py-8 sm:py-10 md:py-[60px] border-solid ${
        darkMode
          ? "bg-[#1a1a2e] border-[#3a3a52] text-white"
          : "bg-white border-gray-200 text-black"
      }`}>

        <h2 className={`font-bold text-[24px] sm:text-[32px] md:text-[40px] ${
          darkMode ? "bg-[#1a1a2e] text-white" : "bg-white text-black"
        }`}>
          Send Us Message
        </h2>

        <p className={`text-[13px] sm:text-[14px] md:text-[16px] mt-[10px] ${
          darkMode ? "bg-[#1a1a2e] text-white" : "bg-white text-black"
        }`}>
          Most popular gaming digital nft market place
        </p>


        <div className={`w-full sm:w-[90%] md:w-[700px] mx-auto p-5 sm:p-7 md:p-10 flex flex-col gap-y-4 md:gap-y-[20px] border-solid border-[2px] md:border-[3px] rounded-[24px] sm:rounded-[35px] md:rounded-[50px] mt-6 md:mt-8 ${
          darkMode ? "border-white bg-[#1a1a2e]" : "border-black bg-white"
        }`}>

          <input
            type="text"
            placeholder='Your Full Name'
            className={`text-[14px] sm:text-[15px] px-4 sm:px-5 md:px-[25px] py-3 sm:py-4 md:py-[18px] rounded-[10px] outline-none w-full ${
              darkMode
                ? "bg-[#3a3a52] text-white"
                : "bg-gray-100 text-black"
            }`}
          />

          <input
            type="email"
            placeholder='Email Address'
            className={`text-[14px] sm:text-[15px] px-4 sm:px-5 md:px-[25px] py-3 sm:py-4 md:py-[18px] rounded-[10px] outline-none w-full ${
              darkMode
                ? "bg-[#3a3a52] text-white"
                : "bg-gray-100 text-black"
            }`}
          />

          <input
            type="text"
            placeholder='Subject'
            className={`text-[14px] sm:text-[15px] px-4 sm:px-5 md:px-[25px] py-3 sm:py-4 md:py-[18px] rounded-[10px] outline-none w-full ${
              darkMode
                ? "bg-[#3a3a52] text-white"
                : "bg-gray-100 text-black"
            }`}
          />

          <textarea
            placeholder='Write Message'
            rows={6}
            className={`text-[14px] sm:text-[15px] px-4 sm:px-5 md:px-[25px] py-3 sm:py-4 md:py-[18px] rounded-[10px] w-full ${
              darkMode
                ? "bg-[#3a3a52] text-white"
                : "bg-gray-100 text-black"
            }`}
          ></textarea>

          <button className='bg-[#7c3aed] text-white text-[14px] sm:text-[15px] md:text-[16px] py-3 sm:py-4 md:py-[18px] rounded-full flex items-center justify-center gap-x-[10px] w-full'>
            ➤ Send Message
          </button>

        </div>
      </div>


      {/* ========================== Newsletters ========================== */}

      <div className={`flex justify-center py-8 sm:py-10 md:py-[60px] px-4 ${
        darkMode ? "bg-white text-black" : "bg-black text-white"
      }`}>

        <div className='bg-[#7c3aed] w-full sm:w-[85%] md:w-[70%] rounded-[24px] px-5 sm:px-8 md:px-[50px] py-6 sm:py-8 md:py-[40px] flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden gap-y-5 md:gap-y-0'>

          <div className={`w-full md:w-auto text-center md:text-left ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>

            <h2 className='font-bold text-[22px] sm:text-[28px] md:text-[36px] text-white'>
              Newsletters
            </h2>

            <p className='text-[13px] sm:text-[14px] md:text-[16px] mt-[5px] text-white'>
              Most popular gaming digital nft market place
            </p>

            <br />

            <div className='bg-white w-full rounded-full flex items-center justify-between p-[6px]'>

              <input
                type="email"
                placeholder='Enter Email Address'
                className='bg-transparent text-black text-[12px] sm:text-[13px] md:text-[15px] px-3 sm:px-4 md:px-[20px] w-full outline-none'
              />

              <button className='bg-[#7c3aed] text-white text-[11px] sm:text-[12px] md:text-[14px] font-semibold px-4 sm:px-5 md:px-[25px] py-2.5 sm:py-3 md:py-[12px] rounded-full flex items-center gap-x-[8px] whitespace-nowrap'>
                Browse More
              </button>

            </div>
          </div>

          <div className={`hidden md:block absolute right-[20px] top-1/2 -translate-y-1/2 ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>
            <img
              src="token.png"
              alt=""
              className='w-[150px] h-[150px] lg:w-[200px] lg:h-[200px]'
            />
          </div>

        </div>

      </div>

    </>
  )
}

export default Contact