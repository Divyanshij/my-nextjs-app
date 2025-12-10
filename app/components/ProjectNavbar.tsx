"use client";
import Link from 'next/link';

const ProjectNavbar = () => {
    
    const menuItems = [
        {  label: 'Home',href: '/'},
        {  label: 'About',href: '/components/About.tsx'},
        {  label: "Projects",href: '/projects'},
        { label: 'Contact',href: '/contact'}
    ]
      
  return (
  
  <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-2/3 bg-white/5 backdrop-blur-md border border-white/10 shadow-md rounded-[15px] p-5">
    <div className="container max-w-8xl mx-auto px-4">
      <div className="flex items-center justify-between h-10 ">                                                                                                                                                                                                                                                                                                                                                               
        <Link href="/" className="text-3xl font-bold text-primary text-black">
          Divyanshi Jangid
        </Link>
      
        <div className="hidden md:flex items-center space-x-10 text-2xl">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-black hover:text-[#37DDDB] transition-colors'
            >
              {item.label}
            </Link>
          ))}</div>
         
      </div>
    </div>
    </nav>
  )
}

export default ProjectNavbar
