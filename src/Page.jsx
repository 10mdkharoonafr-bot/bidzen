import React from 'react'
import { FaStar } from 'react-icons/fa'

const Page = ({ darkMode }) => {
  return (
    <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>

      {/* ==========================Best Sellers Section ================ */}

      <div className={`w-[95%] sm:w-[90%] md:w-[80%] mx-auto px-5 sm:px-8 md:px-[48px] py-6 sm:py-8 md:py-[48px] mt-20 sm:mt-32 md:mt-[160px] rounded-[16px] ${
        darkMode ? "bg-[#1a1a2e] text-white" : "bg-white text-black"
      }`}>

        <div className='flex flex-col sm:flex-row items-center sm:items-center justify-between mb-6 sm:mb-[32px] gap-y-4'>

          <div className={`text-center sm:text-left ${
            darkMode ? "text-white" : "text-black"
          }`}>
            <h2 className={`font-bold text-[22px] sm:text-[26px] md:text-[32px] ${
              darkMode ? "text-white" : "text-black"
            }`}>
              Best Sellers
            </h2>

            <p className={`text-[12px] sm:text-[13px] mt-[4px] ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              Most popular gaming digital nft market place
            </p>
          </div>

          <button className='bg-[#ec4899] hover:bg-[#d6337f] text-white text-[12px] sm:text-[13px] font-semibold px-[16px] sm:px-[20px] py-[8px] sm:py-[10px] rounded-full flex items-center gap-x-[8px] transition-colors'>
            Explore More
          </button>

        </div>


        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-[10px] sm:gap-x-[14px] md:gap-x-[16px] gap-y-4'>


          {/* Card 1 */}
          <div className={`border rounded-[13px] p-[12px] sm:p-[14px] md:p-[16px] text-center ${
            darkMode
              ? "bg-[#252542] border-[#3a3a52] text-white"
              : "bg-gray-100 border-gray-200 text-black"
          }`}>

            <img src="person1.jpg" alt="Jason M. Stalls" className='w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] md:w-[72px] md:h-[72px] rounded-full mx-auto object-cover' />

            <h3 className={`font-bold text-[12px] sm:text-[13px] mt-[10px] sm:mt-[12px] ${
              darkMode ? "text-white" : "text-black"
            }`}>
              Jason M. Stalls
            </h3>

            <p className={`text-[10px] sm:text-[11px] mt-[2px] ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              523.7 ETH
            </p>

            <button className={`border text-[10px] sm:text-[11px] font-semibold px-[14px] sm:px-[20px] py-[4px] sm:py-[5px] rounded-full mt-[10px] sm:mt-[12px] transition-colors ${
              darkMode
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white"
            }`}>
              Follow
            </button>
          </div>


          {/* Card 2 */}
          <div className={`border rounded-[13px] p-[12px] sm:p-[14px] md:p-[16px] text-center ${
            darkMode
              ? "bg-[#252542] border-[#3a3a52] text-white"
              : "bg-gray-100 border-gray-200 text-black"
          }`}>

            <img src="person1.jpg" alt="Frank F. Chan" className='w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] md:w-[72px] md:h-[72px] rounded-full mx-auto object-cover' />

            <h3 className={`font-bold text-[12px] sm:text-[13px] mt-[10px] sm:mt-[12px] ${
              darkMode ? "text-white" : "text-black"
            }`}>
              Frank F. Chan
            </h3>

            <p className={`text-[10px] sm:text-[11px] mt-[2px] ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              523.7 ETH
            </p>

            <button className={`border text-[10px] sm:text-[11px] font-semibold px-[14px] sm:px-[20px] py-[4px] sm:py-[5px] rounded-full mt-[10px] sm:mt-[12px] transition-colors ${
              darkMode
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white"
            }`}>
              Follow
            </button>
          </div>


          {/* Card 3 */}
          <div className={`border rounded-[13px] p-[12px] sm:p-[14px] md:p-[16px] text-center ${
            darkMode
              ? "bg-[#252542] border-[#3a3a52] text-white"
              : "bg-gray-100 border-gray-200 text-black"
          }`}>

            <img src="person1.jpg" alt="Robert George" className='w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] md:w-[72px] md:h-[72px] rounded-full mx-auto object-cover' />

            <h3 className={`font-bold text-[12px] sm:text-[13px] mt-[10px] sm:mt-[12px] ${
              darkMode ? "text-white" : "text-black"
            }`}>
              Robert George
            </h3>

            <p className={`text-[10px] sm:text-[11px] mt-[2px] ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              523.7 ETH
            </p>

            <button className={`border text-[10px] sm:text-[11px] font-semibold px-[14px] sm:px-[20px] py-[4px] sm:py-[5px] rounded-full mt-[10px] sm:mt-[12px] transition-colors ${
              darkMode
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white"
            }`}>
              Follow
            </button>
          </div>


          {/* Card 4 */}
          <div className={`border rounded-[13px] p-[12px] sm:p-[14px] md:p-[16px] text-center ${
            darkMode
              ? "bg-[#252542] border-[#3a3a52] text-white"
              : "bg-gray-100 border-gray-200 text-black"
          }`}>

            <img src="person1.jpg" alt="Frank N. Glisson" className='w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] md:w-[72px] md:h-[72px] rounded-full mx-auto object-cover' />

            <h3 className={`font-bold text-[12px] sm:text-[13px] mt-[10px] sm:mt-[12px] ${
              darkMode ? "text-white" : "text-black"
            }`}>
              Frank N. Glisson
            </h3>

            <p className={`text-[10px] sm:text-[11px] mt-[2px] ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              523.7 ETH
            </p>

            <button className={`border text-[10px] sm:text-[11px] font-semibold px-[14px] sm:px-[20px] py-[4px] sm:py-[5px] rounded-full mt-[10px] sm:mt-[12px] transition-colors ${
              darkMode
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white"
            }`}>
              Follow
            </button>
          </div>


          {/* Card 5 */}
          <div className={`border rounded-[13px] p-[12px] sm:p-[14px] md:p-[16px] text-center ${
            darkMode
              ? "bg-[#252542] border-[#3a3a52] text-white"
              : "bg-gray-100 border-gray-200 text-black"
          }`}>

            <img src="person1.jpg" alt="Michel ZonaS" className='w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] md:w-[72px] md:h-[72px] rounded-full mx-auto object-cover' />

            <h3 className={`font-bold text-[12px] sm:text-[13px] mt-[10px] sm:mt-[12px] ${
              darkMode ? "text-white" : "text-black"
            }`}>
              Michel ZonaS
            </h3>

            <p className={`text-[10px] sm:text-[11px] mt-[2px] ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              523.7 ETH
            </p>

            <button className={`border text-[10px] sm:text-[11px] font-semibold px-[14px] sm:px-[20px] py-[4px] sm:py-[5px] rounded-full mt-[10px] sm:mt-[12px] transition-colors ${
              darkMode
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white"
            }`}>
              Follow
            </button>
          </div>


          {/* Card 6 */}
          <div className={`border rounded-[13px] p-[12px] sm:p-[14px] md:p-[16px] text-center ${
            darkMode
              ? "bg-[#252542] border-[#3a3a52] text-white"
              : "bg-gray-100 border-gray-200 text-black"
          }`}>

            <img src="person1.jpg" alt="Mizanur Mango" className='w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] md:w-[72px] md:h-[72px] rounded-full mx-auto object-cover' />

            <h3 className={`font-bold text-[12px] sm:text-[13px] mt-[10px] sm:mt-[12px] ${
              darkMode ? "text-white" : "text-black"
            }`}>
              Mizanur Mango
            </h3>

            <p className={`text-[10px] sm:text-[11px] mt-[2px] ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              523.7 ETH
            </p>

            <button className={`border text-[10px] sm:text-[11px] font-semibold px-[14px] sm:px-[20px] py-[4px] sm:py-[5px] rounded-full mt-[10px] sm:mt-[12px] transition-colors ${
              darkMode
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white"
            }`}>
              Follow
            </button>
          </div>

        </div>
      </div>


      {/* ==========================Top Sellers Section ================ */}

      <div className={`px-4 sm:px-8 md:px-[60px] py-8 sm:py-10 md:py-[60px] ${
        darkMode ? "bg-[#1a1a2e] text-white" : "bg-white text-black"
      }`}>

        <div className='flex flex-col sm:flex-row items-center sm:items-center justify-between mb-6 sm:mb-[40px] gap-y-4'>

          <div className={`text-center sm:text-left ${
            darkMode ? "text-white" : "text-black"
          }`}>
            <h2 className='font-bold text-[24px] sm:text-[30px] md:text-[40px]'>
              Top Sellers
            </h2>

            <p className={`text-[13px] sm:text-[14px] md:text-[16px] mt-[5px] ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              Most popular gaming digital nft market place
            </p>
          </div>

          <button className='bg-gradient-to-r from-purple-500 to-purple-700 text-white text-[13px] sm:text-[14px] md:text-[16px] font-semibold px-[18px] sm:px-[22px] md:px-[25px] py-[10px] sm:py-[11px] md:py-[12px] rounded-full flex items-center gap-x-[10px]'>
            ➤ Explore More
          </button>

        </div>


        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[15px] md:gap-x-[20px] gap-y-[15px] md:gap-y-[20px]'>


          {/* Top Seller 1 */}
          <div className={`rounded-[16px] p-[16px] sm:p-[18px] md:p-[20px] flex items-center ${
            darkMode ? "bg-[#252542] text-white" : "bg-gray-100 text-black"
          }`}>
            <img src="person1.jpg" alt="Jason M. Stalls" className='w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] md:w-[70px] md:h-[70px] rounded-full object-cover' />

            <div className={`ml-[12px] sm:ml-[15px] ${
              darkMode ? "text-white" : "text-black"
            }`}>
              <h3 className='font-bold text-[14px] sm:text-[15px] md:text-[16px]'>
                Jason M. Stalls
              </h3>

              <p className={`text-[12px] sm:text-[13px] mt-[2px] ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}>
                523.7 ETH
              </p>

              <div className='flex text-[12px] sm:text-[13px] text-yellow-400 mt-[5px] gap-x-[2px]'>
                <FaStar /><FaStar /><FaStar /><FaStar />
                <FaStar className={darkMode ? 'text-white' : 'text-gray-400'} />
              </div>
            </div>
          </div>


          {/* Top Seller 2 */}
          <div className={`rounded-[16px] p-[16px] sm:p-[18px] md:p-[20px] flex items-center ${
            darkMode ? "bg-[#252542] text-white" : "bg-gray-100 text-black"
          }`}>
            <img src="person2.jpg" alt="Frank F. Chan" className='w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] md:w-[70px] md:h-[70px] rounded-full object-cover' />

            <div className={`ml-[12px] sm:ml-[15px] ${
              darkMode ? "text-white" : "text-black"
            }`}>
              <h3 className='font-bold text-[14px] sm:text-[15px] md:text-[16px]'>
                Frank F. Chan
              </h3>

              <p className={`text-[12px] sm:text-[13px] mt-[2px] ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}>
                523.7 ETH
              </p>

              <div className='flex text-[12px] sm:text-[13px] text-yellow-400 mt-[5px] gap-x-[2px]'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          </div>


          {/* Top Seller 3 */}
          <div className={`rounded-[16px] p-[16px] sm:p-[18px] md:p-[20px] flex items-center ${
            darkMode ? "bg-[#252542] text-white" : "bg-gray-100 text-black"
          }`}>
            <img src="person3.jpg" alt="Robert George" className='w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] md:w-[70px] md:h-[70px] rounded-full object-cover' />

            <div className={`ml-[12px] sm:ml-[15px] ${
              darkMode ? "text-white" : "text-black"
            }`}>
              <h3 className='font-bold text-[14px] sm:text-[15px] md:text-[16px]'>
                Robert George
              </h3>

              <p className={`text-[12px] sm:text-[13px] mt-[2px] ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}>
                523.7 ETH
              </p>

              <div className='flex text-[12px] sm:text-[13px] text-yellow-400 mt-[5px] gap-x-[2px]'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          </div>


          {/* Top Seller 4 */}
          <div className={`rounded-[16px] p-[16px] sm:p-[18px] md:p-[20px] flex items-center ${
            darkMode ? "bg-[#252542] text-white" : "bg-gray-100 text-black"
          }`}>
            <img src="person4.jpg" alt="Frank N. Glisson" className='w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] md:w-[70px] md:h-[70px] rounded-full object-cover' />

            <div className={`ml-[12px] sm:ml-[15px] ${
              darkMode ? "text-white" : "text-black"
            }`}>
              <h3 className='font-bold text-[14px] sm:text-[15px] md:text-[16px]'>
                Frank N. Glisson
              </h3>

              <p className={`text-[12px] sm:text-[13px] mt-[2px] ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}>
                523.7 ETH
              </p>

              <div className='flex text-[12px] sm:text-[13px] text-yellow-400 mt-[5px] gap-x-[2px]'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          </div>


          {/* Top Seller 5 */}
          <div className={`rounded-[16px] p-[16px] sm:p-[18px] md:p-[20px] flex items-center ${
            darkMode ? "bg-[#252542] text-white" : "bg-gray-100 text-black"
          }`}>
            <img src="person5.jpg" alt="Jason M. Stalls" className='w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] md:w-[70px] md:h-[70px] rounded-full object-cover' />

            <div className={`ml-[12px] sm:ml-[15px] ${
              darkMode ? "text-white" : "text-black"
            }`}>
              <h3 className='font-bold text-[14px] sm:text-[15px] md:text-[16px]'>
                Jason M. Stalls
              </h3>

              <p className={`text-[12px] sm:text-[13px] mt-[2px] ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}>
                523.7 ETH
              </p>

              <div className='flex text-[12px] sm:text-[13px] text-yellow-400 mt-[5px] gap-x-[2px]'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          </div>


          {/* Top Seller 6 */}
          <div className={`rounded-[16px] p-[16px] sm:p-[18px] md:p-[20px] flex items-center ${
            darkMode ? "bg-[#252542] text-white" : "bg-gray-100 text-black"
          }`}>
            <img src="person6.jpg" alt="Mizanur Mango" className='w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] md:w-[70px] md:h-[70px] rounded-full object-cover' />

            <div className={`ml-[12px] sm:ml-[15px] ${
              darkMode ? "text-white" : "text-black"
            }`}>
              <h3 className='font-bold text-[14px] sm:text-[15px] md:text-[16px]'>
                Mizanur Mango
              </h3>

              <p className={`text-[12px] sm:text-[13px] mt-[2px] ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}>
                523.7 ETH
              </p>

              <div className='flex text-[12px] sm:text-[13px] text-yellow-400 mt-[5px] gap-x-[2px]'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* ==========================Newsletters Section ================ */}

      <div className={`flex justify-center py-8 sm:py-10 md:py-[60px] px-4 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}>

        <div className='bg-[#7c3aed] w-full sm:w-[85%] md:w-[70%] rounded-[24px] px-5 sm:px-8 md:px-[50px] py-6 sm:py-8 md:py-[40px] flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden gap-y-5 md:gap-y-0'>

          <div className='w-full md:w-auto text-center md:text-left'>

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

          <div className='hidden md:block absolute right-[20px] top-1/2 -translate-y-1/2'>

            <img
              src="token.png"
              alt=""
              className='w-[150px] h-[150px] lg:w-[200px] lg:h-[200px]'
            />

          </div>

        </div>
      </div>

    </div>
  )
}

export default Page