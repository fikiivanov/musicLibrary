import { Add } from "../../api/dataApi"
import { useNavigate } from "react-router-dom"
export const Create =()=>
{
const navigate= useNavigate()
  const SubmitHandler =(e)=>
  {
e.preventDefault()
 const { singer,
 album,
 imageUrl,
 release,
 label,
 sales,
}=Object.fromEntries(new FormData(e.target))

    let movie=
  {
    singer:singer,
  album:album,
  imageUrl:imageUrl,
  release:release, 
  label:label, 
  sales:sales,

  }
  Add(movie)
  
navigate("/Dashboard")
  }
  
    return    <section id="create">
    <div className="form">
      <h2>Add Album</h2>
      <form className="create-form" onSubmit={SubmitHandler}>
        <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
        <input type="text" name="album" id="album-album" placeholder="Album" />
        <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
        <input type="text" name="release" id="album-release" placeholder="Release date" />
        <input type="text" name="label" id="album-label" placeholder="Label" />
        <input type="text" name="sales" id="album-sales" placeholder="Sales" />

        <button type="submit">post</button>
      </form>
    </div>
  </section>

}