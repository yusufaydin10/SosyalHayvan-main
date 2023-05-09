import React from 'react'
const ForumCard = ({name,image,setActive}) => {
  return (
    <div className='w-[192px] h-[252px] shadow-floatingShadow relative rounded-lg cursor-pointer' onClick={()=>setActive(name)}>
        <img src={image} alt="dogs" className='w-full h-full rounded-lg bg-contain bg-[length:100%_auto] bg-center bg-no-repeat'/>
         <p className='absolute bottom-5 mx-auto text-black z-10 w-[120px] h-[30px] flex justify-center items-center bg-white opacity-70 ml-[35px] text-[18px] font-medium'>{name}</p>
        </div>
  )
}

export default ForumCard