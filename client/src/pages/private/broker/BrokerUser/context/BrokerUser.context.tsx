import { createContext, useContext } from "react";
import { IBrokerUserContext,  } from ".";
import {emptyBrokerUserContext} from './empty-BrokerUser-context'

export const BrokerUserContext = createContext<IBrokerUserContext>(
  emptyBrokerUserContext
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const BrokerUserProvider = ({ children }: ChildrenType) => {
  const values = {};

  return (
    <BrokerUserContext.Provider value={values}>
      {children}
    </BrokerUserContext.Provider>
  );
};

export const useBrokerUserContext = () => {
  const context = useContext(BrokerUserContext);
  if (!context) {
    throw new Error("useBrokerUser can only be used inside BrokerUserProvider");
  }

  return context;
};
