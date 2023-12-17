import { AllBrokerClients, AllClientAssets, AllClientSinisters } from "@/pages";

export interface DashboardInfo {
  assetsLastWeek: AllClientAssets[];
  sinistersLastWeek: AllClientAssets[];
  clientsLastWeek: AllBrokerClients[];
  newAsyncDate: Date;
}