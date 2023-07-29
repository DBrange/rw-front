import { useState } from "react";
import axios from "axios";
import { useReportContext } from "../../..";

interface Props {
  schemaName: string;
  error: any;
}

function FormUploadImageReport({ schemaName, error }: Props) {
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

        const imageURLs: string[] = [];
        for (const image of allImages) {
          const formData = new FormData();
          formData.append("file", image);
          formData.append("upload_preset", preset_key);

          const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
            formData
          );
          const { data } = response;
          imageURLs.push(data.secure_url);
        }
        setImages(imageURLs);
        setValue(schemaName, imageURLs);
      }
      console.log(images);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="flex overflow-hidden gap-6 my-3">
        <label
          className={`${
            !images?.length && error
              ? "border-red-400 text-red-400"
              : "border-violet-300"
          }  cursor-pointer w-auto border-2 h-8 hover:bg-violet-300 p-2 leading-3 rounded outline-none focus:border-blue-400`}
          htmlFor="image"
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
                    className="max-h-8 object-cover max-w-[50px]"
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
          id="image"
          onChange={transformFiles}
        />
      </div>
    </div>
  );
}
export default FormUploadImageReport;
