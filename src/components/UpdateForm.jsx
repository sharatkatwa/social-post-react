import { useForm } from "react-hook-form";

const UpdateForm = ({postDetails, updatePost ,id, setShowUpdate}) => {
 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const handleData = (e)=>{
    updatePost(e.image,e.description ,id)
    setShowUpdate((prev)=> !prev)
  }
  return (
     <div className="max-w-500 w-100  h-130  rounded-xl shadow-2xl p-4 z-10">
      <h1 className="text-center text-4xl font-bebas bg-gradient-to-l from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] bg-clip-text text-transparent">
        Edit Post
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleData)}>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-600" htmlFor="image">
            image URL
          </label>
          <input
            {...register('image',{required:"Upload image to post"})}
            type="text"
            defaultValue={postDetails.image}
            // accept="image/*"
            name="image"
            className="outline-none border-3 border-gray-300 py-2 px-2 rounded-xl"
            placeholder="Example: https://unsplash.com/images?q=tbn"
          />
            {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-600" htmlFor="description">
            Description
          </label>
          <textarea
            {...register('description',{required:"Write description to post"})}
            type="textarea"
            defaultValue={postDetails.description}
            name="description"
            className="outline-none border-3 border-gray-300 px-2 py-2 rounded-xl"
            placeholder="Write caption here"
          />
            {errors.description && <p className="text-red-500">{errors.description.message}</p>}
          
        </div>
        <button className="text-xl bg-blue-700 text-white rounded py-2 hover:bg-blue-900 active:scale-[.99]">
          Save
        </button>
      </form>
    </div>
  )
}

export default UpdateForm