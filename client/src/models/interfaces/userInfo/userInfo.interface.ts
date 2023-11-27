export interface ClientInfo {
  accessToken?: string;
  user: User;
  exp?: number;
}

export interface User {
  id?: string;
  creater_at?: string;
  updated_at?: string;
  name?: string;
  lastName?: string;
  birthDate?: string;
  gender?: string;
  dni?: string;
  companyName?: string;
  cuit?: string;
  phoneNumber?: string;
  altEmail?: string;
  address?: string;
  email?: string;
  role?: string;
  userBroker?: UserBroker;
  broker?: Broker
}
interface UserBroker {
  id: string;
  creater_at: string;
  updated_at: string;
  bussinesName: string;
  enrollment: string;
  card: string;
}

interface Broker {
  id: string;
  creater_at: string;
  updated_at: string;
  bussinesName: string;
  enrollment: string;
  card: string;
}

