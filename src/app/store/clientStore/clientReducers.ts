import { state } from '@angular/animations';
import { userData } from './../../mocks/components-mocks';
import { createReducer, on } from "@ngrx/store";
import { UserData } from "src/app/interfaces/componentsInterfaces";
import { getClientData } from "./clientActions";

const initialState : UserData = {
  name: '',
  firstName: '',
  balance: '',
  cpf: ''
}

export const clientReducer = createReducer(
  initialState, 
  //on(getClientData, (state, data)=>(state = {...state, state: userData}))
)