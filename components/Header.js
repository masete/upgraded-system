import React from 'react';
import Image from 'next/image';
import {SearchIcon,
        PlusCircleIcon, 
        HeartIcon, 
        PaperAirplaneIcon, 
        MenuIcon, 
        UserGroupIcon,} from "@heroicons/react/outline";
import {HomeIcon} from "@heroicons/react/solid";

const Header = () => {
  return (
    <div className='shadow-sm sticky top-0 z-50 bg-white'>
        
        <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
            {/* left */}
            <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
              <Image
              src='https://links.papareact.com/ocw' 
              layout='fill'
              objectFit='contain'
              />
            </div>

            <div className='relative lg:hidden w-10 flex-shrink-0 cursor-pointer'>
              <Image
              src='https://links.papareact.com/jjm' 
              layout='fill'
              objectFit='contain'
              />
            </div>

        {/* middle search input field*/}

        <div className='max-w-sm'>
            <div className='relative mt-1 p-3 rounded-md'>
               <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                   <SearchIcon className='h-5 w-5 text-gray-500'/>
               </div>
               <input type='text' 
               className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' placeholder='Search'
               />
          </div>
        </div>
        

        {/* Right */}

        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon className='navBtn' />
          <MenuIcon className='h-6 w-10 md:hidden cursor-pointer' />
          <div className='relative'>
            <PaperAirplaneIcon className='navBtn rotate-45' />
            <div 
            className='absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>
              3
            </div>
          </div>
          
          <PlusCircleIcon className='navBtn' />
          <UserGroupIcon className='navBtn' />
          <HeartIcon className='navBtn' />

          <img 
          className='h-10 rounded-full cursor-pointer'
          src='https://links.papareact.com/3ke' alt='profile-pic'/>
        </div>
        </div>
        

    </div>
  )
    
}

export default Header