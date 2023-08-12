import { useState } from "react";
import axios from "axios";
import { useReportContext } from "../..";
import { FieldValues } from "react-hook-form";

interface Props {
  schemaName: any;
  error: string | undefined;
  id: string;
  name: string;
  imagesType: string;
}

function FormUploadImageReport({
  schemaName,
  error,
  name,
  id,
  imagesType,
}: Props) {
  const { setValue } = useReportContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [images, setImages] = useState<string[] | undefined>();
  const preset_key = "denuncias-web";
  const cloud_name = "dhr6ywb8r";

  const transformFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const files = e.target.files;
      if (files) {
        const allImages = Array.from(files);

        const imageRULs: string[] = [];
        for (const image of allImages) {
          const formData = new FormData();
          formData.append("file", image);
          formData.append("upload_preset", preset_key);

          const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
            formData
          );
          const { data } = response;
          imageRULs.push(data.secure_url);
        }
        setImages(imageRULs);
        setValue(schemaName, imageRULs);
      }
    } catch (err) {}
  };

  return (
    <div>
      <label
        className={`${!images?.length && error && "text-red-400"} mb-1`}
        htmlFor={id}
      >
        {imagesType}
      </label>  
      <div className="flex overflow-hidden gap-6 my-3">
        <label
          className={`${
            !images?.length && error
              ? "border-red-400 text-red-400"
              : "border-violet-300"
          }  cursor-pointer w-auto border-2  h-8 hover:bg-violet-300 p-2 leading-3 rounded outline-none focus:border-blue-400`}
          htmlFor={id}
        >
          Subir imagen/es
        </label>
        {!images?.length ? (
          <div></div>
        ) : (
          <>
            <div className="flex gap-1 items-end">
              {images.slice(0, 2)?.map((image: string, i: number) => {
                return (
                  <img
                    key={i}
                    className="max-h-8 object-cover max-w-[60px]"
                    src={images?.length ? image : ""}
                  />
                );
              })}
              <p>...</p>
            </div>
          </>
        )}
        <input
          className="hidden"
          type="file"
          multiple
          id={id}
          name={name}
          onChange={transformFiles}
        />
      </div>
    </div>
  );
}
export default FormUploadImageReport;
