export interface NewPassword {
  oldPassword: string;
  newPassword: string;
}

export interface NewPasswordError {
  oldPassword: string;
  newPassword: string;
}

export interface NewPasswordTouched {
  oldPassword: boolean;
  newPassword: boolean;
}