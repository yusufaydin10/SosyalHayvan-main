import React from "react";
import animals from "../images/yenilogo.jpeg";
import FloatingCard from "./FloatingCard";
import cat from "../images/cat.jpg";

const LadingPage = () => {
  return (
    <div className="relative mt-[180px] flex flex-row items-center mx-24">
      <div className="flex w-[350px] flex-col bg-[#C58940] p-8 rounded-lg">
        <h1 className="text-center   font-semibold">
        MİSYONUMUZ
        </h1>
        <p className="text-justify text-sm">
        Hayvanlarla ilgili forum sitemiz, insanların hayvanlar hakkında daha fazla bilgi edinmelerine ve hayvanlarla ilgili konuları tartışmalarına yardımcı olmak amacıyla kurulmuştur. Biz, hayvanlar hakkında daha fazla bilinç oluşturulmasına ve insanlar arasında hayvanlar hakkında daha fazla bilgi paylaşılmasına yardımcı olmak için çalışıyoruz. 
        </p>
        <p className="text-justify text-sm">
         
        </p>
      </div>

      <FloatingCard className="mx-auto flex h-[450px] w-[450px] justify-center rounded-full">
        <img
          src={animals}
          alt="dernek"
          className="h-[450px] w-[450px] rounded-full "
        />
      </FloatingCard>
      <div className="flex w-[350px] flex-col bg-[#C58940] p-8 rounded-lg">
        <h1 className="text-center   font-semibold">
VİZYONUMUZ        </h1>
        <p className="text-justify text-sm">
        Gelecekte, hayvanlar hakkında daha fazla bilinç oluşturulmasına yönelik bir platform olmak vizyonumuzdur. Biz, insanların hayvanlar hakkında daha fazla bilgi edinmelerine ve hayvanlarla ilgili konuları tartışmalarına yardımcı olmak amacıyla çalışmaya devam edeceğiz. Ayrıca, hayvanlar hakkında bilgi paylaşımını arttırarak insanlar arasında hayvanlar hakkında daha fazla bilinç oluşturmayı hedefliyoruz.
        </p>
        <p className="text-justify text-sm">
         
        </p>
      </div>
    </div>
  );
};

export default LadingPage;
