import { addDoc, collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import Modal from "react-modal";
import { db } from "../../firebase";

const QuestionAndAnswerModal = ({ modalIsOpen, setModalIsOpen }) => {
  const [description, setDescription] = useState("");
  const [userName, setUserName] = useState("");
  const [selected, setSelected] = useState("Köpekler");
  var modalStyles = { overlay: { zIndex: 50 } };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handleClose = () => {
    setModalIsOpen(false);
  };

  const forumRef = collection(db, "forums");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(forumRef, {
      Description: description,
      userName: userName,
      subject: selected,
    });
    setModalIsOpen(false);
  };
  const handleChange = (e) => {
    setSelected(e.target.value);
  };

 

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={modalStyles}
      ariaHideApp={false}
      className={`relative  z-50 h-[696px] w-[913px] rounded-[16px] bg-white shadow-[0_0_10px_0_rgba(55,164,146,0.5)] focus:outline-none 
   `}
      overlayClassName="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#999999] bg-opacity-50"
    >
      <MdOutlineCancel
        size={36}
        className="absolute top-12 right-12 cursor-pointer text-brand-3"
        onClick={handleClose}
      />
      <h1 className=" text-center text-4xl ">Cevapla</h1>
      <div className="ml-[30px] mt-[50px] flex flex-col gap-y-3">
        <label htmlFor="select" className="text-lg font-semibold">
          Kullanıcı Adı
        </label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="h-[50px] w-[400px] rounded-lg border p-3 text-lg outline-none"
        />
      </div>
      <div className="ml-[30px] mt-[15px] flex flex-col gap-y-3">
        <label htmlFor="select" className="text-lg font-semibold">
          Konu
        </label>
        <select
          value={selected}
          onChange={handleChange}
          className="h-[50px] w-[400px] border"
        >
          <option value="Köpekler" className="mt-[20px] text-lg">
            Köpekler
          </option>
          <option value="Kediler" className="mt-[20px] text-lg">
            Kediler
          </option>
          <option value="Kuşlar" className="mt-[20px] text-lg">
            Kuşlar
          </option>
          <option value="Diğerleri" className="mt-[20px] text-lg">
            Diğerleri
          </option>
        </select>
      </div>

      <div className="ml-[30px] mt-[15px] flex flex-col gap-y-3">
        <label htmlFor="select" className="text-lg font-semibold">
          Cevap
        </label>
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="h-[100px] max-w-[800px] rounded-lg border p-3 text-lg outline-none"
        />
      </div>
      <div className="ml-[60px] flex gap-x-5">
        <button
          className="mt-[50px] ml-[30px] flex h-[50px] w-[100px] items-center justify-center rounded-lg border bg-brand-3 p-3 text-lg text-white outline-none"
          onClick={handleClose}
        >
          İPTAL
        </button>
        <button
          className="mt-[50px] ml-[30px] flex h-[50px] w-[100px] items-center justify-center rounded-lg border bg-brand-3 p-3 text-lg text-white outline-none"
          onClick={handleSubmit}
        >
          GÖNDER
        </button>
      </div>
    </Modal>
  );
};

export default QuestionAndAnswerModal;
