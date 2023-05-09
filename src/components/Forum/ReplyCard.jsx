import React from "react";

const ReplyCard = () => {
  return (
    <div className="mt-10 p-10 shadow-outlineShadow flex w-full gap-x-10 rounded-lg bg-[##F7F7F7]">
      <div className="h-[80px] w-[80px] rounded-[50%] bg-slate-500" />
      <div className="mt-5 flex flex-col">
        <div className="flex gap-x-10">
          <p className="font-medium">OSMANCAN AKAGÜNDÜZ</p>
          <div className="flex gap-x-10">
            
            <span className="font-medium">08.08.2022</span>
          </div>
        </div>
        <p className="mt-5">Kangal ve Akbaşları etle besleyiniz.</p>
      </div>
    </div>
  );
};

export default ReplyCard;
