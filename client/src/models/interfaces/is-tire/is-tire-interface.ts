export interface IsTireValues {
  tireAmount: number
  tireWear: number
  tirePhoto: string[]
  replacementLocation: string
}

export interface ErrorsIsTireValues {
  tireAmount: string
  tirePhoto: string
  replacementLocation: string
}

export interface TouchedIsTireValues {
  tireAmount: boolean
  tirePhoto: boolean
  replacementLocation: boolean
}