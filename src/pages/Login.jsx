import { NavLink, useNavigate } from "react-router-dom";
import { Container } from "../components/Container";
import lottie from "lottie-web";
import React, { useEffect, useRef, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {login as loginHandle} from "../store/auth";
import { RevealItems } from "../components/Animations/RevealAnimation";
import { Helmet } from "react-helmet";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
     
        const user = userCredential.user;
        if(user){
          dispatch(loginHandle(user))
          navigate("/profile", { replace: true });
        }
        
        navigate("/",{replace:true});
        toast.success("Giriş Başarılı");
      })
      .catch((error) => {
        // const errorCode = error.code;
       
        toast.error("Giriş Başarısız");
      });
  };



  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../lotties/dogBox.json"),
    });
  }, []);

 

  return (
    <Container>
       <Helmet>
       <title>Social Animals Giriş</title>
      </Helmet>
      <RevealItems delay={300}>
      <div className="flex flex-row justify-center items-center mt-28  gap-x-5 "
          
      tabIndex={0}
      >
        <div className="container w-[500px] h-[500px]" ref={container}></div>

        <div className=" [100px] max- mt-12 flex w-[500px] flex-col gap-y-5  rounded-lg  p-10 shadow-outlineShadow">
        <h1 className="text-center text-[#C58940] text-2xl font-semibold">SOCIAL ANIMALS</h1>
          <label htmlFor="mail" className="mt-[50px] text-[24px] font-medium">
            E-mail{" "}
          </label>
          <input
            type="text"
            placeholder="Email adresinizi giriniz"
            id="mail"
            onChange={(e) => setEmail(e.target.value)}
            className="h-10 rounded-lg border pl-5 outline-none"
          />
      
          <label htmlFor="name" className="text-[24px] font-medium">
            Şifre
          </label>
          <input
            type="password"
            placeholder="Şifrenizi giriniz"
            onChange={(e) => setPassword(e.target.value)}
            id="name"
            className="h-10 rounded-lg border pl-5 outline-none"
            
          />
          <button
            className="rounded-lg bg-[#F0EBCE] text-[24px] font-medium shadow-outlineShadow"
            onClick={Login}
          >
            Giriş Yap
          </button>
          <div className="flex gap-x-4">
            <p className="font-medium">Yeni bir hesap için</p>
            <NavLink to="/Auth/register">
              <p className="cursor-pointer font-bold underline">Kaydol</p>
            </NavLink>
          </div>
        </div>
      </div>
      </RevealItems>
    </Container>
  );
}

export default Login;
