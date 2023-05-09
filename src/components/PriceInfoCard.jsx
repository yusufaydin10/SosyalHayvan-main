import React from 'react'

import FloatingCard from './FloatingCard';


const PriceInfoCard = ({image,info,title,modalIsOpen,setModalIsOpen}) => {
  return (
    <div onClick={()=>setModalIsOpen(!modalIsOpen)}>
      <FloatingCard >
         <div className="rouned-lg  h-[300px] w-[300px] flex cursor-pointer flex-col shadow-outlineShadow" >
            <div className="h-[200px] w-[300px] rounded-lg md-max:w-[150px]" onClick={()=>setModalIsOpen(!modalIsOpen)}>
              <img src={image} className="h-full w-full rounded-lg" alt="cat" />
            </div>
            <p className='text-brand-8  font-bold px-5 mt-3'>{title}</p>
            <p className="px-9 mt-7 text-brand-8  ">
            {info}
            </p>
          </div>
      </FloatingCard>
    </div>
  )
}

export default PriceInfoCard