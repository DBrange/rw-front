import {
  DivWrappedPaymentCard,
  DivHeaderPaymentCard,
  DivBodyPaymentCard,
  DivFooterPaymentCard,
  DivBodyTextPaymentCard,
  BtnPaymentCard,
} from "./PaymentCard.styled";
import { BsCheckLg } from "react-icons/bs";

interface Props {
  color: string;
  level: string;
  inspectionQuantity: string;
  reportQuantity: string;
  price: number;
}

function PaymentCard({
  color,
  level,
  inspectionQuantity,
  reportQuantity,
  price,
}: Props) {
  return (
    <DivWrappedPaymentCard $color={color}>
      <DivHeaderPaymentCard $color={color}>
        <h3>{level}</h3>
      </DivHeaderPaymentCard>
      <DivBodyPaymentCard>
        <DivBodyTextPaymentCard>
          <BsCheckLg size={20} />
          <p> {`${inspectionQuantity} inspecciones`}</p>
        </DivBodyTextPaymentCard>
        <DivBodyTextPaymentCard>
          <BsCheckLg size={20} />
          <p>{`${reportQuantity} denuncias`}</p>
        </DivBodyTextPaymentCard>
      </DivBodyPaymentCard>
      <DivFooterPaymentCard $color={color}>
        <h2>{`USD$${price}`}</h2>
      <BtnPaymentCard $color={color}>Comprar</BtnPaymentCard>
      </DivFooterPaymentCard>
    </DivWrappedPaymentCard>
  );
}
export default PaymentCard;
