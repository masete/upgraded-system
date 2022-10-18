import React from 'react';
import {BookmarkIcon,
    ChatIcon, 
    HeartIcon, 
    PaperAirplaneIcon, 
    DotsHorizontalIcon, 
    EmojiHappyIcon,} from "@heroicons/react/outline";



const Post = ({id, username, img, userImg, caption}) => {
  return (
    <div>Iam a Post
        {/* Header */}
        <div className='flex items-center p-5'>
            <img src={userImg}
            className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
            alt='user' />
            <p>username</p>
            <DotsHorizontalIcon className='h-5' /> 
        </div>
        {/* img */}
        <img src='' alt='' className='object-cover w-full'/>
        {/* buttons */}
        {/* caption */}
        {/* input box */}
    </div>
  )
}

export default Post