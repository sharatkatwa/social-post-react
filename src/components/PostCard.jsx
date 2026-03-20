import { useState } from "react";
import UpdateForm from "./UpdateForm";

const PostCard = ({ postDetails, deletePost, id, updatePost }) => {
  const [showUpdate, setShowUpdate] = useState(false);
  return (
    <>
      {showUpdate ? (
        <UpdateForm postDetails={postDetails} updatePost={updatePost} setShowUpdate={setShowUpdate} id={id} />
      ) : (
        <div className="post-card w-[380px]  rounded-2xl shadow-md bg-gray-50 h-fit p-2 flex flex-col text-gray-800 hover:shadow-xl transition duration-300">
          <div className="img-container h-100 w-full overflow-hidden rounded-t-2xl bg-white flex items-center justify-center mb-4">
            <img src={postDetails.image} alt="Image" className="object-cover object-center" />
          </div>
          <div className="text-container h-25 px-2">
            <div className="description mb-4 line-clamp-2">{postDetails.description}</div>
            <div className="btn-container h-fit flex items-end justify-end gap-4">
              <button
                className="bg-indigo-500 hover:bg-indigo-600 transition duration-200 text-white px-4 py-2 rounded-xl"
                onClick={() => setShowUpdate((prev) => !prev)}
              >
                Update
              </button>
              <button
                className="border-1 hover:bg-red-500 hover:text-white transition duration-200 px-4 py-2 rounded-xl text-red-500"
                onClick={() => deletePost(id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostCard;
