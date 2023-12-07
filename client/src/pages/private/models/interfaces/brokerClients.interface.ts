interface BrokerClientsPersonalUser {
  id: string;
  creater_at: string;
  updated_at: string;
  name: string;
  lastName: string;
  birthDate: string;
  gender: string;
  dni: string;
}

interface BrokerClientsLegalUser {
  id: string;
  creater_at: string;
  updated_at: string;
  companyName: string;
  cuit: string;
}

export interface AllBrokerClients {
  id: string;
  creater_at: string;
  updated_at: string;
  phoneNumber: string;
  email: string;
  altEmail: string;
  address: string;
  role: string;
  accessLevel: number;
  authorization: string;
  legalUser?: BrokerClientsLegalUser;
  personalUser?: BrokerClientsPersonalUser;
}