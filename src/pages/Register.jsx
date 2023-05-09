import { NavLink, useNavigate } from "react-router-dom";
import { Container } from "../components/Container";
import lottie from "lottie-web";
import React, { useEffect, useRef, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";
import toast from "react-hot-toast";
import { RevealItems } from "../components/Animations/RevealAnimation";
import { Helmet } from "react-helmet";

function Register() {
  const navigate = useNavigate();

  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        toast.success("Kayıt Başarılı");
        navigate("/");
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        toast.error("Kayıt Başarısız");
        // ..
      });
  };

  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../lotties/register-cat.json"),
    });
  }, []);

  return (
    <Container>
       <Helmet>
       <title>Social Animals Kayıt</title>
      </Helmet>
      <RevealItems delay={300}>
        <div className="flex flex-row justify-center mt-32 gap-x-5 ">
          <div className="container w-[400px] h-[400px]" ref={container}></div>

          {/**RENKLI CONTAINER KISMI */}
          <div className=" mt-12 flex w-[500px]  flex-col gap-y-5  rounded-lg  p-10 shadow-outlineShadow">
            <label htmlFor="mail" className="text-[24px] font-medium">
              E-mail{" "}
            </label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email adresinizi Giriniz"
              id="mail"
              className="h-10 rounded-lg border pl-5 outline-none"
            />
            <label htmlFor="name" className="text-[24px] font-medium">
              Şifre
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Şifrenizi Giriniz"
              id="name"
              className="h-10 rounded-lg border pl-5 outline-none"
            />
            <button
              className="rounded-lg bg-[#F0EBCE] text-[24px] font-medium shadow-outlineShadow"
              onClick={singUp}
            >
              Kayıt Ol
            </button>
            <div className="flex gap-x-4">
              <p className="font-medium">Zaten bir hesabınız var mı?</p>
              <NavLink to="/Auth">
                <p className="cursor-pointer font-bold underline">Giriş Yap</p>
              </NavLink>
            </div>
          </div>
        </div>
      </RevealItems>
    </Container>
  );
}

export default Register;
