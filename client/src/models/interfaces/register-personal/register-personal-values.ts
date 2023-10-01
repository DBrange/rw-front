import {
  ErrorsPersonalValues,
  PersonalValues,
  TouchedPersonalValues,
} from "@/models";

export interface RegisterPersonalValues extends PersonalValues {
  password: string;
}

export interface ErrorsRegisterPersonalValues extends ErrorsPersonalValues {
  password: string;
}

export interface TouchedRegisterPersonalValues extends TouchedPersonalValues {
  password: boolean;
}
