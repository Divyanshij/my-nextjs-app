"use client";
import Link from 'next/link';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useState } from "react";


const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const[isMobileMenuOpen, setIsMobileMenuOpen] = useState<Boolean>(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }
    const menuItems = [
        {  label: 'Home',href: '/'},
        {  label: 'About',href: '/components/About.tsx'},
        {  label: "Projects",href: '/projects'},
        { label: 'Contact',href: '/contact'}
    ]
    const toggleThemeSwitch = () => {
        if(theme === 'dark'){
            setTheme('light');
        }else{
            setTheme('dark');
        }
    }
  return (
    <nav className="fixed w-full bg-black dark:bg-dark/80 backdrop-blur-sm z-50">
    <div className="container max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between h-16 ">
        <Link href="/" className="text-xl font-bold text-primary text-white">
          Divyanshi Jangid
        </Link>
        {/* desktop Menu Items */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-white hover:text-[#37DDDB] transition-colors' 
            >
              {item.label}
            </Link>
          ))}</div>
         {/*  <motion.button 
          onClick = {toggleThemeSwitch}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
          >
          {theme === 'dark' ? <SunIcon className="w-5 h-5 text-white" /> : <MoonIcon className="w-5 h-5 text-white" />}
          </motion.button>
        
        mobile menu button 
        <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </motion.button>*/}
      </div>
      {/* mobile menu items*/}
    </div>
    </nav>
  )
}

export default Navbar