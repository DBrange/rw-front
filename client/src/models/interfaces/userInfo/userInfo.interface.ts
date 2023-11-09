interface ClientInfo {
  accessToken?: string;
  user: User;
  exp?: number;
}

interface User {
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
}
