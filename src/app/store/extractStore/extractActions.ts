import { UserBalance } from './../../interfaces/componentsInterfaces';
import { createAction, props } from "@ngrx/store";
import { extractEvents } from "./extractEnum";

export const getExtract = createAction(
  extractEvents.getExtract,
  props<{cpf: string}>()
)

export const updateExtract = createAction(
  extractEvents.getExtract,
  props<{extractData: UserBalance}>()
)