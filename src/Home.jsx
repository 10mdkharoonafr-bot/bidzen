import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import './App.css'

const Home = ({ darkMode }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const prevSlide = () => {
    setSlide((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <>
      {/* ========================== Main Home ========================== */}
      <div className={`w-full justify-center items-center relative ${
        darkMode ? "bg-white text-black" : "bg-black text-white"
      }`}>

        {/* ==================== landing page 1 ==================== */}
        {slide === 0 && (
          <div className={`flex flex-col md:flex-row w-[90%] 
          mx-auto mt-[70px] min-h-[80vh] md:h-[90vh] gap-y-8 md:gap-x-[100px] 
          items-center justify-center py-10 md:py-0 ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>

            <div className='w-full md:w-[50%] lg:w-[40%] text-center md:text-left'>

              <h2 className='font-bold text-[28px] sm:text-[38px] md:text-[48px] lg:text-[60px]'>
                <span className='b'>Discover and</span>
                <br className='hidden md:block' />
                <span className=''>collect your</span> favorite
                <br className='hidden md:block' />
                digital NTFs
              </h2>

              <p className='text-[14px] sm:text-[16px] md:text-[18px] mt-4'>
                Quis autem vel eum iure reprehenderit qui in ea voluptates esse quam nihil molestiae consequatur veillum
              </p>

              <br />

              <div className={`flex gap-x-4 sm:gap-x-6 w-full justify-center md:justify-start ${
                darkMode ? "bg-white text-black" : "bg-black text-white"
              }`}>

                <button className='bg-white text-black rounded-full px-5 py-3 text-sm sm:text-base font-semibold'>
                  Explore More
                </button>

                <button className='bg-white text-black rounded-full px-5 py-3 text-sm sm:text-base font-semibold'>
                  Create Now
                </button>

              </div>
            </div>

            {/* ================= image right side First slide ================= */}
            <div className={`hidden sm:hidden md:block lg:block ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}>
              <img
                src="img-slider-1.png"
                alt="img-slider-1"
                className='slide1pic  w-[280px] h-[280px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] object-contain'
              />
            </div>

          </div>
        )}

        {/* =========================== landing page 2 =============================== */}
        {slide === 1 && (
          <div className={`flex flex-col md:flex-row w-[90%] mt-[70px] min-h-[80vh] md:h-[90vh] gap-y-8 md:gap-x-[100px] items-center justify-center py-10 md:py-0 ${
            darkMode ?"bg-white text-black" : "bg-black text-white"
          }`}>

            <div className={`w-full md:w-[40%] text-center md:text-left ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}>

              <h2 className='font-bold text-[28px] sm:text-[38px] md:text-[48px] lg:text-[60px]'>
                Discover and collect your favorite digital NFTS
              </h2>

              <p className='text-[14px] sm:text-[16px] md:text-[18px] mt-4'>
                Quis autem vel eum iure reprehenderit qui in ea voluptates esse quam nihil molestiae consequatur veillum
              </p>

              <br />

              <div className={`flex gap-x-4 sm:gap-x-6 w-full justify-center md:justify-start ${
                darkMode ? "bg-white text-black" : "bg-black text-white"
              }`}>

                <button className='bg-white text-black rounded-full px-5 py-3 text-sm sm:text-base font-semibold'>
                  Explore More
                </button>

                <button className='bg-white text-black rounded-full px-5 py-3 text-sm sm:text-base font-semibold'>
                  Create Now
                </button>

              </div>
            </div>

            {/* Left column */}
            <div className={`hidden sm:flex flex-col gap-y-4 md:gap-y-[25px] ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}>

              <div className='w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[270px] md:h-[270px] rounded-[24px] flex items-center justify-center bg-[#4fc3f7]'>
                <img
                  src="img-slider-3.jpg"
                  alt="rocket"
                  className='w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] md:w-[240px] md:h-[240px] object-contain'
                />
              </div>

              <div className={`w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[270px] md:h-[270px] rounded-[24px] flex items-center justify-center ${
                darkMode ? "bg-white text-black" : "bg-black text-white"
              }`}>
                <img
                  src="img-slider-4.jpg"
                  alt="bear"
                  className='w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] md:w-[240px] md:h-[240px] object-contain'
                />
              </div>

            </div>

            {/* Right column */}
            <div className={`hidden sm:block md:mt-[100px] ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}>

              <div className={`w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[270px] md:h-[270px] rounded-[24px] flex items-center justify-center ${
                darkMode ? "bg-[#2dd4bf]" : "bg-teal-200"
              }`}>
                <img
                  src="img-slider-3.jpg"
                  alt="target"
                  className='w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] md:w-[240px] md:h-[240px] object-contain'
                />
              </div>

            </div>

          </div>
        )}

        {/* ================= Slider Navigation Buttons =========== */}

        <button
          onClick={prevSlide}
          className={`absolute left-[10px] sm:left-[20px] top-1/2 w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] rounded-full flex items-center justify-center text-[18px] sm:text-[24px] font-bold ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={nextSlide}
          className={`absolute right-[10px] sm:right-[20px] top-1/2 -translate-y-1/2 
          w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] rounded-full flex items-center justify-center 
          text-[18px] sm:text-[24px] font-bold ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <FaArrowRight />
        </button>

      </div>

      {/* ========================== mini card ========================== */}

      <div className={`w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-[60px] gap-y-4 py-6 ${
        darkMode ? "bg-white text-black" : "bg-black text-white"
      }`}>

        <div className={`text-center sm:text-left ${
          darkMode ? "bg-white text-black" : "bg-black text-white"
        }`}>

          <h2 className='text-[22px] sm:text-[32px] md:text-[40px] flex items-center gap-x-3 md:gap-x-[15px]'>
            <img
              src="live_icon.jpg"
              alt="live icon"
              className='w-[24px] h-[24px] sm:w-[35px] sm:h-[35px] md:w-[45px] md:h-[45px] rounded-full'
            />
            Live Auctions
          </h2>

          <p className='text-gray-400 text-[12px] sm:text-[14px] md:text-[16px]'>
            Most popular gaming digital nft market place
          </p>

        </div>

        <div className={`flex justify-center items-center gap-x-4 ${
          darkMode ? "bg-white text-black" : "bg-black text-white"
        }`}>

          <button onClick={prevSlide} className='bg-[#2a2a2a] w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] rounded-full flex items-center justify-center'>
            <FaArrowLeft size={16} className="sm:hidden" />
            <FaArrowLeft size={18} className="hidden sm:block" />
          </button>

          <button onClick={nextSlide} className={`bg-gradient-to-r from-purple-500 to-purple-700 w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] rounded-full flex items-center justify-center ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>
            <FaArrowRight size={16} className="sm:hidden" />
            <FaArrowRight size={18} className="hidden sm:block" />
          </button>

        </div>
      </div>

      {/* ================== card slider ================== */}

      <div className={`flex flex-wrap justify-center gap-[15px] sm:gap-[20px] px-4 ${
        darkMode ? "bg-white text-black" : "bg-black text-white"
      }`}>

        {/* ================= Card 1 ================= */}
        <div className={`bg-[#181818] w-[260px] sm:w-[270px] md:w-[280px] rounded-[16px] overflow-hidden ${
          darkMode ? "bg-white text-black" : "bg-black text-white"
        }`}>

          <div className={`relative h-[180px] sm:h-[200px] ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>

            <span className='bg-purple-600 text-white text-[11px] sm:text-[12px] px-3 py-1 rounded-full absolute top-3 left-1/2 -translate-x-1/2 font-semibold z-10'>
              4:23:57:48<time/>
            </span>

            <img
              src="rocket.jpg"
              alt="nft"
              className='w-full h-full object-cover'
            />

            <button className='absolute bottom-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[11px] sm:text-[12px] px-4 py-2 rounded-full flex items-center gap-x-1 whitespace-nowrap'>
              ➤ Place Bid
            </button>

            <span className='absolute bottom-3 right-3 bg-purple-800 text-white text-[10px] px-2 py-1 rounded-full'>
              BSC
            </span>

          </div>

          <div className={`p-4 ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>

            <p className={`font-bold text-[14px] sm:text-[15px] leading-snug ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}>
              "3D Space Rocket With Smoke Premium"
            </p>

            <div className='flex items-center gap-x-2 mt-3'>
              <img
                src="person1.jpg"
                alt="Daniel M. Bivens"
                className='w-[24px] h-[24px] rounded-full object-cover'
              />

              <div>
                <p className={`text-[13px] font-semibold ${
                  darkMode ?"bg-white text-black" : "bg-black text-white"
                }`}>
                  Daniel M. Bivens
                </p>

                <p className='text-gray-400 text-[11px]'>Creator</p>
              </div>
            </div>

            <div className={`mt-3 ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}>

              <p className='text-gray-400 text-[11px] sm:text-[12px]'>
                Current Bid
              </p>

              <p className={`text-[13px] sm:text-[14px] ${
                darkMode ? "bg-white text-black" : "bg-black text-white"
              }`}>
                <span className='font-bold'>5.23 ETH</span> = $32.420
              </p>

            </div>

          </div>
        </div>

        {/* ================= Card 2 ================= */}
        <div className={`bg-[#181818] w-[260px] sm:w-[270px] md:w-[280px] rounded-[16px] overflow-hidden ${
          darkMode ? "bg-white text-black" : "bg-black text-white"
        }`}>

          <div className={`relative h-[180px] sm:h-[200px] ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>

            <span className='bg-purple-600 text-white text-[11px] sm:text-[12px] px-3 py-1 rounded-full absolute top-3 left-1/2 -translate-x-1/2 font-semibold z-10'>
              4:23:57:48
            </span>

            <img
              src="rocket2.jpg"
              alt="nft"
              className='w-full h-full object-cover'
            />

            <button className='absolute bottom-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[11px] sm:text-[12px] px-4 py-2 rounded-full flex items-center gap-x-1 whitespace-nowrap'>
              ➤ Place Bid
            </button>

            <span className='absolute bottom-3 right-3 bg-purple-800 text-white text-[10px] px-2 py-1 rounded-full'>
              BSC
            </span>

          </div>

          <div className={`p-4 ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>

            <p className={`font-bold text-[14px] sm:text-[15px] leading-snug ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}>
              "3D Space Rocket With Smoke Premium"
            </p>

            <div className='flex items-center gap-x-2 mt-3'>
              <img
                src="person1.jpg"
                alt="Daniel M. Bivens"
                className='w-[24px] h-[24px] rounded-full object-cover'
              />

              <div>
                <p className={`text-[13px] font-semibold ${
                  darkMode ? "bg-white text-black" : "bg-black text-white"
                }`}>
                  Daniel M. Bivens
                </p>

                <p className='text-gray-400 text-[11px]'>Creator</p>
              </div>
            </div>

            <div className={`mt-3 ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}>

              <p className='text-gray-400 text-[11px] sm:text-[12px]'>
                Current Bid
              </p>

              <p className={`text-[13px] sm:text-[14px] ${
                darkMode ? "bg-white text-black" : "bg-black text-white"
              }`}>
                <span className='font-bold'>5.23 ETH</span> = $32.420
              </p>

            </div>

          </div>
        </div>

        {/* ================= Card 3 ================= */}
        <div className={`bg-[#181818] w-[260px] sm:w-[270px] md:w-[280px] rounded-[16px] overflow-hidden ${
          darkMode ? "bg-white text-black" : "bg-black text-white"
        }`}>

          <div className='relative h-[180px] sm:h-[200px]'>

            <span className='bg-purple-600 text-white text-[11px] sm:text-[12px] px-3 py-1 rounded-full absolute top-3 left-1/2 -translate-x-1/2 font-semibold z-10'>
              4:23:57:48
            </span>

            <img
              src="wallet.jpg"
              alt="nft"
              className='w-full h-full object-cover'
            />

            <button className='absolute bottom-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[11px] sm:text-[12px] px-4 py-2 rounded-full flex items-center gap-x-1 whitespace-nowrap'>
              ➤ Place Bid
            </button>

            <span className='absolute bottom-3 right-3 bg-purple-800 text-white text-[10px] px-2 py-1 rounded-full'>
              BSC
            </span>

          </div>

          <div className={`p-4 ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>

            <p className={`font-bold text-[14px] sm:text-[15px] leading-snug ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}>
              "3D Space Rocket With Smoke Premium"
            </p>

            <div className='flex items-center gap-x-2 mt-3'>
              <img
                src="person1.jpg"
                alt="Daniel M. Bivens"
                className='w-[24px] h-[24px] rounded-full object-cover'
              />

              <div>
                <p className={`text-[13px] font-semibold ${
                  darkMode ? "bg-white text-black" : "bg-black text-white"
                }`}>
                  Daniel M. Bivens
                </p>

                <p className='text-gray-400 text-[11px]'>Creator</p>
              </div>
            </div>

            <div className={`mt-3 ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}>

              <p className='text-gray-400 text-[11px] sm:text-[12px]'>
                Current Bid
              </p>

              <p className={`text-[13px] sm:text-[14px] ${
                darkMode ? "bg-white text-black" : "bg-black text-white"
              }`}>
                <span className='font-bold'>5.23 ETH</span> = $32.420
              </p>

            </div>

          </div>
        </div>

        {/* ================= Card 4 ================= */}
        <div className={`bg-[#181818] w-[260px] sm:w-[270px] md:w-[280px] rounded-[16px] overflow-hidden ${
          darkMode ? "bg-white text-black" : "bg-black text-white"
        }`}>

          <div className='relative h-[180px] sm:h-[200px]'>

            <span className='bg-purple-600 text-white text-[11px] sm:text-[12px] px-3 py-1 rounded-full absolute top-3 left-1/2 -translate-x-1/2 font-semibold z-10'>
              4:23:57:48
            </span>

            <img
              src="cointree.jpg"
              alt="nft"
              className='w-full h-full object-cover'
            />

            <button className='absolute bottom-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[11px] sm:text-[12px] px-4 py-2 rounded-full flex items-center gap-x-1 whitespace-nowrap'>
              ➤ Place Bid
            </button>

            <span className='absolute bottom-3 right-3 bg-purple-800 text-white text-[10px] px-2 py-1 rounded-full'>
              BSC
            </span>

          </div>

          <div className={`p-4 ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>

            <p className={`font-bold text-[14px] sm:text-[15px] leading-snug ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}>
              "3D Space Rocket With Smoke Premium"
            </p>

            <div className='flex items-center gap-x-2 mt-3'>
              <img
                src="person1.jpg"
                alt="Daniel M. Bivens"
                className='w-[24px] h-[24px] rounded-full object-cover'
              />

              <div>
                <p className={`text-[13px] font-semibold ${
                  darkMode ? "bg-white text-black" : "bg-black text-white"
                }`}>
                  Daniel M. Bivens
                </p>

                <p className='text-gray-400 text-[11px]'>Creator</p>
              </div>
            </div>

            <div className={`mt-3 ${
              darkMode ?"bg-white text-black" : "bg-black text-white"
            }`}>

              <p className='text-gray-400 text-[11px] sm:text-[12px]'>
                Current Bid
              </p>

              <p className={`text-[13px] sm:text-[14px] ${
                darkMode ? "bg-white text-black" : "bg-black text-white"
              }`}>
                <span className='font-bold'>5.23 ETH</span> = $32.420
              </p>

            </div>

          </div>
        </div>

      </div>

      {/* ========================================== latest collection ========================== */}

      <div className={`px-4 sm:px-[30px] md:px-[60px] py-[40px] md:py-[60px] mb-16 ${
        darkMode ? "bg-white text-black" : "bg-black text-white"
      }`}>

        <div className='flex flex-col sm:flex-row items-center justify-between mb-[30px] gap-y-4'>

          <div className='text-center sm:text-left'>

            <h2 className='font-bold text-[24px] sm:text-[30px] md:text-[36px]'>
              Latest Collections
            </h2>

            <p className='text-gray-400 text-[13px] md:text-[15px] mt-[5px]'>
              Most popular gaming digital nft market place
            </p>

          </div>

          <div className='flex gap-x-3'>

            <button className='w-[38px] h-[38px] rounded-full bg-[#2a2a2a] flex items-center justify-center'>
              <FaArrowLeft size={16} />
            </button>

            <button className='w-[38px] h-[38px] rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center text-white'>
              <FaArrowRight size={16} />
            </button>

          </div>

        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[15px] md:gap-[20px]'>

          {/* Latest Card 1 */}
          <div className={`rounded-[16px] overflow-hidden ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>

            <img
              src="head.jpg"
              alt="statue"
              className='w-full h-[200px] object-cover'
            />

            <div className='p-4'>

              <h3 className='font-bold text-[14px] leading-snug'>
                "3D Space Rocket With Smoke Premium"
              </h3>

              <div className='flex items-center gap-x-2 mt-3'>
                <img
                  src="person1.jpg"
                  alt="Daniel M. Bivens"
                  className='w-[28px] h-[28px] rounded-full object-cover'
                />

                <p className='font-semibold text-[13px]'>
                  Daniel M. Bivens
                </p>
              </div>

            </div>
          </div>

          {/* Latest Card 2 */}
          <div className={`rounded-[16px] overflow-hidden ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>

            <img
              src="statue2.jpg"
              alt="3D Space Rocket"
              className='w-full h-[200px] object-cover'
            />

            <div className='p-4'>

              <h3 className='font-bold text-[14px] leading-snug'>
                "Multi-purpose 3D Space Rocket With Animate Real Special Smoke Premium Quality Gaming"
              </h3>

              <div className='flex items-center justify-between mt-3'>

                <div className='flex items-center gap-x-2'>
                  <img
                    src="person1.jpg"
                    alt="Daniel M. Bivens"
                    className='w-[28px] h-[28px] rounded-full object-cover'
                  />

                  <p className='font-semibold text-[13px]'>
                    Daniel M. Bivens
                  </p>
                </div>

                <span className='bg-pink-600 text-white text-[11px] px-2 py-1 rounded-full'>
                  ❤ 152k
                </span>

              </div>

            </div>
          </div>

          {/* Latest Card 3 */}
          <div className={`rounded-[16px] overflow-hidden ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>

            <img
              src="spacefood.jpg"
              alt="3D Space Rocket"
              className='w-full h-[200px] object-cover'
            />

            <div className='p-4'>

              <h3 className='font-bold text-[14px] leading-snug'>
                "3D Space Rocket With Smoke Premium"
              </h3>

              <div className='flex items-center gap-x-2 mt-3'>

                <img
                  src="person1.jpg"
                  alt="Daniel M. Bivens"
                  className='w-[28px] h-[28px] rounded-full object-cover'
                />

                <p className='font-semibold text-[13px]'>
                  Daniel M. Bivens
                </p>

              </div>

            </div>
          </div>

          {/* Latest Card 4 */}
          <div className={`rounded-[16px] overflow-hidden ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>

            <img
              src="hand.jpg"
              alt="3D Space Rocket"
              className='w-full h-[200px] object-cover'
            />

            <div className='p-4'>

              <h3 className='font-bold text-[14px] leading-snug'>
                "3D Space Rocket With Smoke Premium"
              </h3>

              <div className='flex items-center gap-x-2 mt-3'>

                <img
                  src="person1.jpg"
                  alt="Daniel M. Bivens"
                  className='w-[28px] h-[28px] rounded-full object-cover'
                />

                <p className='font-semibold text-[13px]'>
                  Daniel M. Bivens
                </p>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ============================================= Best Sellers Section ================ */}

      <div className={`mx-4 sm:mx-8 md:mx-[40px] rounded-[24px] px-5 sm:px-8 md:px-[50px] py-8 sm:py-10 md:py-[50px] mb-16 ${
        darkMode ? "bg-white text-black" : "bg-black text-white"
      }`}>

        <div className='flex flex-col sm:flex-row items-center justify-between mb-[30px] gap-y-4'>

          <div className='text-center sm:text-left'>

            <h2 className='font-bold text-[24px] sm:text-[30px] md:text-[36px]'>
              Best Sellers
            </h2>

            <p className='text-gray-400 text-[13px] md:text-[15px] mt-[5px]'>
              Most popular gaming digital nft market place
            </p>

          </div>

          <button className='bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[13px] md:text-[14px] font-semibold px-5 py-3 rounded-full flex items-center gap-x-2'>
            ➤ Explore More
          </button>

        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-[12px] md:gap-x-[20px] gap-y-6'>

          {/* Seller 1 */}
          <div className='flex flex-col items-center'>

            <img
              src="person1.jpg"
              alt="Jason M. Stalls"
              className='w-[65px] h-[65px] sm:w-[80px] sm:h-[80px] rounded-full object-cover'
            />

            <h3 className='font-bold text-[13px] sm:text-[15px] mt-3'>
              Jason M. Stalls
            </h3>

            <p className='text-gray-400 text-[11px] sm:text-[12px] mt-[2px]'>
              523.7 ETH
            </p>

            <button className={`border text-[11px] sm:text-[13px] font-semibold px-4 sm:px-5 py-1 rounded-full mt-3 ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}>
              Follow
            </button>

          </div>

          {/* Seller 2 */}
          <div className='flex flex-col items-center'>

            <img
              src="person1.jpg"
              alt="Frank F. Chan"
              className='w-[65px] h-[65px] sm:w-[80px] sm:h-[80px] rounded-full object-cover'
            />

            <h3 className='font-bold text-[13px] sm:text-[15px] mt-3'>
              Frank F. Chan
            </h3>

            <p className='text-gray-400 text-[11px] sm:text-[12px] mt-[2px]'>
              523.7 ETH
            </p>

            <button className={`border text-[11px] sm:text-[13px] font-semibold px-4 sm:px-5 py-1 rounded-full mt-3 ${
              darkMode ?"bg-white text-black" : "bg-black text-white" 
            }`}>
              Follow
            </button>

          </div>

          {/* Seller 3 */}
          <div className='flex flex-col items-center'>

            <img
              src="person1.jpg"
              alt="Robert George"
              className='w-[65px] h-[65px] sm:w-[80px] sm:h-[80px] rounded-full object-cover'
            />

            <h3 className='font-bold text-[13px] sm:text-[15px] mt-3'>
              Robert George
            </h3>

            <p className='text-gray-400 text-[11px] sm:text-[12px] mt-[2px]'>
              523.7 ETH
            </p>

            <button className={`border text-[11px] sm:text-[13px] font-semibold px-4 sm:px-5 py-1 rounded-full mt-3 ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}>
              Follow
            </button>

          </div>

          {/* Seller 4 */}
          <div className='flex flex-col items-center'>

            <img
              src="person1.jpg"
              alt="Frank N. Glisson"
              className='w-[65px] h-[65px] sm:w-[80px] sm:h-[80px] rounded-full object-cover'
            />

            <h3 className='font-bold text-[13px] sm:text-[15px] mt-3'>
              Frank N. Glisson
            </h3>

            <p className='text-gray-400 text-[11px] sm:text-[12px] mt-[2px]'>
              523.7 ETH
            </p>

            <button className='bg-gradient-to-r from-purple-500 to-purple-700 text-white text-[11px] sm:text-[13px] font-semibold px-4 sm:px-5 py-1 rounded-full mt-3'>
              Follow
            </button>

          </div>

          {/* Seller 5 */}
          <div className='flex flex-col items-center'>

            <img
              src="person1.jpg"
              alt="Michel ZonaS"
              className='w-[65px] h-[65px] sm:w-[80px] sm:h-[80px] rounded-full object-cover'
            />

            <h3 className='font-bold text-[13px] sm:text-[15px] mt-3'>
              Michel ZonaS
            </h3>

            <p className='text-gray-400 text-[11px] sm:text-[12px] mt-[2px]'>
              523.7 ETH
            </p>

            <button className={`border text-[11px] sm:text-[13px] font-semibold px-4 sm:px-5 py-1 rounded-full mt-3 ${
              darkMode ?"bg-white text-black" : "bg-black text-white"
            }`}>
              Follow
            </button>

          </div>

          {/* Seller 6 */}
          <div className='flex flex-col items-center'>

            <img
              src="person1.jpg"
              alt="Mizanur Mango"
              className='w-[65px] h-[65px] sm:w-[80px] sm:h-[80px] rounded-full object-cover'
            />

            <h3 className='font-bold text-[13px] sm:text-[15px] mt-3'>
              Mizanur Mango
            </h3>

            <p className='text-gray-400 text-[11px] sm:text-[12px] mt-[2px]'>
              523.7 ETH
            </p>

            <button className={`border text-[11px] sm:text-[13px] font-semibold px-4 sm:px-5 py-1 rounded-full mt-3 ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}>
              Follow
            </button>

          </div>

        </div>
      </div>

      {/* ========================== Trendy Collection Section ================ */}

      <div className={`px-4 sm:px-[30px] md:px-[60px] py-[40px] md:py-[60px] ${
        darkMode ? "bg-white text-black" : "bg-black text-white"
      }`}>

        <div className='flex flex-col sm:flex-row items-center justify-between mb-[30px] gap-y-4'>

          <div className='text-center sm:text-left'>

            <h2 className='font-bold text-[24px] sm:text-[30px] md:text-[36px]'>
              Trendy Collection
            </h2>

            <p className='text-gray-400 text-[13px] md:text-[15px] mt-[5px]'>
              Most popular gaming digital nft market place
            </p>

          </div>

          <div className='flex gap-x-3'>

            <button className='w-[38px] h-[38px] rounded-full bg-[#2a2a3d] flex items-center justify-center'>
              <FaArrowLeft size={16} />
            </button>

            <button className='w-[38px] h-[38px] rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center text-white'>
              <FaArrowRight size={16} />
            </button>

          </div>

        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[15px] md:gap-[20px]'>

          {/* Trendy Card 1 */}
          <div className={`rounded-[16px] overflow-hidden ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>

            <div className='relative h-[200px]'>

              <img
                src="rocket3.jpg"
                alt="3D Space Rocket With Smoke"
                className='w-full h-full object-cover'
              />

              <button className='absolute bottom-3 left-1/2 -translate-x-1/2 bg-purple-600/80 text-white text-[11px] px-4 py-2 rounded-full whitespace-nowrap'>
                ➤ Place Bid
              </button>

              <span className='absolute top-3 right-3 bg-purple-800 text-white text-[10px] px-2 py-1 rounded-full'>
                PANDA
              </span>

            </div>

            <div className='p-4'>

              <h3 className='font-bold text-[14px]'>
                "3D Space Rocket With Smoke"
              </h3>

              <div className='flex items-center gap-x-2 mt-3'>

                <img
                  src="person1.jpg"
                  alt="Daniel M. Bivens"
                  className='w-[28px] h-[28px] rounded-full object-cover'
                />

                <div>

                  <p className='font-semibold text-[13px]'>
                    Daniel M. Bivens
                  </p>

                  <p className='text-gray-400 text-[11px]'>
                    Creator
                  </p>

                </div>

              </div>

            </div>

            <div className='border-t border-[#2a2a3d] px-4 py-3 flex items-center gap-x-2 text-[12px] sm:text-[13px]'>

              <span className='text-gray-400'>Current Bid</span>
              <span className='font-bold'>1 ETH</span>
              <span className='text-gray-400'>= $33</span>

            </div>

          </div>

          {/* Trendy Card 2 */}
          <div className={`rounded-[16px] overflow-hidden ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>

            <div className='relative h-[200px]'>

              <img
                src="hand.jpg"
                alt="3D Space Rocket With Smoke"
                className='w-full h-full object-cover'
              />

              <button className='absolute bottom-3 left-1/2 -translate-x-1/2 bg-purple-600/80 text-white text-[11px] px-4 py-2 rounded-full whitespace-nowrap'>
                ➤ Place Bid
              </button>

              <span className='absolute top-3 right-3 bg-purple-800 text-white text-[10px] px-2 py-1 rounded-full'>
                PANDA
              </span>

            </div>

            <div className='p-4'>

              <h3 className='font-bold text-[14px]'>
                "3D Space Rocket With Smoke"
              </h3>

              <div className='flex items-center gap-x-2 mt-3'>

                <img
                  src="person1.jpg"
                  alt="Daniel M. Bivens"
                  className='w-[28px] h-[28px] rounded-full object-cover'
                />

                <div>

                  <p className='font-semibold text-[13px]'>
                    Daniel M. Bivens
                  </p>

                  <p className='text-gray-400 text-[11px]'>
                    Creator
                  </p>

                </div>

              </div>

            </div>

            <div className='border-t border-[#2a2a3d] px-4 py-3 flex items-center gap-x-2 text-[12px] sm:text-[13px]'>

              <span className='text-gray-400'>Current Bid</span>
              <span className='font-bold'>12 ETH</span>
              <span className='text-gray-400'>= $50</span>

            </div>

          </div>

          {/* Trendy Card 3 */}
          <div className={`rounded-[16px] overflow-hidden ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}>

            <div className='relative h-[200px]'>

              <img
                src="cointree.jpg"
                alt="3D Space Rocket With Smoke"
                className='w-full h-full object-cover'
              />

              <button className='absolute bottom-3 left-1/2 -translate-x-1/2 bg-purple-600/80 text-white text-[11px] px-4 py-2 rounded-full whitespace-nowrap'>
                ➤ Place Bid
              </button>

              <span className='absolute top-3 right-3 bg-purple-800 text-white text-[10px] px-2 py-1 rounded-full'>
                PANDA
              </span>

            </div>

            <div className='p-4'>

              <h3 className='font-bold text-[14px]'>
                "3D Space Rocket With Smoke"
              </h3>

              <div className='flex items-center gap-x-2 mt-3'>

                <img
                  src="person1.jpg"
                  alt="Daniel M. Bivens"
                  className='w-[28px] h-[28px] rounded-full object-cover'
                />

                <div>

                  <p className='font-semibold text-[13px]'>
                    Daniel M. Bivens
                  </p>

                  <p className='text-gray-400 text-[11px]'>
                    Creator
                  </p>

                </div>

              </div>

            </div>

            <div className='border-t border-[#2a2a3d] px-4 py-3 flex items-center gap-x-2 text-[12px] sm:text-[13px]'>

              <span className='text-gray-400'>Current Bid</span>
              <span className='font-bold'>12 ETH</span>
              <span className='text-gray-400'>= $50</span>

            </div>

          </div>

        </div>
      </div>

      {/* ========================== Popular Categories Section ================ */}

      <div className={`px-4 sm:px-8 md:px-[40px] pb-[60px] ${
        darkMode ? "bg-white text-black" : "bg-black text-white"
      }`}>

        <div className={`rounded-[24px] p-6 sm:p-8 md:p-[50px] border ${
          darkMode
            ? "bg-[#0a0a0a] text-white border-[#1f1f1f]"
            : "bg-gray-100 text-black border-gray-200"
        }`}>

          <div className='flex flex-col sm:flex-row items-center justify-between mb-[30px] gap-y-4'>

            <div className='text-center sm:text-left'>

              <h2 className='font-bold text-[24px] sm:text-[30px] md:text-[36px]'>
                Poplar Categories
              </h2>

              <p className='text-gray-400 text-[13px] md:text-[15px] mt-[5px]'>
                Most popular gaming digital nft market place
              </p>

            </div>

            <button className='bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[13px] md:text-[14px] font-semibold px-5 py-3 rounded-full flex items-center gap-x-2'>
              ➤ Browse More
            </button>

          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-x-6 md:gap-x-[50px] gap-y-6'>

            {/* Category 1 */}
            <div className='flex gap-x-4'>

              <div className='w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] rounded-full flex items-center justify-center shrink-0 bg-[#3b1a5c]'>
                <img
                  src="rocket.jpg"
                  alt="Browse By Template"
                  className='w-[26px] h-[26px] sm:w-[32px] sm:h-[32px] object-contain rounded-full'
                />
              </div>

              <div>

                <h3 className='font-bold text-[15px] sm:text-[17px]'>
                  Browse By Template
                </h3>

                <p className='text-gray-400 text-[12px] sm:text-[13px] mt-[5px]'>
                  Sed ut perspiciatis unde omnis natus error sit voluptatem
                </p>

              </div>

            </div>

            {/* Category 2 */}
            <div className='flex gap-x-4'>

              <div className='w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] rounded-full flex items-center justify-center shrink-0 bg-[#3b1a5c]'>
                <img
                  src="wallet.jpg"
                  alt="UI Template"
                  className='w-[26px] h-[26px] sm:w-[32px] sm:h-[32px] object-contain rounded-full'
                />
              </div>

              <div>

                <h3 className='font-bold text-[15px] sm:text-[17px]'>
                  UI Template
                </h3>

                <p className='text-gray-400 text-[12px] sm:text-[13px] mt-[5px]'>
                  Sed ut perspiciatis unde omnis natus error sit voluptatem
                </p>

              </div>

            </div>

            {/* Category 3 */}
            <div className='flex gap-x-4'>

              <div className='w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] rounded-full flex items-center justify-center shrink-0 bg-[#2a4d6e]'>
                <img
                  src="hand.jpg"
                  alt="Graphics Design"
                  className='w-[26px] h-[26px] sm:w-[32px] sm:h-[32px] object-contain rounded-full'
                />
              </div>

              <div>

                <h3 className='font-bold text-[15px] sm:text-[17px]'>
                  Graphics Design
                </h3>

                <p className='text-gray-400 text-[12px] sm:text-[13px] mt-[5px]'>
                  Sed ut perspiciatis unde omnis natus error sit voluptatem
                </p>

              </div>

            </div>

            {/* Category 4 */}
            <div className='flex gap-x-4'>

              <div className='w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] rounded-full flex items-center justify-center shrink-0 bg-[#5c4a1a]'>
                <img
                  src="cointree.jpg"
                  alt="Social Network"
                  className='w-[26px] h-[26px] sm:w-[32px] sm:h-[32px] object-contain rounded-full'
                />
              </div>

              <div>

                <h3 className='font-bold text-[15px] sm:text-[17px]'>
                  Social Network
                </h3>

                <p className='text-gray-400 text-[12px] sm:text-[13px] mt-[5px]'>
                  Sed ut perspiciatis unde omnis natus error sit voluptatem
                </p>

              </div>

            </div>

            {/* Category 5 */}
            <div className='flex gap-x-4'>

              <div className='w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] rounded-full flex items-center justify-center shrink-0 bg-[#f9c9d6]'>
                <img
                  src="rocket2.jpg"
                  alt="Browse By Template"
                  className='w-[26px] h-[26px] sm:w-[32px] sm:h-[32px] object-contain rounded-full'
                />
              </div>

              <div>

                <h3 className='font-bold text-[15px] sm:text-[17px]'>
                  Browse By Template
                </h3>

                <p className='text-gray-400 text-[12px] sm:text-[13px] mt-[5px]'>
                  Sed ut perspiciatis unde omnis natus error sit voluptatem
                </p>

              </div>

            </div>

            {/* Category 6 */}
            <div className='flex gap-x-4'>

              <div className='w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] rounded-full flex items-center justify-center shrink-0 bg-[#5a4c63]'>
                <img
                  src="rocket3.jpg"
                  alt="Browse By Template"
                  className='w-[26px] h-[26px] sm:w-[32px] sm:h-[32px] object-contain rounded-full'
                />
              </div>

              <div>

                <h3 className='font-bold text-[15px] sm:text-[17px]'>
                  Browse By Template
                </h3>

                <p className='text-gray-400 text-[12px] sm:text-[13px] mt-[5px]'>
                  Sed ut perspiciatis unde omnis natus error sit voluptatem
                </p>

              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ========================== Newsletters Section ================ */}

      <div className={`flex justify-center py-[40px] md:py-[60px] px-4 ${
        darkMode ? "bg-white text-black" : "bg-black text-white"
      }`}>

        <div className='bg-gradient-to-r from-purple-600 to-pink-500 w-full sm:w-[85%] md:w-[70%] rounded-[24px] px-5 sm:px-8 md:px-[50px] py-6 sm:py-8 md:py-[40px] flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden gap-y-5'>

          <div className='w-full md:w-auto text-center md:text-left'>

            <h2 className='font-bold text-[22px] sm:text-[28px] md:text-[32px]'>
              Newsletters
            </h2>

            <p className='text-[13px] sm:text-[14px] md:text-[15px] mt-[5px]'>
              Most popular gaming digital nft market place
            </p>

            <br />

            <div className='bg-white w-full rounded-full flex items-center justify-between p-[6px]'>

              <input
                type="email"
                placeholder='Enter Email Address'
                className='bg-transparent text-black text-[12px] sm:text-[13px] md:text-[14px] px-3 sm:px-4 md:px-[20px] w-full outline-none'
              />

              <button className='bg-[#7c3aed] text-white text-[11px] sm:text-[12px] md:text-[13px] font-semibold px-4 sm:px-5 md:px-[25px] py-2.5 sm:py-3 rounded-full flex items-center gap-x-1 whitespace-nowrap'>
                ➤ Browse More
              </button>

            </div>

          </div>

          <div className='hidden md:block absolute right-[20px] top-1/2 -translate-y-1/2'>

            <img
              src="token.png"
              alt="token"
              className='w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] object-contain'
            />

          </div>

        </div>

      </div>
<div
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center
  rounded-full bg-purple-600 text-xl font-bold text-white transition-all duration-300 hover:-translate-y-1"
>
  ↑
</div>
    </>
  )
}

export default Home