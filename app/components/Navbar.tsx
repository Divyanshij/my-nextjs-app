"use client";
import Link from 'next/link';
import { useTheme } from 'next-themes'


const Navbar = () => {
    const { theme, setTheme } = useTheme();
    
    const menuItems = [
        {  label: 'Home',href: '/'},
        {  label: 'About',href: '/components/About.tsx'},
        {  label: "Projects",href: '/projects'},
        { label: 'Contact',href: '/contact'}
    ]
    
  return (
    <nav className="fixed w-full bg-black dark:bg-dark/80 backdrop-blur-sm z-50 py-15">
    <div className="container max-w-8xl mx-auto px-4">
      <div className="flex items-center justify-between h-10 ">
        <Link href="/" className="text-3xl font-bold text-primary text-white">
          Divyanshi Jangid
        </Link>
      
        <div className="hidden md:flex items-center space-x-10 text-2xl">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-white hover:text-[#37DDDB] transition-colors'
            >
              {item.label}
            </Link>
          ))}</div>
         
      </div>
    </div>
    </nav>
  )
}

export default Navbar