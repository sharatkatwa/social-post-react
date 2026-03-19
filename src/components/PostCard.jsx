import { useState } from "react"
import UpdateForm from "./UpdateForm"

const PostCard = ({postDetails,deletePost, id, updatePost}) => {
 const [showUpdate, setShowUpdate] = useState(false)
  return (<>
      {showUpdate? <UpdateForm postDetails={postDetails} updatePost={updatePost} setShowUpdate={setShowUpdate} id={id}/>:  <div className="post-card  rounded-xl shadow-xl bg-blue-100 h-fit p-2 flex flex-col gap-4">
        <div className="img-container h-100 w-100 overflow-hidden rounded-xl bg-white">
          <img src={postDetails.image} alt="Image" className='object-cover object-center' />
        </div>
        <div className="text-container px-2">
        <div className="description mb-4">
          {postDetails.description}
        </div>
        <div className="btn-container flex items-center justify-end gap-4">
            <button className='bg-yellow-200 px-4 py-2 rounded' onClick={()=>setShowUpdate(prev=>!prev)}>Update</button>
            <button className='border-1 border-red-700 px-4 py-2 rounded text-red-700' onClick={()=>deletePost(id)}>Delete</button>
        </div>
        </div>
      </div>}
     
  </>
      
      
  )
}

export default PostCard