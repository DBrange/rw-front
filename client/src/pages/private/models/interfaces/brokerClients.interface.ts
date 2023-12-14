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

export interface ClientByEmail {
  id: string;
  email: string;
  personalUser: ClientByEmailPersonalUser;
  legalUser: ClientByEmailLegalUser;
}

export interface ClientByEmailPersonalUser{
    name: string;
    lastName: string;
    dni: string;
  }
export interface ClientByEmailLegalUser{
  
  companyName: string;
  cuit: string;
}