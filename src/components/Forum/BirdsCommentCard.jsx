import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { option } from "../../store/forum";

const BirdsCommentCard = () => {
  const dispatch = useDispatch();


  const navigate = useNavigate();
  const handleRoute = () => {
    navigate("/Forum/ForumDetail");
    dispatch(option("Kuşlar"))

  };

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

const { user } = useSelector((state) => state.auth);
  return (
    <>
      {forum.map((item) => {
        if (item.subject === "Kuşlar") {
          return (
            <div
              className="mt-10  flex w-full cursor-pointer gap-x-10 rounded-lg bg-[##F7F7F7] p-10 shadow-outlineShadow"
              key={item.id}
              onClick={handleRoute}
            >
             {item.image ? ( <img src={item.image} alt="profile"  className="h-[80px] w-[80px] rounded-[50%]"/>):(<div className="h-[80px] w-[80px] rounded-[50%] bg-slate-500" />)}
              <div className="mt-5 flex flex-col">
                <div className="flex gap-x-10">
                <p className="font-medium">{item.user}</p>

                  <div className="flex gap-x-10">
                    <p className="font-medium">
                      Cinsi :{" "}
                      <span className="font-bold">{item.questionTitle}</span>
                    </p>
                  </div>
                </div>
                <p className="mt-5">{item.questionDescription}</p>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default BirdsCommentCard;
