import { useState } from "react";
import axios from "axios";
import { ChangeEventType, loaderImageService } from "@/pages";
import { Label } from "@/styledComponents";
import {
  FormImagesContainer,
  ButtonForUploading,
  LabelButton,
  ImagesContainer,
  InputFile,
  Image,
} from ".";
import { Instructions } from "..";

interface Props {
  label: string;
  error?: string;
  id: string;
  name: string;
  changeInputForImages: (e: ChangeEventType, images: string[]) => void;
  instructionsImages: string[];
}

function FormImages({
  error,
  id,
  name,
  label,
  changeInputForImages,
  instructionsImages,
}: Props) {
  const [images, setImages] = useState<string[] | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const preset_key = "denuncias-web";
  const cloud_name = "dhr6ywb8r";

  const transformFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const files = e.target.files;
      if (files) {
        const allImages = Array.from(files);

        const imageRULs: string[] = [];
        setLoading(true);
        loaderImageService.setSubject(true);
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
        setLoading(false);
        loaderImageService.setSubject(false);
        setImages(imageRULs);
        // const [type, key] = name.split(".");

        changeInputForImages(e, imageRULs);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <FormImagesContainer>
      <Label $error={!!(!images?.length && error)} htmlFor={id}>
        {label}
      </Label>
      <ButtonForUploading>
        <LabelButton $error={!!(!images?.length && error)} htmlFor={id}>
          Subir imagen/es
        </LabelButton>
        {loading ? (
          // <Loader />
          <></>
        ) : (
          images?.length && (
            <ImagesContainer>
              {images.slice(0, 2)?.map((image: string, i: number) => {
                return <Image key={i} src={images?.length ? image : ""} />;
              })}
              {images.length > 2 ? `+${images.length - 2}` : ""}
            </ImagesContainer>
          )
        )}
        <InputFile
          type="file"
          multiple
          id={id}
          name={name}
          onChange={transformFiles}
        />
      </ButtonForUploading>
      <Instructions>Fotos:</Instructions>
      {instructionsImages.map((el, i) => (
        <Instructions key={i} $error={!!(!images?.length && error)}>{`${
          i + 1
        }. ${el}`}</Instructions>
      ))}
    </FormImagesContainer>
  );
}
export default FormImages;
