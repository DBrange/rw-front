import { ClientInfo } from "@/models";
import { clientKey } from "@/redux/slices/clientSlice";

const clientInfo: ClientInfo = JSON.parse(localStorage.getItem(clientKey) as string)

export const accessToken = clientInfo?.accessToken
