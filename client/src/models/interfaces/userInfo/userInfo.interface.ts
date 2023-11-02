interface ClientInfo {
  accessToken: string;
  user: User;
  exp: number
}

interface User {
  id: string;
  creater_at: string;
  updated_at: string;
  name: string;
  lastName: string;
  birthDate: string;
  phoneNumber: string;
  email: string;
  altEmail: string;
  gender: string;
  dni: string;
  address: string;
  role: string;
}