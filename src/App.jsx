import React, { useState } from "react";
import PostCard from "./components/PostCard";
import { FaPlus } from "react-icons/fa";
// import { RxCross2 } from "react-icons/rx";
import PostForm from "./components/PostForm";
// import UpdateForm from "./components/UpdateForm";

const App = () => {
  const [showPost, setShowPost] = useState(true);
  const [allPost, setAllPost] = useState([]);

  // console.log(allPosts)
  const deletePost = (id) => {
    const updatedPost = allPost.filter((elem, idx) => idx !== id);
    setAllPost([...updatedPost]);
  };
  const updatePost = (image, description, id) =>{
    const updatedPost = allPost.map((elem,idx)=>{
       if(id == idx ){
        return{
            image:image,
            description: description
        }
      }
        else{
          return elem
        }
    })
      setAllPost([...updatedPost])
    
  }
  return (
    <>
      <nav className="flex items-center justify-between h-20 px-10 sm:px-20 font-inter">
        <div className="left  flex items-center font-bebas text-2xl">
          <div className="img-container w-15">
            <img src="./logo-removebg-preview.webp" alt="logo" />
          </div>
          <h3 className="text-gray-700">Ding Ding</h3>
        </div>
        <div
          onClick={() => setShowPost((prev) => !prev)}
          className="Right flex items-center bg-blue-800 text-white gap-2 px-4 py-2 rounded-xl cursor-pointer"
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

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-w-[1400px] mx-auto gap-4 justify-items-center font-inter">
        {}
        {showPost ? (
          <>
            {allPost.length <= 0 && <h3 className="text-xl text-gray-500 mt-[30vh]">Empty Post</h3>}{" "}
            {allPost.map((elem, idx) => (
              <PostCard
                postDetails={elem}
                key={idx}
                id={idx}
                deletePost={deletePost}
               
                updatePost={updatePost}
              />
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
