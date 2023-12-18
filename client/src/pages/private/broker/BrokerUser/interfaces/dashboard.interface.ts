import { AllBrokerClients, AllClientAssets, AllClientSinisters } from "@/pages";

export interface DashboardInfo {
  assetsLastWeek: AllClientAssets[];
  sinistersLastWeek: AllClientSinisters[];
  clientsLastWeek: AllBrokerClients[];
  newAsyncDate: Date;
}