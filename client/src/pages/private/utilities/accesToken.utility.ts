import { ClientInfo } from "@/models";

const clientInfo: ClientInfo = JSON.parse(localStorage.getItem('client') as string)

export const accessToken = clientInfo?.accessToken
