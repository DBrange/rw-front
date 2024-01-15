import sdk from "@mercadopago/sdk-js";
import { useEffect, useState } from "react";
import { PaymentCard, useBrokerPaymentContext } from "../..";
import {
  ContainerField,
  Label,
  FieldIconBox,
  Field,
  Icon,
  P,
} from "@/styledComponents";
import { Form } from "react-router-dom";
import { SectionBrokerPaymentCards } from "./BrokerPayment.styled";

function BrokerPaymentBox() {
  const [preferenceId, setPreferenceId] = useState<{ id: string } | undefined>(
    undefined
  );

  return (
    <>
      <SectionBrokerPaymentCards>
        {/* <PaymentCard
          color={"free"}
          level={"Free"}
          inspectionQuantity={'5'}
          reportQuantity={'5'}
          price={0}
        /> */}
        <PaymentCard
          color={"basic"}
          level={"Basic"}
          inspectionQuantity={'200'}
          reportQuantity={'200'}
          price={5}
        />
        <PaymentCard
          color={"premium"}
          level={"Premium"}
          inspectionQuantity={'500'}
          reportQuantity={'500'}
          price={10}
        />
        <PaymentCard
          color={"gold"}
          level={"Gold"}
          inspectionQuantity={'Ilimitadas'}
          reportQuantity={'Ilimitadas'}
          price={15}
        />
      </SectionBrokerPaymentCards>
    </>
  );
}
export default BrokerPaymentBox;
