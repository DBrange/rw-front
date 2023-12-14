import { NotificationResponse } from "@/models/types/notification-response.enum";

export interface ClientInfo {
  accessToken?: string;
  user?: User;
  exp: number;
}

export interface User {
  id?: string;
  creater_at?: string;
  updated_at?: string;
  phoneNumber?: string;
  email?: string;
  altEmail?: string;
  address?: string;
  role?: string;
  accessLevel?: number;
  authorization?: string;
  personalUser?: PersonalUser;
  legalUser?: LegalUser;
  broker?: Broker;
  userBroker?: UserBroker;
  brokerUser?: BrokerUser
  receivedNotifications: Notification[];
}
interface BrokerUser {
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
  legalUser?: LegalUser;
  personalUser: PersonalUser;
}

export interface UserBroker {
  id: string;
  creater_at: string;
  updated_at: string;
  bussinesName: string;
  enrollment: string;
  card: string;
}

export interface PersonalUser {
  id: string;
  creater_at: string;
  updated_at: string;
  name: string;
  lastName: string;
  birthDate: string;
  gender: string;
  dni: string;
}

export interface Broker {
  id: string;
  creater_at: string;
  updated_at: string;
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
  creater_at: string;
  updated_at: string;
  title: string;
  message: string;
  sender: string;
  receiver: string;
  isRead: boolean;
  response?: NotificationResponse;
  withOptions: boolean
  additional: string
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

// export interface ClientInfo {
//   accessToken?: string;
//   user: User;
//   exp?: number;
// }

// export interface User {
//   id?: string;
//   creater_at?: string;
//   updated_at?: string;
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
//   creater_at: string;
//   updated_at: string;
//   bussinesName: string;
//   enrollment: string;
//   card: string;
// }
