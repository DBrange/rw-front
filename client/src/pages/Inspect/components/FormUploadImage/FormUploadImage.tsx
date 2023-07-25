import { useState } from "react";
import axios from "axios";
import { useInspectContext } from "../../..";

interface Props {
  schemaName: string;
  error: any;
  touched: any
}

function FormUploadImage({schemaName, error, touched}: Props) {
  const { setValue } = useInspectContext();
  const [loading, setLoading] = useState();
  const [image, setImage] = useState();
  const preset_key = "denuncias-web";
  const cloud_name = "dhr6ywb8r";

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
      if (res) {
        setValue("schemaVehicle.images", res.data.secure_url);
        setImage(res.data.secure_url);
      }
      console.log(res.data.secure_url);
      setLoading(res.data.secure_url);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex gap-10 my-3">
      <label
        className={`${
          touched && error && "border-red-400 text-red-400"
        }  cursor-pointer w-auto border-2 border-violet-300 h-8 hover:bg-violet-300 p-2 leading-3 rounded outline-none focus:border-blue-400`}
        htmlFor="image"
      >
        Subir imagen
      </label>
      <img className="h-10 max-h-10 object-cover max-w-[60px]" src={image} />
      <input className="hidden" type="file" id="image" onChange={upload} />
    </div>
  );
}
export default FormUploadImage;
