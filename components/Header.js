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
            <div className='relative hidden lg:inline-grid h-24 w-24 cursor-pointer'>
              <Image
              src='https://links.papareact.com/ocw' 
              layout='fill'
              objectFit='contain'
              />
            </div>

            <div className='relative lg:hidden h-10 w-10 flex-shrink-0 cursor-pointer'>
              <Image
              src='https://links.papareact.com/jjm' 
              layout='fill'
              objectFit='contain'
              />
            </div>

        {/* middle search input field*/}
        <div>
          <div>
            <SearchIcon className='h-5 w-5 text-gray-500'/>
          </div>
          <input type='text' placeholder='Search'/>
        </div>

        {/* Right */}
        </div>
        

    </div>
  )
    
}

export default Header