import React, { useEffect, useRef, useState } from 'react';

function Blog() {
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
            <a href="/blog" className="text-sm/6 font-semibold text-gray-900 underline">Blog</a>
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
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Latest Insights</h2>
            <p className="mt-2 text-lg/8 text-gray-600">Stay informed with expert tips and actionable strategies from EnhanceSphere on personal
              development, financial growth, and professional success.</p>
          </div>
          <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
            <article className="flex max-w-[100rem] w-[70rem] flex-col items-start justify-between articleBlog transition-transform duration-300 ease-in-out hover:bg-gray-100 hover:shadow-md hover:rounded-lg hover:-translate-y-1">
              <div className="group relative p-6">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    1. <span className='text-gray-600'>Emotional Intelligence: The Key to Career Success</span>
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                  Read more...
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm/6"></div>
              </div>
            </article>
            <article className="flex max-w-[100rem] w-[70rem] flex-col items-start justify-between articleBlog transition-transform duration-300 ease-in-out hover:bg-gray-100 hover:shadow-md hover:rounded-lg hover:-translate-y-1">
              <div className="group relative p-6">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    2. <span className='text-gray-600'>5 Steps to Start Investing in Stocks the Right Way</span>
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                  Read more...
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm/6"></div>
              </div>
            </article>
            <article className="flex max-w-[100rem] w-[70rem] flex-col items-start justify-between articleBlog transition-transform duration-300 ease-in-out hover:bg-gray-100 hover:shadow-md hover:rounded-lg hover:-translate-y-1">
              <div className="group relative p-6">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    3. <span className='text-gray-600'>How Yoga Can Improve Your Professional Life</span>
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                  Read more...
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm/6"></div>
              </div>
            </article>
            <p>Ready to take the first step toward a better life? Contact us today for a free consultation!</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Blog
