interface BrokerClientsPersonalUser {
  id: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  lastName: string;
  birthDate: string;
  gender: string;
  dni: string;
}

interface BrokerClientsLegalUser {
  id: string;
  created_at: Date;
  updated_at: Date;
  companyName: string;
  cuit: string;
}

export interface AllBrokerClients {
  id: string;
  created_at: Date;
  updated_at: Date;
  phoneNumber: string;
  email: string;
  altEmail: string;
  address: string;
  lastRecord: string | null;
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

export interface ClientByEmailPersonalUser {
  name: string;
  lastName: string;
  dni: string;
}
export interface ClientByEmailLegalUser {
  companyName: string;
  cuit: string;
}

export interface AllUsers {
  id: string;
  created_at: Date;
  updated_at: Date;
  personalUser?: AllUsersPersonalUser;
  legalUser?: AllUsersLegalUser;
  userBroker?: AllUsersUserBroker;
}

interface AllUsersPersonalUser {
  name: string;
  lastName: string;
  dni: string;
}

interface AllUsersLegalUser {
  companyName: string;
  cuit: string;
}

interface AllUsersUserBroker {
  id: string
}