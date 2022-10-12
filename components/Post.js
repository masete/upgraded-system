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
        <div>
            <img src={userImg}
            className="rounded-full"
            alt='user' />
            <p>username</p>
            <DotsHorizontalIcon className='h-5' /> 
        </div>
        {/* img */}
        {/* buttons */}
        {/* caption */}
        {/* input box */}
    </div>
  )
}

export default Post