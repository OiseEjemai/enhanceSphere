import React, { useEffect, useRef, useState } from 'react';

function Contact() {
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
            <a href="/about" className="text-sm/6 font-semibold text-gray-900">About</a>
            <a href="/services" className="text-sm/6 font-semibold text-gray-900">Services</a>
            <a href="/blog" className="text-sm/6 font-semibold text-gray-900">Blog</a>
            <a href="/testimonials" className="text-sm/6 font-semibold text-gray-900">Testimonials</a>
            <a href="/contact" className="text-sm/6 font-semibold text-gray-900 underline">Contact</a>
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
      <div className='relative py-24 flex flex-col items-center justify-center'>
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
          <div className="p-4">
            <h5 className="mb-2 text-slate-800 text-xl font-semibold">
              Get In Touch
            </h5>
            <p className="text-slate-600 leading-normal font-light">
              Have questions or want to schedule a free consultation? We’re here to help you enhance every
              area of your life.
            </p>
            <br />

            <ul>
              <p>Contact Information:</p>
              <br />
              <li>
                ● Email: info@EnhanceSphere.com
                <br />
                <br />
                ● Phone: [Phone Number]
                <br />
                <br />
                ● Address: [Office Address]
                <br />
                <br />
                ● Social Media Links: [Links to Facebook, LinkedIn, Instagram]
              </li>
              <br />
              <br />
              <p>Ready to take the first step toward a better life? Contact us today for a free consultation!</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
