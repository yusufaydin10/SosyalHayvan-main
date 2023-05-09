import React, {useState} from "react";
import { Container } from "../components/Container";
import ForumCard from "../components/Forum/ForumCard";
import "../index.css";
import dog from "../images/köpek.png";
import cat from "../images/kedi.png";
import birds from "../images/papagan.png";
import animal from "../images/animal.jpg";
import CatCommentCard from "../components/Forum/CatCommentCard";
import DogCommentCard from "../components/Forum/DogCommentCard";
import BirdsCommentCard from "../components/Forum/BirdsCommentCard";
import { RevealItems } from "../components/Animations/RevealAnimation";
import AskQuestionModal from "../components/Forum/AskQuestionModel";
import { Helmet } from "react-helmet";


const Forum = () => {
  const forumCategory = [
    {
      id: 1,
      name: "KÖPEK",
      image: dog,
    },
    {
      id: 2,
      name: "KEDİ",
      image: cat,
    },
    {
      id: 3,
      name: "KUŞ",
      image: birds,
    },
  ];
  const [active, setActive] = useState("KÖPEK");
  const [modalIsOpen, setModalIsOpen] = useState(false);
 



 
  return (
    <div>
         <Helmet>
         <title>Social Animals Forum</title>
      </Helmet>
      <Container>
        <RevealItems delay={200}>
          <h2 className="[120px] mt-20 text-[36px] font-semibold">Konular</h2>
          <div className="mt-[50px] flex gap-x-10">
            {forumCategory.map((item, index) => (
              <ForumCard
                key={item.id}
                name={item.name}
                image={item.image}
                active={active}
                setActive={setActive}
              />
            ))}
          </div>
          <button
            className="mt-[50px] flex h-[40px] w-[120px] cursor-pointer items-center justify-center rounded-xl bg-[#C58940] text-xl text-white outline-none"
            onClick={() => setModalIsOpen(!modalIsOpen)}
          >
            + Soru Sor
          </button>

          <div className="mt-10 flex flex-col mb-16">
          {active === "KÖPEK" && <DogCommentCard active={active}/>}
            {active === "KEDİ" && <CatCommentCard />}
            {active === "KUŞ" && <BirdsCommentCard />}
            


            <AskQuestionModal
              modalIsOpen={modalIsOpen}
              setModalIsOpen={setModalIsOpen}
            />
          </div>
       
        </RevealItems>
      </Container>
    </div>
  );
};

export default Forum;
