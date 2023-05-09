import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RevealItems } from "../components/Animations/RevealAnimation";
import { db } from "../firebase";
import { Helmet } from "react-helmet";
import "../index.css";

const Blog = () => {
  const blogRef = collection(db, "blogs");
  const { user } = useSelector((state) => state.auth);

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    return onSnapshot(blogRef, (snapshot) => {
      setBlogs(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);


  return (
    <div>

      <Helmet>
      <title>Social Animals Blog</title>
      </Helmet>
      <RevealItems delay={200}>
        <div className="mt-20 flex justify-center">
          <div className="mb-10 flex flex-row gap-x-5 px-5 lg-max:flex-col lg-max:gap-y-5 mt-10">
         
            
            {blogs.map((blog) => (
              <div
                className="flex max-w-[400px] flex-col  gap-y-5  rounded-lg bg-[#F0EBCE] p-10 shadow-outlineShadow"
                key={blog.number}
              >
                <p className="text-center text-[30px] font-medium">
                  {blog.title}
                </p>
                <p>{blog.description}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealItems>
    </div>
  );
};
export default Blog;
