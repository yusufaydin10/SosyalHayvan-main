import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "../components/Container";
import BirdsCommentCard from "../components/Forum/BirdsCommentCard";
import CatCommentCard from "../components/Forum/CatCommentCard";
import DogCommentCard from "../components/Forum/DogCommentCard";
import OtherCard from "../components/Forum/OtherCard";

import ReplyModal from "../components/Forum/ReplyModal";
import { db } from "../firebase";

const ForumDetail = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const forumDetailsRef = collection(db, "forumdetails");

  const [forumDetails, setForumDetails] = useState([]);
  useEffect(() => {
    return onSnapshot(forumDetailsRef, (snapshot) => {
      setForumDetails(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);
  const forumRef = collection(db, "forums");

  const [forum, setForum] = useState([]);
  useEffect(() => {
    return onSnapshot(forumRef, (snapshot) => {
      setForum(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);
  const { option } = useSelector((state) => state.forum);

  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <Container>
        <div className="mt-[100px] flex  h-[80px] flex-row items-center gap-x-3">
          <h1 className="text-5xl">SORULAR</h1>
          <div className="h-[2px] w-full flex-1 bg-black " />
        </div>
        {option === "Köpekler" ? (
          <DogCommentCard />
        ) : option === "Kediler" ? (
          <CatCommentCard />
        ) : option === "Kuşlar" ? (
          <BirdsCommentCard />
        ) : (
          option === "Diğerleri"(<OtherCard />)
        )}

        <button
          className="mt-[50px] flex h-[40px] w-[200px] cursor-pointer items-center justify-center rounded-xl bg-brand-3 text-xl text-white outline-none"
          onClick={() => setModalIsOpen(!modalIsOpen)}
        >
          + Bir Cevap Yaz
        </button>
        <div>
          {option === "Köpekler" ? (
            <>
              {forumDetails.map((item) => {
                if (item.subject === "Köpekler") {
                  return (
                    <div
                      className="mt-10  flex w-full cursor-pointer gap-x-10 rounded-lg bg-[##F7F7F7] p-10 shadow-outlineShadow"
                      key={item.id}
                    >
                      {item.image ? (
                        <img
                          src={item.image}
                          alt="profile"
                          className="h-[80px] w-[80px] rounded-[50%]"
                        />
                      ) : (
                        <div className="h-[80px] w-[80px] rounded-[50%] bg-slate-500" />
                      )}
                      <div className="mt-5 flex flex-col">
                        <div className="flex gap-x-10">
                          <p className="font-medium">{item.user}</p>
                          <div className="flex gap-x-10">
                            <p className="font-medium">
                              Cinsi :
                              <span className="font-bold">{item.subject}</span>
                            </p>
                          </div>
                        </div>
                        <p className="mt-5">{item.Description}</p>
                      </div>
                    </div>
                  );
                }
              })}
            </>
          ) : option === "Kediler" ? (
            <>
              {forumDetails.map((item) => {
                if (item.subject === "Kediler") {
                  return (
                    <div
                      className="mt-10  flex w-full cursor-pointer gap-x-10 rounded-lg bg-[##F7F7F7] p-10 shadow-outlineShadow"
                      key={item.id}
                    >
                      {item.image ? (
                        <img
                          src={item.image}
                          alt="profile"
                          className="h-[80px] w-[80px] rounded-[50%]"
                        />
                      ) : (
                        <div className="h-[80px] w-[80px] rounded-[50%] bg-slate-500" />
                      )}
                      <div className="mt-5 flex flex-col">
                        <div className="flex gap-x-10">
                          <p className="font-medium">{item.user}</p>
                          <div className="flex gap-x-10">
                            <p className="font-medium">
                              Cinsi :
                              <span className="font-bold">{item.subject}</span>
                            </p>
                          </div>
                        </div>
                        <p className="mt-5">{item.Description}</p>
                      </div>
                    </div>
                  );
                }
              })}
            </>
          ) : option === "Kuşlar" ? (
            <>
              {forumDetails.map((item) => {
                if (item.subject === "Kuşlar") {
                  return (
                    <div
                      className="mt-10  flex w-full cursor-pointer gap-x-10 rounded-lg bg-[##F7F7F7] p-10 shadow-outlineShadow"
                      key={item.id}
                    >
                      <div className="h-[80px] w-[80px] rounded-[50%] bg-slate-500" />{" "}
                      {item.image ? (
                        <img
                          src={item.image}
                          alt="profile"
                          className="h-[80px] w-[80px] rounded-[50%]"
                        />
                      ) : (
                        <div className="h-[80px] w-[80px] rounded-[50%] bg-slate-500" />
                      )}{" "}
                      <div className="mt-5 flex flex-col">
                        <div className="flex gap-x-10">
                          <p className="font-medium">{item.user}</p>
                          <div className="flex gap-x-10">
                            <p className="font-medium">
                              Cinsi :
                              <span className="font-bold">{item.subject}</span>
                            </p>
                          </div>
                        </div>
                        <p className="mt-5">{item.Description}</p>
                      </div>
                    </div>
                  );
                }
              })}
              x
            </>
          ) : (
            <></>
          )}
        </div>
        <ReplyModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      </Container>
    </div>
  );
};

export default ForumDetail;
