import React, { useEffect } from 'react';
import SingleEmoji from './SingleEmoji';
import '../App.css';
function EmojiContainer({list}) {
  return (
    <div className='container'>
      
      {list.map((singleEmoji, idx) => (
        <div key={idx} >

          <p className='design'>{singleEmoji.description} {singleEmoji.emoji}</p>
         
        </div>
      ))}
    </div>
  )
}

export default EmojiContainer