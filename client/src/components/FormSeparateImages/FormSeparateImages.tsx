import { useEffect, useState } from "react";
import axios from "axios";
import { ChangeEventType } from "@/pages";
import { Label, P } from "@/styledComponents";
import {
  ButtonForUploading,
  FormImagesContainer,
  Image,
  ImagesContainer,
  InputFile,
  Instructions,
  LabelButton,
} from "..";
import { loaderImageService } from "@/services/sharing-information.service";
import {
  DivImageInstructions,
  DivUploadImages,
  InstructionsUpload,
  LabelButtonImage,
} from "./FormSeparateImages.styled";
import { PiWarningCircleFill } from "react-icons/pi";

interface Props {
  label: string;
  error?: string;
  id: string;
  name: string;
  changeInputForImages: (e: ChangeEventType, images: string[]) => void;
  instructionsImages: string[];
}

interface alguito {
  0?: string;
  1?: string;
  2?: string;
  3?: string;
  4?: string;
  5?: string;
  6?: string;
  7?: string;
}

function FormSeparateImages({
  error,
  id,
  name,
  label,
  changeInputForImages,
  instructionsImages,
}: Props) {
  const [imagess, setImagess] = useState<alguito>({
    0: undefined,
    1: undefined,
    2: undefined,
    3: undefined,
    4: undefined,
    5: undefined,
    6: undefined,
    7: undefined,
  });
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [event, setEvent] =
    useState<ChangeEventType | null>(null);
  const preset_key = "denuncias-web";
  const cloud_name = "dhr6ywb8r";

  const transformFiles = async (
    e: React.ChangeEvent<HTMLInputElement>,
    position: number
  ) => {
    try {
      const files = e.target.files;

      // const filesArr = []
      // filesArr[position] = files?.[0]
      // console.log(filesArr)
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

        setImagess((el: alguito) => {
          const prevImages = { ...el, [`${position}`]: imagesArr };
          const newArray = Object.values(prevImages);
          setImages(newArray);
          setEvent(e)
          // changeInputForImages(e, images);

          return prevImages;
        });
        // const [type, key] = name.split(".");
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

  // const nose = (p: number) => {
  //   const algo = ["hola"];
  //   setImagess((el: alguito) => {
  //     const im = {...el,[`${p}`]: algo};
  //     const newArray = Object.values(im);
  //     setImages(newArray as string[])
  //     return im
  //   });
  // };
  // console.log(images);

  // console.log(images);
  return (
    <FormImagesContainer>
      <Label $error={!!(images?.length === 8 && error)} htmlFor={id}>
        {label}
      </Label>

      <DivUploadImages>
        <DivImageInstructions>
          <ButtonForUploading>
            <LabelButtonImage
              $error={!!(!images?.[0]?.length && error)}
              htmlFor={`${id}0`}
            >
              {images?.[0]?.length ? (
                <div>{images?.[0]?.length && <img src={images?.[0]} />}</div>
              ) : (
                <h5>Subir imagen</h5>
              )}
            </LabelButtonImage>

            <InputFile
              type="file"
              multiple
              id={`${id}0`}
              name={`${name}`}
              onChange={(e) => transformFiles(e, 0)}
            />
          </ButtonForUploading>
          <InstructionsUpload $error={!!(!images?.[0]?.length && error)}>
            {`${instructionsImages[0]}`}
          </InstructionsUpload>
        </DivImageInstructions>

        <DivImageInstructions>
          <ButtonForUploading>
            <LabelButtonImage
              $error={!!(!images?.[1]?.length && error)}
              htmlFor={`${id}1`}
            >
              {images?.[1]?.length ? (
                <div>{images?.[1]?.length && <img src={images?.[1]} />}</div>
              ) : (
                <h5>Subir imagen</h5>
              )}
            </LabelButtonImage>

            <InputFile
              type="file"
              multiple
              id={`${id}1`}
              name={`${name}`}
              onChange={(e) => transformFiles(e, 1)}
            />
          </ButtonForUploading>
          <InstructionsUpload $error={!!(!images?.[1]?.length && error)}>
            {`${instructionsImages[1]}`}
          </InstructionsUpload>
        </DivImageInstructions>

        <DivImageInstructions>
          <ButtonForUploading>
            <LabelButtonImage
              $error={!!(!images?.[2]?.length && error)}
              htmlFor={`${id}2`}
            >
              {images?.[2]?.length ? (
                <div>{images?.[2]?.length && <img src={images?.[2]} />}</div>
              ) : (
                <h5>Subir imagen</h5>
              )}
            </LabelButtonImage>

            <InputFile
              type="file"
              multiple
              id={`${id}2`}
              name={`${name}`}
              onChange={(e) => transformFiles(e, 2)}
            />
          </ButtonForUploading>
          <InstructionsUpload $error={!!(!images?.[2]?.length && error)}>
            {`${instructionsImages[2]}`}
          </InstructionsUpload>
        </DivImageInstructions>

        <DivImageInstructions>
          <ButtonForUploading>
            <LabelButtonImage
              $error={!!(!images?.[3]?.length && error)}
              htmlFor={`${id}3`}
            >
              {images?.[3]?.length ? (
                <div>{images?.[3]?.length && <img src={images?.[3]} />}</div>
              ) : (
                <h5>Subir imagen</h5>
              )}
            </LabelButtonImage>

            <InputFile
              type="file"
              multiple
              id={`${id}3`}
              name={`${name}`}
              onChange={(e) => transformFiles(e, 3)}
            />
          </ButtonForUploading>
          <InstructionsUpload $error={!!(!images?.[3]?.length && error)}>
            {`${instructionsImages[3]}`}
          </InstructionsUpload>
        </DivImageInstructions>

        <DivImageInstructions>
          <ButtonForUploading>
            <LabelButtonImage
              $error={!!(!images?.[4]?.length && error)}
              htmlFor={`${id}4`}
            >
              {images?.[4]?.length ? (
                <div>{images?.[4]?.length && <img src={images?.[4]} />}</div>
              ) : (
                <h5>Subir imagen</h5>
              )}
            </LabelButtonImage>

            <InputFile
              type="file"
              multiple
              id={`${id}4`}
              name={`${name}`}
              onChange={(e) => transformFiles(e, 4)}
            />
          </ButtonForUploading>
          <InstructionsUpload $error={!!(!images?.[4]?.length && error)}>
            {`${instructionsImages[4]}`}
          </InstructionsUpload>
        </DivImageInstructions>

        <DivImageInstructions>
          <ButtonForUploading>
            <LabelButtonImage
              $error={!!(!images?.[5]?.length && error)}
              htmlFor={`${id}5`}
            >
              {images?.[5]?.length ? (
                <div>{images?.[5]?.length && <img src={images?.[5]} />}</div>
              ) : (
                <h5>Subir imagen</h5>
              )}
            </LabelButtonImage>

            <InputFile
              type="file"
              multiple
              id={`${id}5`}
              name={`${name}`}
              onChange={(e) => transformFiles(e, 5)}
            />
          </ButtonForUploading>
          <InstructionsUpload $error={!!(!images?.[5]?.length && error)}>
            {`${instructionsImages[5]}`}
          </InstructionsUpload>
        </DivImageInstructions>

        <DivImageInstructions>
          <ButtonForUploading>
            <LabelButtonImage
              $error={!!(!images?.[6]?.length && error)}
              htmlFor={`${id}6`}
            >
              {images?.[6]?.length ? (
                <div>{images?.[6]?.length && <img src={images?.[6]} />}</div>
              ) : (
                <h5>Subir imagen</h5>
              )}
            </LabelButtonImage>

            <InputFile
              type="file"
              multiple
              id={`${id}6`}
              name={`${name}`}
              onChange={(e) => transformFiles(e, 6)}
            />
          </ButtonForUploading>
          <InstructionsUpload $error={!!(!images?.[6]?.length && error)}>
            {`${instructionsImages[6]}`}
          </InstructionsUpload>
        </DivImageInstructions>

        <DivImageInstructions>
          <ButtonForUploading>
            <LabelButtonImage
              $error={!!(!images?.[7]?.length && error)}
              htmlFor={`${id}7`}
            >
              {images?.[7]?.length ? (
                <div>{images?.[7]?.length && <img src={images?.[7]} />}</div>
              ) : (
                <h5>Subir imagen</h5>
              )}
            </LabelButtonImage>

            <InputFile
              type="file"
              multiple
              id={`${id}7`}
              name={`${name}`}
              onChange={(e) => transformFiles(e, 7)}
            />
          </ButtonForUploading>
          <InstructionsUpload $error={!!(!images?.[7]?.length && error)}>
            {`${instructionsImages[7]}`}
          </InstructionsUpload>
        </DivImageInstructions>
      </DivUploadImages>

      <span>
        <P $error={!!(images?.length === 8 && error)}>
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
