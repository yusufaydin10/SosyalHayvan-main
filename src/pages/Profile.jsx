import { Container } from "../components/Container";

import lottie from "lottie-web";
import React, { useEffect, useRef, useState } from "react";
import {
  getAuth,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app, { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/auth";
import toast from "react-hot-toast";
import { collection, onSnapshot } from "firebase/firestore";
import { Helmet } from "react-helmet";
import { RevealItems } from "../components/Animations/RevealAnimation";


function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth(app);
  const Out = () => {
    signOut(auth)
      .then(() => {
        navigate("/Auth", { replace: true });
        dispatch(logout());
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const { user } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [photoURL, setPhotoURL] = useState(user.photoURL || "");
  const [password, setPassword] = useState("");
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../lotties/dogWalking.json"),
    });
  }, []);

  useEffect(() => {
    setEmail(user.email);
    // setDisplayName(user.displayName);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    })
      .then(() => {
        // Profile updated!
        // ..
        toast.success("Profil Güncellendi");
      })
      .catch((error) => {
        // An error occurred
        // ...
        toast.error("Profil Güncellenemedi");
      });
  };

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    updateEmail(auth.currentUser, email)
      .then(() => {
        // Email updated!
        // ...
        toast.success("Email Güncellendi");
      })
      .catch((error) => {
        // An error occurred
        // ...
        toast.error("Email Güncellenemedi");
      });
  };

  // const handleVerification = async (e) => {
  //   e.preventDefault();
  //   sendEmailVerification(auth.currentUser).then(() => {
  //     // Email verification sent!
  //     // ...
  //     toast.success("Email Doğrulama Gönderildi");
  //   });
  // };
  const users = auth.currentUser;

  const handlePassword = async (e) => {
    e.preventDefault();
    updatePassword(users, password).then(() => {
      // Update successful.
 setPassword("");
      toast.success("Şifre Güncellendi");
    }).catch((error) => {
      // An error ocurred
      // ...
      toast.error("Şifre Güncellenemedi");
    });
  };

  const blogRef = collection(db, "users");


  const [profile, setProfile] = useState([]);
  useEffect(() => {
    return onSnapshot(blogRef, (snapshot) => {
      setProfile(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);


  



  return (
    <div>

        <Helmet>
        <title>Social Animals Profile</title>
      </Helmet>
      <Container>
      <RevealItems delay={300}>

        <div className=" mt-20 flex max-w-[1000px] flex-col items-center">
          <div className="flex w-full mt-20 flex-row justify-between">
            <div className="flex h-[350px] w-[350px] flex-col gap-y-5">
              {user.photoURL ? (
             <img src={user.photoURL} className="profile w-full h-full rounded-lg" alt="profile"/>
              ) : (
                <div className="w-full h-full rouned-lg bg-slate-500 "/>)
              }

              {/* <p className="text-2xl font-semibold">İsim Soyisim</p>*/}
            </div>

            <div className="flex flex-col gap-y-3">
              <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-y-3">
                  <label htmlFor="username" className="text-xl font-semibold">
                    Kullanıcı adı:
                  </label>
                  <div className="flex flex-col gap-y-3">
                    <input
                      type="text"
                      placeholder="fotoğrafınızı değiştirmek için tıklayın"
                      id="username"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="w-[300px] border p-2"
                    />
                    <button
                      type="submit"
                      className="flex h-[20px] w-[80px] items-center justify-center rounded-[20px] bg-[#C58940]  p-4 text-[12px] font-semibold text-white"
                    >
                      Güncelle
                    </button>
                  </div>
                </div>
              </form>
              <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-y-3">
                  <label htmlFor="username" className="text-xl font-semibold">
                    Fotoğraf URL:
                  </label>
                  <div className="flex flex-col gap-y-3">
                    <input
                      type="text"
                      placeholder="fotoğrafınızı değiştirmek için tıklayın"
                      id="username"
                      value={photoURL}
                      onChange={(e) => setPhotoURL(e.target.value)}
                      className="w-[300px] border p-2"
                    />
                    <button
                      type="submit"
                      className="flex h-[20px] w-[80px] items-center justify-center rounded-[20px] bg-[#C58940]  p-4 text-[12px] font-semibold text-white"
                    >
                      Güncelle
                    </button>
                  </div>
                </div>
              </form>
              <form
                className="flex flex-col gap-y-3"
                onSubmit={handleSubmitEmail}
              >
                <div className="flex flex-col gap-y-3">
                  <label htmlFor="username" className="text-xl font-semibold">
                    E-posta güncelle:
                  </label>
                  <div className="flex flex-col gap-y-3">
                    <input
                      type="email"
                      placeholder="email adresinizi değiştirmek için tıklayın"
                      id="username"
                      value={email}
                      onChange={(e) => setEmail(e.currentTarget.value)}
                      className="w-[300px] border p-2"
                    />
                    <button
                      type="submit"
                      className=" flex h-[20px] w-[80px] items-center justify-center rounded-[20px] bg-[#C58940]   p-4 text-[12px] font-semibold text-white"
                    >
                      Güncelle
                    </button>
                  </div>
                </div>
              </form>
              <form onSubmit={handlePassword}>
                <div className="flex flex-col gap-y-3">
                  <label htmlFor="password" className="text-xl font-semibold">
                    Şifre güncelle:
                  </label>
                  <input
                    type="password"
                    placeholder="Şifrenizi giriniz"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-[300px] border p-2"
                  />
                  <button
                    className=" flex disabled:opacity-40 h-[20px] w-[120px] items-center justify-center rounded-[20px] bg-[#C58940]   p-4 text-[12px] font-semibold text-white"
                    type="submit"
                    disabled={!password}
                  >
                    Şifre Değiştir
                  </button>
                </div>
              </form>
              <button
                className=" mb-20 flex h-[40px] w-[200px] items-center justify-center rounded-[300px] bg-[#C58940]  text-lg font-semibold text-white"
                onClick={Out}
              >
                Çıkış Yap
              </button>
            </div>
          </div>
        </div>
        </RevealItems >
     
      </Container>
    </div>
  );
}

export default Profile;
