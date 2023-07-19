import { useState } from "react";
import axios from 'axios'
import { useInspectContext } from "../..";

function FormUploadImage({ register }: any) {
  
  // const { validateImages } = useInspectContext();

  const [image, setImage] = useState();
  const [loading, setLoading] = useState();
  const preset_key = "denuncias-web";
  const cloud_name = 'dhr6ywb8r';
  
  const upload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const files = e.target.files;
      const data = new FormData();
      if (files) {
        data.append("file", files[0]);
      }
      data.append("upload_preset", preset_key);

      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        data
      );
      
      setImage(res.data.secure_url);
      console.log(res.data.secure_url);
      setLoading(res.data.secure_url);
      if (image) {
        
        // validateImages(image)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
    <label htmlFor="images">Subir imagen</label>
      <input type="file" id="images" onChange={upload} />
      <img className="h-10" src={image}/>
    </div>
  )
}
export default FormUploadImage