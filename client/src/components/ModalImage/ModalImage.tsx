import { ClickEventType, SpanModalUpdate } from "@/pages";
import { modalImage } from "@/services/sharing-information.service";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import {
  DivModalImage,
  IRowLeftModalImage,
  IRowRightModalImage,
  ImgModalImage,
  SectionModalImageBg,
} from "./ModalImage.styled";

interface Props {
  modalActive: boolean;
  images: string[];
  imageIndex: number;
}

function ModalImage({ modalActive, images, imageIndex }: Props) {
  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    setIndex(imageIndex);
  }, [imageIndex]);

  const changePage = (e: ClickEventType) => {
    const { value } = e.currentTarget;

    const max = images.length - 1;

    if (value === "left") {
      if (index === 0) {
        setIndex(max);
      } else {
        setIndex(index - 1);
      }
    } else if (value === "right") {
      if (index === max) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
  };

  const close = () => modalImage.setSubject(false);

  return (
    <SectionModalImageBg $modalActive={modalActive}>
      <SpanModalUpdate onClick={close}>
        <IoClose size={20} />
      </SpanModalUpdate>
      <DivModalImage $modalActive={modalActive}>
        <IRowLeftModalImage value={"left"} onClick={changePage}>
          <IoIosArrowBack size={30} />
        </IRowLeftModalImage>
        <IRowRightModalImage value={"right"} onClick={changePage}>
          <IoIosArrowForward size={30} />
        </IRowRightModalImage>
        <ImgModalImage src={images[index]} alt="" />
      </DivModalImage>
    </SectionModalImageBg>
  );
}
export default ModalImage;
