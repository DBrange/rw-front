import { createContext, useContext } from "react";
import {
  IBrokerPaymentContext,
  emptyBrokerPaymentContext,
} from "./empty-brokerPayment-context";
import useSWRMutation from "swr/mutation";
import {
  CreatePreferenceUrl,
  createPreference,
} from "../services/broker-payment.service";

export const BrokerPaymentContext = createContext<IBrokerPaymentContext>(
  emptyBrokerPaymentContext
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const BrokerPaymentProvider = ({ children }: ChildrenType) => {
  const {
    error,
    trigger: createReferenceTrigger,
    data: preferenceIdData,
  } = useSWRMutation(CreatePreferenceUrl, createPreference);

  

  const values = { createReferenceTrigger, error, preferenceIdData };

  return (
    <BrokerPaymentContext.Provider value={values}>
      {children}
    </BrokerPaymentContext.Provider>
  );
};

export const useBrokerPaymentContext = () => {
  const context = useContext(BrokerPaymentContext);
  if (!context) {
    throw new Error(
      "useBrokerPaymentContext can only be used inside BrokerPaymentProvider"
    );
  }

  return context;
};
