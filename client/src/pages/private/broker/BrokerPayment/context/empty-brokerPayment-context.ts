export interface IBrokerPaymentContext {
  createReferenceTrigger: any;
  error: any;
  preferenceIdData: {id: string} | undefined
}

export const emptyBrokerPaymentContext: IBrokerPaymentContext = {
  createReferenceTrigger: {},
  error: {},
preferenceIdData: undefined
};
