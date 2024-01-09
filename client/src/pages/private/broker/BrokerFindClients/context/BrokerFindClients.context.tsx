import { AppDispatch, AppStore } from "@/redux";
import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSWRMutation from "swr/mutation";
import {
  getClientForEmail,
  getClientForEmailUrl,
  sendNotification,
  sendNotificationUrl,
} from "..";
import {
  IBrokerFindClientsContext,
  emptyBrokerFindClientsContext,
} from "./empty-brokerFindClients-context";

export const BrokerFindClientsContext =
  createContext<IBrokerFindClientsContext>(emptyBrokerFindClientsContext);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const BrokerFindClientsProvider = ({ children }: ChildrenType) => {
  const dispatch = useDispatch<AppDispatch>()
  const [searchField, setSearchField] = useState<string>("");
  const [modalActive, setModalActive] = useState<boolean>(false);
  // const [client, setClient] = useState<ClientByEmail | undefined | void>();
  const user = useSelector((store: AppStore) => store.user);

  const { data: client, trigger } = useSWRMutation(
    getClientForEmailUrl(searchField),
    getClientForEmail
  );

  const { trigger: triggerSendNotification } = useSWRMutation(
    sendNotificationUrl(),
    sendNotification
  );

  const activateTrigger = () => {
    const bodyTrigger = {
      brokerId: user?.user?.id,
      clientId: client?.id,
      userBrokerId: user.user?.userBroker?.id,
      name: user.user?.personalUser
        ? user.user?.personalUser.name
        : user.user?.legalUser?.companyName,
      lastname: user.user?.personalUser
        ? user.user?.personalUser.lastName
        : null,
      clientName: client?.personalUser
        ? client.personalUser.name
        : client?.legalUser.companyName,
      clientLastname: client?.personalUser ? client.personalUser.name : null,
    };

    triggerSendNotification(bodyTrigger);
  };

  useEffect(() => {
    trigger();
  }, [searchField]);

  const values = {
    setSearchField,
    searchField,
    client,
    setModalActive,
    modalActive,
    activateTrigger,
  };

  return (
    <BrokerFindClientsContext.Provider value={values}>
      {children}
    </BrokerFindClientsContext.Provider>
  );
};

export const useBrokerFindClientsContext = () => {
  const context = useContext(BrokerFindClientsContext);
  if (!context) {
    throw new Error(
      "useBrokerFindClientsContext can only be used inside BrokerFindClientsProvider"
    );
  }

  return context;
};
