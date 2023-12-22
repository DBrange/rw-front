
export interface ClientInfo {
  accessToken?: string;
  user?: User;
  exp: number;
}

export interface User {
  id?: string;
  created_at?: Date;
  updated_at?: Date;
  phoneNumber?: string;
  email?: string;
  altEmail?: string;
  address?: string;
  lastRecord?: Date;
  role?: string;
  accessLevel?: number;
  authorization?: string;
  personalUser?: PersonalUser;
  legalUser?: LegalUser;
  broker?: Broker;
  userBroker?: UserBroker;
  brokerUser?: BrokerUser;
  // receivedNotifications: Notification[];
}
interface BrokerUser {
  id: string;
  created_at: Date;
  updated_at: Date;
  phoneNumber: string;
  email: string;
  altEmail: string;
  address: string;
  role: string;
  accessLevel: number;
  authorization: string;
  legalUser?: LegalUser;
  personalUser: PersonalUser;
}

export interface UserBroker {
  id: string;
  created_at: Date;
  updated_at: Date;
  bussinesName: string;
  enrollment: string;
  card: string;
}

export interface PersonalUser {
  id: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  lastName: string;
  birthDate: string;
  gender: string;
  dni: string;
}

export interface Broker {
  id: string;
  created_at: Date;
  updated_at: Date;
  bussinesName: string;
  enrollment: string;
  card: string;
}

export interface LegalUser {
  companyName: string;
  cuit: string;
}

export interface Notification {
  id: string;
  created_at: Date;
  updated_at: Date;
  title: string;
  message: string;
  sender: string;
  receiver: string;
  isRead: boolean;
  response?: "ACCEPTED" |
  "REJECTED" |
  "null" 
  withOptions: boolean;
  additional: string;
}

export interface NotificationwithOptions {
  brokerId: string;
  clientId: string;
  userBrokerId: string;
  name: string;
  lastname: string;
  clientName: string;
  clientLastname: string;
}

export interface Ids {
  userBrokerId: string;
  clientId: string;
}

export interface UpdateMyProfile{
  userId?: string;
  phoneNumber?: string;
  address?: string;
}

// export interface UpdateLastRecord {
//   userId: string;
//   date: Date;
// }

// export interface ClientInfo {
//   accessToken?: string;
//   user: User;
//   exp?: number;
// }

// export interface User {
//   id?: string;
//   created_at?: Date;
//   updated_at?: Date;
//   name?: string;
//   lastName?: string;
//   birthDate?: string;
//   gender?: string;
//   dni?: string;
//   companyName?: string;
//   cuit?: string;
//   phoneNumber?: string;
//   altEmail?: string;
//   address?: string;
//   email?: string;
//   role?: string;
//   userBroker?: UserBroker;
//   broker?: Broker;
// }
// interface UserBroker {
//   id: string;
//   created_at: Date;
//   updated_at: Date;
//   bussinesName: string;
//   enrollment: string;
//   card: string;
// }
