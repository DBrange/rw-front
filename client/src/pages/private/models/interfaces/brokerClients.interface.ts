interface BrokerClientsUser {
  name: string;
  lastName: string;
  dni: string;
}

interface BrokerClientsLegalUser {
  companyName: string;
  cuit: string;
}

export interface AllBrokerClients {
  id: string
  name: string;
  lastName: string;
  dni: string;
  companyName: string;
  cuit: string;
}
