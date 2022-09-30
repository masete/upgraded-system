import React from 'react';
import Image from 'next/image';
import {SearchIcon,
        PlusCircleIcon, HeartIcon, PaperAirplaneIcon, MenuIcon,} from "@heroicons/react/outline";

// import { BeakerIcon } from '@heroicons/react/24/solid'
const Header = () => {
  return (
    <div>
        
        <div className='flex justify-between max-w-6xl'>
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
        <div className='relative mt-1 p-3 rounded-md'>
          <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
            <SearchIcon className='h-5 w-5 text-gray-500'/>
          </div>
          <input type='text' 
          className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray focus:ring-black focus:border-black' placeholder='Search'
          />
        </div>

        {/* Right */}
        </div>
        

    </div>
  )
    
}

export default Header