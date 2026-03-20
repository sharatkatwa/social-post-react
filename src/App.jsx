import React, { useState } from "react";
import PostCard from "./components/PostCard";
import { FaPlus } from "react-icons/fa";
import PostForm from "./components/PostForm";

const App = () => {
  
  const [showPost, setShowPost] = useState(true); // toggle post card state
  const [allPost, setAllPost] = useState([]); // All posts save here

// Post delete function
  const deletePost = (id) => {
    const updatedPost = allPost.filter((elem, idx) => idx !== id);
    setAllPost([...updatedPost]);
  };
  
  // Post Update function
  const updatePost = (image, description, id) => {
    const updatedPost = allPost.map((elem, idx) => {
      if (id == idx) {
        return {
          image: image,
          description: description,
        };
      } else {
        return elem;
      }
    });
    setAllPost([...updatedPost]);
  };
  
  
  return (
    <>
      {/* NavBar */}
      <nav className="flex items-center justify-between h-20 px-10 sm:px-20 font-inter shadow sticky top-0 z-10 backdrop-blur-2xl">
        <div className="left  flex items-center font-bebas text-2xl">
          <div className="img-container w-15">
            <img src="./logo-removebg-preview.webp" alt="logo" />
          </div>
          <h3 className="text-gray-700">Ding Ding</h3>
        </div>
        <div
          onClick={() => setShowPost((prev) => !prev)}
          className="Right flex items-center bg-indigo-500 text-white gap-2 px-4 py-2 rounded-xl cursor-pointer hover:bg-indigo-600 hover:scale-[1.02] transition duration-200"
        >
          {showPost ? (
            <>
              Post <FaPlus />
            </>
          ) : (
            <>
              Discard <FaPlus className="rotate-45" />
            </>
          )}
        </div>
      </nav>

      {/* main Content */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(380px,max-content))] justify-center max-w-[1400px] mx-auto gap-4 font-inter my-10">
        {showPost ? (
          <>
            {allPost.length <= 0 && <h3 className="text-xl text-center text-gray-500 mt-[30vh]">Empty Post</h3>}{" "}
            {allPost.map((elem, idx) => (
              <PostCard postDetails={elem} key={idx} id={idx} deletePost={deletePost} updatePost={updatePost} />
            ))}
          </>
        ) : (
          <PostForm setAllPost={setAllPost} setShowPost={setShowPost} />
        )}
      </div>
    </>
  );
};

export default App;
