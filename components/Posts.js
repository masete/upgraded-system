import React from 'react';
import Post from './Post';


const posts = [
  {
  id: "123",
  username: "nicholas m joel",
  userImg: "https://links.papareact.com/3ke",
  img: "https://links.papareact.com/3ke",
  caption: "Subscribe Asap"

  },

  {
    id: "123",
    username: "nicholas m joel",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "Subscribe Asap"
  
    }
]

const Posts = () => {
  return (
    <div>
      {posts.map(post => {
        <Post key={post.id} 
        username={post.username} 
        userImg={posts.userImg} 
        img={post.img} 
        caption={post.caption}/>
      })}
      <Post />
      {/* */}
       {/* */}
        {/* */}
         {/* */}
          {/* */}
           {/* */}
            {/* */}
    </div>
  )
}

export default Posts