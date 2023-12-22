import { createContext, useContext } from "react";
import {
  IBrokerPaymentContext,
  emptyBrokerPaymentContext,
} from "./empty-brokerPayment-context";

export const BrokerPaymentContext = createContext<IBrokerPaymentContext>(
  emptyBrokerPaymentContext
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const BrokerPaymentProvider = ({ children }: ChildrenType) => {
  
  const values = {};

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
