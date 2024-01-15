import { ObjForArr } from "@/models/interfaces/separateImages.interface";
import { ChangeEventType } from "@/pages";
import { loaderImageService } from "@/services/sharing-information.service";
import { Label, P } from "@/styledComponents";
import axios from "axios";
import { useEffect, useState } from "react";
import { PiWarningCircleFill } from "react-icons/pi";
import { ButtonForUploading, FormImagesContainer, InputFile } from "..";
import {
  DivImageInstructions,
  DivUploadImages,
  InstructionsUpload,
  LabelButtonImage,
} from "./FormSeparateImages.styled";

interface Props {
  label: string;
  error?: string;
  id: string;
  name: string;
  changeInputForImages: (e: ChangeEventType, images: string[]) => void;
  instructionsImages: string[];
  quantity: number;
  objForArr: ObjForArr;
}

function FormSeparateImages({
  error,
  id,
  name,
  label,
  changeInputForImages,
  instructionsImages,
  quantity,
  objForArr,
}: Props) {
  const [_imagess, setImagess] = useState<ObjForArr>(objForArr);
  const [images, setImages] = useState<string[]>([]);
  const [_loading, setLoading] = useState<boolean>(false);
  const [event, setEvent] = useState<ChangeEventType | null>(null);
  const preset_key = "denuncias-web";
  const cloud_name = "dhr6ywb8r";

  const imagesQuantityHTML = (quantity: number) => {
    let elements: JSX.Element[] = [];
    for (let i = 0; i < quantity; i++) {
      const imagesContainer = (
        <DivImageInstructions key={i}>
          <ButtonForUploading>
            <LabelButtonImage
              $error={!!(!images?.[i]?.length && error)}
              htmlFor={id + i}
            >
              {images?.[i]?.length ? (
                <div>{images?.[i]?.length && <img src={images?.[i]} />}</div>
              ) : (
                <h5>Subir imagen</h5>
              )}
            </LabelButtonImage>

            <InputFile
              type="file"
              multiple
              id={id + i}
              name={`${name}`}
              onChange={(e) => transformFiles(e, i)}
            />
          </ButtonForUploading>
          <InstructionsUpload $error={!!(!images?.[i]?.length && error)}>
            {`${instructionsImages[i]}`}
          </InstructionsUpload>
        </DivImageInstructions>
      );
      elements = [...elements, imagesContainer];
    }

    return elements;
  };

  const transformFiles = async (
    e: React.ChangeEvent<HTMLInputElement>,
    position: number
  ) => {
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

        const imagesArr = imageRULs[0];

        setImagess((el: ObjForArr) => {
          const prevImages = { ...el, [`${position}`]: imagesArr };
          const newArray = Object.values(prevImages);
          setImages(newArray);
          setEvent(e);

          return prevImages;
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (event) {
      changeInputForImages(event, images);
    }
  }, [images]);

  return (
    <FormImagesContainer>
      <Label $error={!!(images?.length === quantity && error)} htmlFor={id}>
        {label}
      </Label>

      <DivUploadImages>{imagesQuantityHTML(quantity)}</DivUploadImages>

      <span>
        <P $error={!!(images?.length === quantity && error)}>
          <PiWarningCircleFill />
          {"Debe completar todas las casillas" || "a"}
        </P>
      </span>
    </FormImagesContainer>
  );
}
export default FormSeparateImages;

// images?.length && (
//   <ImagesContainer>
//     {images.slice(0, 2)?.map((image: string, i: number) => {
//       return <Image key={i} src={images?.length ? image : ""} />;
//     })}
//     {images.length > 2 ? `+${images.length - 2}` : ""}
//   </ImagesContainer>
// );
