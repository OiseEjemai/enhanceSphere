import React from 'react'

function Navbar() {
    return (
        <nav className='bg-[#06b6d4] text-white flex flex-row items-center pt-2 top-0 Home_TopBar text-light-1 flex-wrap justify-between'>
            <div className='justify-between py-4 px-5 gap-3'>
                <a href="/" className='p-5'>Enhance Sphere</a>
                <a href="/about" className='p-6 nav-links text-sm' id='nav_links'>About us</a>
                <a href="/blog" className='p-6 nav-links text-sm' id='nav_links'>Blog</a>
                <a href="/services" className='p-6 nav-links text-sm' id='nav_links'>Services</a>
                <a href="/testimonials" className='p-6 nav-links text-sm' id='nav_links'>Testimonials</a>
                <a href="/contact" className='p-6 nav-links text-sm' id='nav_links'>Contact Us</a>
            </div>
        </nav>
    )
}

export default Navbar