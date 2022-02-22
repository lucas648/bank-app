import { createAction, props } from "@ngrx/store";
import { UserData } from "src/app/interfaces/componentsInterfaces";
import { clientEvents } from "./clientEnum";


export const getClientData = createAction(
  clientEvents.getDataClient, 
)

export const updateClient = createAction(
  clientEvents.updateDataClient,
  props<{userData: UserData}>()
)
  