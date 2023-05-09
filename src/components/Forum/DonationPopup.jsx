import React, { useState } from "react";
import Modal from "react-modal";
import { MdOutlineCancel } from "react-icons/md";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-hot-toast";

const DonationPopup = ({ modalIsOpen, setModalIsOpen, className }) => {
  const closeModal = () => {
    setModalIsOpen(false);
  };
  var modalStyles = { overlay: { zIndex: 50 } };

  const [selected, setSelected] = useState("Köpek maması");



  const forumRef = collection(db, "donation");

  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(forumRef, {
      subject: selected,
     
    });
    setModalIsOpen(false);
    toast.success("Bağışınız için teşekkürler")
  };
const handleClose = () => {
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
      className={`relative  z-50 h-[350px] w-[600px] rounded-[16px] bg-white shadow-[0_0_10px_0_rgba(55,164,146,0.5)] focus:outline-none ${
        className ? className : ""
      }`}
      overlayClassName="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#999999] bg-opacity-50"
    >
      <MdOutlineCancel
        size={36}
        className="absolute top-6 right-6 cursor-pointer text-brand-3"
        onClick={handleClose}
      />
      <h1 className=" text-center text-4xl mt-10">Bağışınız için teşekkürler</h1>

      <div className="ml-[30px] mt-[25px] flex flex-col gap-y-3">
        <label htmlFor="select" className="text-lg font-semibold">
          Bağış türünü seçiniz
        </label>
        <select
          value={selected}
          onChange={handleChange}
          className="h-[50px] w-[400px] border"
        >
          <option value="Köpek maması" className="mt-[20px] text-lg">
            Köpek maması 99 TL
          </option>
          <option value="Kedi maması" className="mt-[20px] text-lg">
            Kedi maması 59 TL
          </option>
          <option value="Kuş maması" className="mt-[20px] text-lg">
            Kuş maması 39 TL
          </option>
          <option value="Köpek ilacı" className="mt-[20px] text-lg">
            Köpek ilacı 99 TL
          </option>
          <option value="Kedi ilacı" className="mt-[20px] text-lg">
            Kedi ilacı 59 TL
          </option>
          <option value="Kuş ilacı" className="mt-[20px] text-lg">
            Kuş ilacı 39 TL
          </option>
        </select>
      </div>

      <div className="ml-[60px] flex gap-x-5">
        <button
          className="mt-[50px] ml-[30px] flex h-[50px] w-[100px] items-center justify-center rounded-lg border bg-brand-3 p-3 text-lg text-white outline-none"
          onClick={handleClose}
        >
          iptal et
        </button>
        <button
          className="mt-[50px] ml-[30px] flex h-[50px] w-[100px] items-center justify-center rounded-lg border bg-brand-3 p-3 text-lg text-white outline-none"
          onClick={handleSubmit}
        >
        gönder
        </button>
      </div>
    </Modal>
  );
};

export default DonationPopup;
