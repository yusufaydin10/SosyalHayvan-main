import React, { useState } from "react";
import PriceInfoCard from "../components/PriceInfoCard";
import { Helmet } from "react-helmet";
import LadingPage from "../components/LadingPage";
import dog from "../images/köpek.png";
import bird from "../images/papagan.png";
import cat from "../images/kedi.png";
import { RevealItems } from "../components/Animations/RevealAnimation";

import DonationPopup from "../components/Forum/DonationPopup"

//import { Player, } from '@lottiefiles/react-lottie-player';

const Home = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Helmet>
      <title>Social Animals</title>
      </Helmet>
      <RevealItems>
        <LadingPage />
        {
          <div className="mb-16 flex justify-center " 
          onClick={() => setModalIsOpen(!modalIsOpen)}
          
          >
            <div className="mt-[80px] grid max-w-[1400px] grid-cols-3 gap-10 gap-y-16 ">
              <PriceInfoCard
                image={dog}
                title={"Destekleriniz için teşekkür ederiz."}
                info={"Köpek mamaları :99 TL"}
                onClick={() => setModalIsOpen(true)}
              />
              <PriceInfoCard
                image={cat}
                title={"Destekleriniz için teşekkür ederiz."}
                info={"Kedi mamaları :59 TL"}
                onClick={() => setModalIsOpen(true)}
              />
              <PriceInfoCard
                image={bird}
                title={"Destekleriniz için teşekkür ederiz."}
                info={"Kuş mamaları :39 TL"}
                onClick={() => setModalIsOpen(true)}
              />
              <PriceInfoCard
                image={dog}
                title={"Destekleriniz için teşekkür ederiz."}
                info={"Köpek ilacı :99 TL"}
                onClick={() => setModalIsOpen(true)}
              />
              <PriceInfoCard
                image={cat}
                title={"Destekleriniz için teşekkür ederiz."}
                info={"Kedi ilacı :59 TL"}
                onClick={() => setModalIsOpen(true)}
              />
              <PriceInfoCard
                image={bird}
                title={"Destekleriniz için teşekkür ederiz."}
                info={"Kuş ilacı :39 TL"}
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
              />
            </div>
          </div>
        }
        <DonationPopup
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      </RevealItems>
    </>
  );
};

export default Home;
