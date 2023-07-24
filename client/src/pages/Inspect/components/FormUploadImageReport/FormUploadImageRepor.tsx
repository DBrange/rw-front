import { useState } from "react";
import axios from "axios";
import { useInspectContext } from "../../..";

interface Props {
 register: any
}

function FormUploadImageReport({register}: Props) {
  const { setValue } = useInspectContext();
  const [loading, setLoading] = useState();
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
      }
      console.log(res.data.secure_url);
      setLoading(res.data.secure_url);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <label htmlFor="image">Subir imagen</label>
      <input type="file" id="image" {...register} onChange={upload} />
      {/* <img className="h-10" src={image} /> */}
    </div>
  );
}
export default FormUploadImageReport;
