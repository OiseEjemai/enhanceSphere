import React, { useEffect, useRef, useState } from 'react';

function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Enhance Sphere</span>
              <h1 className='text-lg font-semibold text-gray-900'>Enhance Sphere</h1>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={toggleMenu}>
              <span className="sr-only">Open main menu</span>
              <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="/about" className="text-sm/6 font-semibold text-gray-900 underline">About</a>
            <a href="/services" className="text-sm/6 font-semibold text-gray-900">Services</a>
            <a href="/blog" className="text-sm/6 font-semibold text-gray-900">Blog</a>
            <a href="/testimonials" className="text-sm/6 font-semibold text-gray-900">Testimonials</a>
            <a href="/contact" className="text-sm/6 font-semibold text-gray-900">Contact</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
        {isMenuOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Enhance Sphere</span>
                  <h1 className='text-lg font-bold'>Enhance Sphere</h1>
                </a>
                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={closeMenu}>
                  <span className="sr-only">Close menu</span>
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a href="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">About</a>
                    <a href="/services" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Services</a>
                    <a href="/blog" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Blog</a>
                    <a href="/testimonials" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Testimonials</a>
                    <a href="/contact" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Contact</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">About Us</h6>
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2
                      className="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      Our Mission</h2>
                    <p
                      className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      At EnhanceSphere, our mission is simple: to help you achieve success in every area of your life.
                      We believe that personal, financial, and professional growth are interconnected, and our tailored
                      solutions are designed to empower you to live a fulfilling and prosperous life. Through expert
                      guidance, customized strategies, and continuous support, we help you create a life that’s truly
                      enhanced.
                    </p>
                  </div>
                </div>
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                  <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div
                      className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">Our Vision</h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">To be the leading consultancy that helps individuals and business owners reach their highest
                        potential and achieve sustained success across personal, financial, and professional
                        dimensions.</p>
                    </div>
                    <div
                      className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">Our Approach
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">We take a holistic, personalized approach to each client, understanding their unique goals and
                        challenges. Our expert team works with you to create actionable strategies that are tailored
                        specifically to your needs. Whether you're looking to enhance your personal relationships, invest
                        in your financial future, or advance your career, we are with you every step of the way.</p>
                    </div>
                  </div>
                  <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div
                      className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">Why Choose EnhanceSphere?</h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        ● Expert Guidance: Our team consists of experienced consultants with expertise in
                        personal coaching, finance, business development, and professional training.
                        <br />
                        <br />
                        ● Holistic Strategies: We address personal, financial, and professional development as
                        interconnected parts of a balanced life.
                        <br />
                        <br />
                        ● Tailored Solutions: Every strategy we provide is customized to suit your unique goals
                        and circumstances.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className='font-semibold'>
              Ready to take the first step toward a better life? Contact us today for a free consultation!
              </p>
              <button
                className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                <span
                  className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">Book a consultation</span>
                <svg className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" stroke-width="1.6"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <div className="w-full lg:justify-start justify-center items-start flex">
              <div
                className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                  src="https://cdn.pixabay.com/photo/2020/06/02/05/24/sphere-5249449_1280.png" alt="about Us image" />
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default About
